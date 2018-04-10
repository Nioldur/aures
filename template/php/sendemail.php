<?
//function to zip and force download the files using PHP
function zipFilesAndEmail( $file_names, $archive_file_name, $file_path, $adress_to, $adress_from) {
	
	#$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i";
	$pattern = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i';
	if( !preg_match( $pattern, $adress_to)) return false;
	
	#if( !filter_var( $adress_to, FILTER_VALIDATE_EMAIL)) return false;
	
	//create the object
	$zip = new ZipArchive();
	
	//create the file and throw the error if unsuccessful
	if( $zip->open( $archive_file_name, ZIPARCHIVE::CREATE )!==TRUE) {
	
		exit("cannot open <$archive_file_name>\n");
	}
	
	//add each files of $file_name array to archive
	foreach( $file_names as $files) {
	
		if( file_exists($file_path . $files)) $zip->addFile( $file_path . $files,$files);
		else {
			
			echo "File not found.";
			exit;
		}
	}
	
	
	#echo "numfiles: " . $zip->numFiles . "\n";
	#echo "status:" . $zip->status . "\n";
	$zip->close();
	
	// Email Link
	$subject = "Jemand hat Ihnen einen Link zu Dateien der Aures Finanz AG gesendet";
	$message = "Sehr geehrte Damen und Herren,

vielen Dank für Ihr Interesse!

Die Aures Finanz AG & Cie. KG stellt Ihnen die erwünschten Unterlagen hier zur
Verfügung: http://aures.ag/fileadmin/template/php/". $archive_file_name ."

Dieser Auftrag wurde uns am ". date( "d.m.Y") ." um ". date( "H:i") ." Uhr von einem Besucher unserer Homepage erteilt.
Für weitere Fragen stehen wir Ihnen gern unter info@aures.ag zur Verfügung.

Mit freundlichen Grüßen,
Ihre Aures Finanz AG & Cie. KG";

	if( mail( trim( $adress_to), $subject, $message, 'From: '. $adress_from)) {
		
		$message = "Ein Benutzer der Seite http://www.aures.ag/ hat am ". date( "d.m.Y") ." um ". date( "H:i") ." Uhr einige PDF-Dateien an die Email-Adresse ". $adress_to ." versendet. Sie können die PDF-Dateien unter folgendem Link abrufen: http://aures.ag/fileadmin/template/php/". $archive_file_name;
		mail( "info@aures.ag", "Eine Downloadbox wurde als Email versendet.", $message, 'From: '. $adress_from);

		return true;
	}
	else return false;
}

session_start();
settype( $_SESSION['downloadbox'], "array");

foreach( $_SESSION['downloadbox'] as $key=>$value) {
	
	$tmp = explode( "/", $value['filename']);
	$tmpfilename = array_pop( $tmp);
	$filearray[] = $tmpfilename;
}

if( zipFilesAndEmail( $filearray, "aures_". date("YmdHis") .".zip", $_SERVER['DOCUMENT_ROOT']."/uploads/tx_gvauresforum/", $_GET['email'], "Aures Finanz AG & Cie. KG <info@aures.ag>")) {
?>
<h3>Erfolg</h3>
<p><strong>Die Download-Box wurde an die &uuml;bergebene E-Mail Adresse versendet.</strong></p>
<p><a href="#" id="back-to-box">&lt;&lt;&lt; zur&uuml;ck</a></p>
<?
} else {
?>
<h3>Fehler</h3>
<p><strong>Die Download-Box konnte <u>nicht</u> an die &uuml;bergebene E-Mail Adresse versendet werden.</strong></p>
<p><a href="#" id="back-to-box">&lt;&lt;&lt; zur&uuml;ck</a></p>
<?
}
?>
