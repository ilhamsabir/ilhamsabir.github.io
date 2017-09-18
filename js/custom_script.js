$(document).ready(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
		var text = $(this).text();
    var id = $(this).attr('id');
    $(this).text('loading..');
    $(this).addClass('disabled');
    window.setTimeout(function() {
      // if (href != '#') {
        window.location.href = href;
      // }
			$('#'+id).text(text);
      $('#'+id).removeClass('disabled');
      console.log('obj sini', id);
    }, 3000);
  });
});

$(document).ready(function(){
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     )
    {
        // $('.btn-whatsapp').removeClass('disabled');
    }
    else {
        $('.button-bbm').webuiPopover({width: 300,height:'auto', style:'text-align: center'});
        $('.button-sms').webuiPopover({width: 300,height:'auto', style:'text-align: center'});

    }
});
