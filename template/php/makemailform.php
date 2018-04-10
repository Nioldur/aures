<?
session_start();
if( count( $_SESSION['downloadbox']) > 0) {
?>
<h3>Download-Box als E-Mail versenden</h3>
<p><strong>Die Download-Box enth&auml;lt <?=count( $_SESSION['downloadbox'])?> Dokument<?=( count( $_SESSION['downloadbox']) > 1 ? "e" : "")?></strong></p>
<p style="margin-bottom:3px">Bitte geben Sie hier die E-Mail Adresse ein, an die Sie die Download-Box versenden m&ouml;chten:</p>
<form action="#" method="post" id="downloadbox_versand-form">
	<input type="text" name="email_adresse" id="versandTo">
	<input type="submit" name="submit" value="absenden" id="downloadbox_versand-submit">
</form>
<p><a href="#" id="back-to-box">&lt;&lt;&lt; zur&uuml;ck</a></p>
<?
} else {
?>
<h3>Download-Box</h3>
<p><strong>Hinweis: Die Download-Box ist leer. Sie k&ouml;nnen eine leere Download-Box nicht als E-Mail versenden.</strong></p>
<p>F&uuml;gen Sie Dokumente zur Download-Box hinzu, um sie als ZIP-Datei zu speichern oder sie per E-Mail zu versenden.</p>
<?
}
?>