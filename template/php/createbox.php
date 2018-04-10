<?
if( count( $_SESSION['downloadbox']) > 0) {
?>
<h3>Download-Box</h3>
<div class="head_dateiliste"><p><strong>Die Download-Box enth&auml;lt <?=count( $_SESSION['downloadbox'])?> Dokument<?=( count( $_SESSION['downloadbox']) > 1 ? "e" : "")?></strong></p></div>
<ul id="mycarousel" class="dateiliste jcarousel jcarousel-skin-tango">
<?
	foreach( $_SESSION['downloadbox'] as $key=>$value) {
?>
	<li class="pdf">
		<a href="<?=$value['filename']?>" target="_blank"><?=htmlentities( $value['title'])?></a>
		<a class="option removefrombox" href="<?=$value['filename']?>"><span>Datei aus der Download-Box entfernen</span></a>
	</li>
<?
	}
?>
</ul>
<div class="hr"></div>
<ul class="optionen">
	<li>&gt;&gt;&gt; <a href="#" class="downloadbox_email">Box als Email verschicken</a></li>
	<li>&gt;&gt;&gt; <a href="/fileadmin/template/php/downloadzip.php">Box als ZIP herunterladen</a></li>
</ul>
<?
} else {
?>
<h3>Download-Box</h3>
<p><strong>Aktuell befinden sich keine Dokumente in der Download-Box.</strong></p>
<p>F&uuml;gen Sie Dokumente zur Download-Box hinzu, um sie als ZIP-Datei zu speichern oder sie per E-Mail zu versenden.</p>
<?
}
?>