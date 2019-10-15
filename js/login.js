$(document).ready(function() {
    $("form").submit(function(e){
        e.preventDefault(e);
    });
});

$(function() {
    $('.page-alert').hide();
    $('.page-alert .close').click(function(e) {
        e.preventDefault();
        $(this).closest('.page-alert').slideUp();
    });
});


function login() {
	$('.loginContent.first').addClass('getOut');
	$('.loginContent.second').removeClass('getIn');
	$('#loginFooter').html("Qui &ecirc;tes-vous ?");
}

function showRegister() {
	$('#registerPart').css("max-height", "400px");
	$('.loginContent input[type=submit]').attr("value", "Inscription");
	$('.loginContent input[type=submit]').attr("onclick", "register()");
}

function logSelect(id) {
	if(id == 'child') {
		if($('.famSelect#child').hasClass('selected')) {
			$('.famSelect#child').removeClass('selected');
			$('.codePart').css("max-height", "0px");
		} else {
			$('.famSelect#child').addClass('selected');
			$('.codePart #code').css("display", "none");
			$('.codePart').css("max-height", "300px");
		}
		$('.famSelect#parent').removeClass('selected');
	} else {
		if($('.famSelect#parent').hasClass('selected')) {
			$('.famSelect#parent').removeClass('selected');
			$('.codePart').css("max-height", "0px");
		} else {
			$('.famSelect#parent').addClass('selected');
			$('.codePart #code').css("display", "inline");
			$('.codePart').css("max-height", "300px");
		}
		$('.famSelect#child').removeClass('selected');
	}
}

function confirmLogin() {
	if ($('.famSelect#child').hasClass('selected')) {
		Swal.fire(
		  'Succ&egrave;s!',
		  'Vous &ecirc;tes maintenant connect&eacute; au compte <strong>'+$('#login').val()+'</strong> en tant qu\'enfant!',
		  'success'
		).then((result) => {
		    window.location.replace("menu.html");
		});
	} else {
		if($('#code').val() == "0000") {
			Swal.fire(
			  'Succ&egrave;s!',
			  'Vous &ecirc;tes maintenant connect&eacute; au compte <strong>'+$('#login').val()+'</strong> en tant qu\'adulte!',
			  'success'
			).then((result) => {
			    window.location.replace("menu.html");
			});
		} else {
			// $('.alert').removeClass('hide');
			// $('.alert').addClass('show');
			var t = (new Date()).getTime();
			$("#alerts").append('<div class="alert alert-danger alert-dismissible fade show" id="alt'+t+'"><strong>Erreur: </strong>Code incorrect ! (le code est 0000)<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
		}
	}
}

function register() {
	Swal.fire(
	  'Succ&egrave;s!',
	  'Votre inscription s\'est bien d&eacute;roul&eacute, '+$('#name').val()+'! Vous pouvez d&egrave;s &agrave; pr&eacute;sent <a href="login.html">vous connecter</a> avec vos identifiants.',
	  'success'
	);
}