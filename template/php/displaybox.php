<?
session_start();
settype( $_SESSION['downloadbox'], "array");

foreach( $_SESSION['downloadbox'] as $key=>$value) {
?>
	<li class="pdf"><a href="<?=$value['filename']?>"><?=$value['title']?></a></li>
<?
}
?>