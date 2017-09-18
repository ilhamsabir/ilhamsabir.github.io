$(document).ready(function() {
	var pageId = '421';
	var buttonText = $('button').text();
	$('head').append('<style>.error { color: red }</style>');

 	$('#product-qty').on('change', function() {
 		var qtyValue = this.value;
 		var productPrice = $('#calc-product-price').text();
 		$('#total-product-price').text(productPrice*qtyValue);
 	});

  $('.form-horizontal').validate({
  	rules: {
        name: "required",
        phone_number: {
	      	required: true,
	      	number: true
	    },
      email: {
      	required: false,
      	email: true
	    },
	    desc: "required",
	    address: "required"
    },
    submitHandler: function(form, e) {
    	e.preventDefault();
			var userId							= $('#project-id').attr('data-user');
			var projectId						= $('#project-id').attr('data-id');
			var projectName					= $('#project-id').attr('data-name');
    	var product_name 				= $('#label-product').text();
    	var product_qty					= $('#product-qty').val();
    	var product_price				= $('#calc-product-price').text();
    	var product_total_price = $('#total-product-price').text();
    	var name 							  = $('#name').val();
    	var phone_number 				= $('#phone_number').val();
    	var email 							= $('#email').val();
    	var desc 								= $('#desc').val();
    	var address 						= $('#address').val();
    	var dataHref 						= $('#project-id').data('redirect');

			var fiedsData = {
				product_name: product_name,
				product_qty: product_qty,
				product_price: product_price,
				product_total_price: product_total_price,
		      	name: name,
		      	phone_number: phone_number,
		      	email: email,
		      	desc: desc,
		      	address: address
			};

			$('button').text('loading...');
			$('button').attr('disabled','disabled');
			var fiedsDataJson = JSON.stringify(fiedsData);
      var url = 'http://localhost/managix/api/tools/landing/page/orderform';
      $.ajax({
          url: url,
          type:"post",
          dataType: 'json',
          data: { user_id: userId, project_id: projectId, project_name: projectName, fields: fiedsDataJson },
      }).success(function(data) {
					setTimeout(function(){
						$('button').text(buttonText);
						$('button').removeClass('disabled');
					}, 5000);
          window.location.href = dataHref;
      });
    }
  });
});
