!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', 'PIXEL_ID');fbq('track', 'PageView');
window.onload = function() {

var project_id = $('#project-id').data('id');
var bodyTag = document.getElementsByTagName('body');
var actionTrackerClass = bodyTag[0].classList;
var trackerStandardName = ['Search', 'AddToWishlist', 'ViewContent', 'AddToCart', 'InitiateCheckout','Purchase', 'Lead', 'AddPaymentInfo', 'CompleteRegistration'];

storeHit(project_id, 'facebook', 'PageView', 'page');

// body pixel events
for (var i = 0; i < actionTrackerClass.length; i++) {
  var element = actionTrackerClass[i];

  if (actionTrackerClass[i] == 'px-Search') {
      var trackerName = 'Search';
  } else if (actionTrackerClass[i] == 'px-Add__To__Wishlist' || actionTrackerClass[i] == 'px-AddToWishlist') {
      var trackerName = 'AddToWishlist';
  } else if (actionTrackerClass[i] == 'px-View__Content' || actionTrackerClass[i] == 'px-ViewContent') {
      var trackerName = 'ViewContent';
  } else if (actionTrackerClass[i] == 'px-Add__To__Cart' || actionTrackerClass[i] == 'px-AddToCart') {
      var trackerName = 'AddToCart';
  } else if (actionTrackerClass[i] == 'px-Initiate__Checkout' || actionTrackerClass[i] == 'px-InitiateCheckout') {
      var trackerName = 'InitiateCheckout';
  } else if (actionTrackerClass[i] == 'px-Purchase' || actionTrackerClass[i] == 'px-Purchase') {
      var trackerName = 'Purchase';
  } else if (actionTrackerClass[i] == 'px-Lead' || actionTrackerClass[i] == 'px-Lead') {
      var trackerName = 'Lead';
  } else if (actionTrackerClass[i] == 'px-Add__Payment__Info' || actionTrackerClass[i] == 'px-AddPaymentInfo') {
      var trackerName = 'AddPaymentInfo';
  } else if (actionTrackerClass[i] == 'px-Complete__Registration' || actionTrackerClass[i] == 'px-CompleteRegistration') {
      var trackerName = 'CompleteRegistration';
  } else {
    var trackerName = actionTrackerClass[i].substring(3).split('__').join(' ');
  }

  var parseAction = false;
  var rawActionValue = $('body').attr(actionTrackerClass[i]+'-value');
  var rawActionCurrency = $('body').attr(actionTrackerClass[i]+'-currency');

  if(rawActionValue && rawActionCurrency){
    parseAction = JSON.stringify({ value: rawActionValue, currency: rawActionCurrency });
  }
  // if have a value
  if(parseAction){
    if(trackerStandardName.indexOf(trackerName) > -1) {
      fbq('track', trackerName, {
        value: rawActionValue,
        currency: rawActionCurrency
      });
    } else {
      fbq('trackCustom', trackerName, {
        value: rawActionValue,
        currency: rawActionCurrency
      });
    }
    storeHit(project_id, 'facebook', trackerName, 'page');

  // no value
  } else {
    if(trackerStandardName.indexOf(trackerName) > -1) {
        fbq('track', trackerName);
    } else {
        fbq('trackCustom', trackerName);
    }
    storeHit(project_id, 'facebook', trackerName, 'page');
  }
}


var allElement = ['a', 'img', 'btn', 'button'];



for (var i = 0; i < allElement.length; i++) {
  var element = allElement[i];
  $('body').find(element).on('click', function(e) {
        var classListLink = [];
        var linkClassList = $(this).attr('class').split(/\s+/);
        linkClassList.forEach(function(item) {
            classListLink.push(item);
        });
        var filterClassLink = classListLink.filter(function(item) {
            return /^px-/.test(item);
        });

        for (var i = 0; i < filterClassLink.length; i++) {
            var pxClass = filterClassLink[i];
            var pxClassLowerCase = pxClass.toLowerCase();

            if (pxClass == 'px-Search') {
                var trackerName = 'Search';
            } else if (pxClass == 'px-Add__To__Wishlist' || pxClass =='px-AddToWishlist') {
                var trackerName = 'AddToWishlist';
            } else if (pxClass == 'px-View__Content' || pxClass == 'px-ViewContent') {
                var trackerName = 'ViewContent';
            } else if (pxClass == 'px-Add__To__Cart' || pxClass == 'px-AddToCart') {
                var trackerName = 'AddToCart';
            } else if (pxClass == 'px-Initiate__Checkout' || pxClass == 'px-InitiateCheckout') {
                var trackerName = 'InitiateCheckout';
            } else if (pxClass == 'Purchase' || pxClass == 'Purchase' ) {
                var trackerName = 'px-purchase';
            } else if (pxClass == 'Lead' || pxClass == 'Lead') {
                var trackerName = 'px-lead';
            } else if (pxClass == 'px-Add__Payment__Info' || pxClass == 'px-AddPaymentInfo') {
                var trackerName = 'AddPaymentInfo';
            } else if (pxClass == 'px-Complete__Registration' || pxClass == 'px-CompleteRegistration') {
                var trackerName = 'CompleteRegistration';
            } else {
                var trackerName = pxClass.substr(3).split('__').join(' ');
            }

            var parseAction = false;
            var rawActionValue = $(this).attr(pxClassLowerCase+'-value');
            var rawActionCurrency = $(this).attr(pxClassLowerCase+'-currency');

            if(rawActionValue && rawActionCurrency){
              parseAction = JSON.stringify({ value: rawActionValue, currency: rawActionCurrency });
            }
            if(parseAction){
              if(trackerStandardName.indexOf(trackerName) > -1) {
                fbq('track', trackerName, {
                  value: rawActionValue,
                  currency: rawActionCurrency
                });
              } else {
                fbq('trackCustom', trackerName, {
                  value: rawActionValue,
                  currency: rawActionCurrency
                });
              }
              storeHit(project_id, 'facebook', trackerName, 'button');
            } else {
              if(trackerStandardName.indexOf(trackerName) > -1) {
                  fbq('track', trackerName);
              } else {
                  fbq('trackCustom', trackerName);
              }
              storeHit(project_id, 'facebook', trackerName, 'button');
            }
        }

  });
}


function storeHit (project_id, event_platform, event_type, trigger_type) {
  var host = window.location.host;
  var endpoint_url = "/api/tools/landing/page/analytics";
  var url = "http://localhost/managix" + endpoint_url;
  if (host != 'localhost') {
    url = "https://managix.id" + endpoint_url;
  }
  var form = new FormData();
  form.append('project_id', project_id);
  form.append('event_platform', event_platform);
  form.append('event_type', event_type);
  form.append('trigger_type', trigger_type);
  $.ajax({
        url : url,
        type: "POST",
        cache: false,
        dataType: 'JSON',
        contentType: false,
        processData: false,
        data : form,
        success: function(data){
          // console.log(data);
        },
        error: function(error) {
          // console.log(error);
        }
  });
}


}
