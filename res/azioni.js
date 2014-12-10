/*global $, jQuery */
// Dati
/* ================================================ */
var titolo = 'Fase REM';
var autore = 'Emiliano Poggi';
var anno = new Date().getFullYear();
/* ================================================ */
// Animazione cursore console
/* ================================================ */
function blinkeffect(selector) {
	'use strict';
	$(selector).fadeOut(400, function () {
		$(this).fadeIn(400, function () {
			blinkeffect(this);
		});
	});
}
$(function () {
	'use strict';
	blinkeffect('.cursore');
});
/* ================================================ */
// Azioni
/* ================================================ */
$(document).ready(function () {
	/* ================================================ */
	// Configurazione generale
	/* ================================================ */
	'use strict';
	$('head title').text(titolo);
	$('header h1').text(titolo);
	$('.autore').text(autore);
	$('.anno').text(anno);
	$('#sezione_1 .titolo').text(titolo);
	$('#monospace').click(function () {
		$('html').toggleClass('monospace');
		$('#monospace span').toggleClass('attivo');
	});
	/* ================================================ */
	// Sezione_1
	/* ================================================ */
	if (window.location.hash === '') {
		$('#sezione_1').show('slow');
	}
	function sezione_1_2() {
		var segnalibro = 'Prologo';
		$('header #segnalibro').text(segnalibro);
		$('#sezione_1').hide('slow', function () {
			$('header').fadeIn('slow');
			$('#sezione_2').show('slow');
		});
	}
	$('#sezione_1 .azione').click(function () {
		sezione_1_2();
		window.location.hash = '#sezione_2';
	});
	/* ================================================ */
	// Sezione_2
	/* ================================================ */
	if (window.location.hash === '#sezione_2') {
		sezione_1_2();
    }
	function sezione_2_3() {
		if ($('#sezione_2 #nome_utente').val() === '') {
			$('#sezione_2 .error').show('fast');
		} else {
			$('#sezione_2').hide('slow', function () {
				var nome_utente = $('#sezione_2 #nome_utente').val();
				$('.nome_immesso').text(nome_utente);
				$('#sezione_3').show('slow');
			});
		}
	}
	$('#sezione_2 .azione').click(function () {
		sezione_2_3();
		window.location.hash = '#sezione_3';
	});
	/* ================================================ */
	// Sezione_3
	/* ================================================ */
	if (window.location.hash === '#sezione_3') {
		$('#sezione_2 #nome_utente').val('te');
		sezione_2_3();
    }
	function sezione_3_4a() {
		$('#sezione_3').hide('slow', function () {
			$('#sezione_4a').show('slow');
		});
	}
	$('#sezione_3 .azione.opt_a').click(function () {
		sezione_3_4a();
		window.location.hash = '#sezione_4a';
	});
});
