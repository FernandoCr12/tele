$(document).ready(function() {
    // Encendido de la TV
    $('.powerOn').click(function() {
        $('.off-screen').hide();
		$('.welcome-screen').fadeIn().delay(2000).fadeOut();
		$('#ch1').delay(3000).fadeIn();
    });
	
	// Apagado de la TV
	$('.powerOff').click(function() {
        $('.screen').fadeOut();
    });
	
	// Control de brillo
	var count = 0;
	var brightCount = 5;
	$('#brightMore').click(function() {
		$('.brightnessBox').show();
        brightCount++;
        $('.brNo').text(brightCount);
        count += 1;
        if (count === 2) {
            $('.blackout-window').css('opacity','0.4');
        }
        else if (count === 3) {
            $('.blackout-window').css('opacity','0.3');
        }
        else if (count === 4) {
            $('.blackout-window').css('opacity','0.2');
        }
        else if (count === 5) {
            $('.blackout-window').css('opacity','0');
        }
	});
  
    $('#brightLess').click(function() {
        count += 1;
        brightCount--;
        $('.brNo').text(brightCount);
        if (count === 2) {
            $('.blackout-window').css('opacity','0.6');
        }
        else if (count === 3) {
            $('.blackout-window').css('opacity','0.7');
        }
        else if (count === 4) {
            $('.blackout-window').css('opacity','0.8');
        }
        else if (count === 5) {
            $('.blackout-window').css('opacity','0.9');
        }
    });

    // Control de volumen
    $('#volPlus').click(function() {
        $('.volumeBox').show();
        var volCount = 10;
        volCount++;
        $('.volNo').text(volCount);
    });

    // Mover el control remoto
    $('#pickRemote').click(function() {
        $('.remote').addClass('remPosition').animate({top:'500px', left:'400px'}, "slow");
    });

    // Control de canales
    $(".numberBtn li").click( function (){
        var panelId = $(this).attr("data-id");
        $('.main-screen').find(".screen").hide();
        $("#"+ panelId).show();
    });	
});

// Reproducir/pausar video
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('my-video');
    var playButton = document.getElementById('play-button');
  
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
