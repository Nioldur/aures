<?
session_start();

if( $_GET['filename']) {

	$delete_item = array();
	$delete_item['filename'] = $_GET['filename'];
	
	if( substr( $delete_item['filename'], 0, 7) == "http://") {
	
		$delete_item['filename'] = strstr( $delete_item['filename'], "uploads/");
	}
	
	settype( $_SESSION['downloadbox'], "array");
	foreach( $_SESSION['downloadbox'] as $key=>$value) {
		
		// Array-Eintrag gewaehlter Datei loeschen
		if( $value['filename'] == $delete_item['filename']) {
			
			array_splice( $_SESSION['downloadbox'], $key, 1);
		}
	}
}

include( "createbox.php");
?>