function box_init() {
	
	/* Datei aus der Box entfernen */
	$('.removefrombox').click( function(event) {
	
		event.preventDefault();
	
		var filename = $(this).attr("href");
		
		$(this).parent().hide("slow", function() {
				
				$.ajax({
					url: '/fileadmin/template/php/removefrombox.php?filename='+filename,
					success: function(data) {
						$('.downloadbox').html(data);
						box_init();
					}
				});
			}
		);
		
		return false;
	});
	
	/* Box emailen */
	$('.downloadbox_email').click( function(event) {
		
		event.preventDefault();
		
		$.ajax({
			url: '/fileadmin/template/php/makemailform.php',
			success: function(data) {
				$('.downloadbox').html(data);
				box_init();
			}
		});
		
		return false;
	});
	
	/* Box email form submit*/
	$('#downloadbox_versand-submit').click(function () {
		
		var email = $('#versandTo').val();
		$.ajax({
			url: '/fileadmin/template/php/sendemail.php?email='+email,
			success: function(data) {
				$('.downloadbox').html(data);
				box_init();
			}
		});
		
		return false;
	});
	
	/* Zurueck Link */
	$('#back-to-box').click(function () {
		
		$.ajax({
			url: '/fileadmin/template/php/initbox.php',
			success: function(data) {
				$('.downloadbox').html(data);
				box_init();
			}
		});
		
		return false;
	});
	
	/* Carousel 
    $('#mycarousel').jcarousel({
        vertical:true,
        scroll:1,
        visible:3,
        animation:"fast"
    });*/	
}

jQuery(document).ready(function() {
//------------------------------------------------//

	/* Box erstellen */
	$.ajax({
		url: '/fileadmin/template/php/initbox.php',
		success: function(data) {
			$('.downloadbox').html(data);
			box_init();
		}
	});
	
	/* Datei zur Box hinzufuegen */
	$('.downloadbox_file').click(function () {

		var filename = $(this).attr("href");
		var title = $(this).attr("title");
		
		$.ajax({
			url: '/fileadmin/template/php/add2box.php?filename='+filename+'&title='+title,
			success: function(data) {
				$('.downloadbox').html(data);
				box_init();
			}
		});
		
		return false;
	});
	
	/* Suchfeld */
	$("#suche input[type=text]").focus(function(){
		
		if( $(this).val() == "Bitte Suchbegriff eingeben!") {
			
			$(this).val("");
		}
	});
	
	$("#suche input[type=text]").blur(function(){
		
		if( $(this).val() == "") {
			
			$(this).val("Bitte Suchbegriff eingeben!");
		}
	});
	
	/* Logo */
	$("#logo").click(function(){
		
		document.location.href='/';
	});
	
	/* Beratungsbox */	
	$(".beratungsbox").click(function(){
		
		document.location.href='/index.php?id=98';
	});
	
	$(".beratungsbox").mouseenter(function(){$(this).fadeOut(100);$(this).fadeIn(500);});
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.downloadbox').remove();
		$('.downloadbox_file').remove();
		$("p.linkbox").remove();
	}
	
//------------------------------------------------//
});