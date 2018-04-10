<?
session_start();
	
if( $_GET['filename'] && $_GET['title']) {

	$new_item = array();
	$new_item['filename'] = $_GET['filename'];
	$new_item['title'] = $_GET['title'];
	
	$item_exists = false;
	
	settype( $_SESSION['downloadbox'], "array");
	foreach( $_SESSION['downloadbox'] as $key=>$value) {
		
		// Falls die Datei schon in der Box liegt, hinzufuegen unterbinden
		if( $value['filename'] == $new_item['filename']) {
			
			$item_exists = true;
		}
	}
	
	if( !$item_exists) $_SESSION['downloadbox'][] = $new_item;
}

include( "createbox.php");
?>