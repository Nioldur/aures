<?
//function to zip and force download the files using PHP
function zipFilesAndDownload( $file_names, $archive_file_name, $file_path) {

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
	
	//then send the headers to foce download the zip file
	header("Content-type: application/zip");
	header("Content-Disposition: attachment; filename=$archive_file_name");
	header("Pragma: no-cache");
	header("Expires: 0");
	readfile("$archive_file_name");
	exit;

}

session_start();
settype( $_SESSION['downloadbox'], "array");

foreach( $_SESSION['downloadbox'] as $key=>$value) {
	
	$tmp = explode( "/", $value['filename']);
	$tmpfilename = array_pop( $tmp);
	$filearray[] = $tmpfilename;
}

zipFilesAndDownload( $filearray, "aures_". date("YmdHis") .".zip", $_SERVER['DOCUMENT_ROOT']."uploads/tx_gvauresforum/");
?>
