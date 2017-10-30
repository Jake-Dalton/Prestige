//File: project.js
//Author: Jake Dalton
//Date: 9/23/15
//Site: project_5 (index.html, about.html, contact.html, thank_you.html, thank2.html, product.html, skate.html)


// ***Carousel Control function for index.html***

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
}); 


// ***Form validation with sweetalert plugin alert on contact.html***

jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
			// this part is for later project use
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'sVRLFidC1A7K56TuUkyUQg',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'text': msg,
                    'to': [
                    {
                        'email': 'zedest@cableone.com',
                        'name': 'J Dalton',
                        'type': 'to'
                    }]
                }
            }
        })
			//****Changed alerts to use sweetalert plugin with timer && redirect****
			
        .done(function(response) {
            swal({   title: "Message Recieved",   text: "Thank You!",   imageUrl: "images/stick.png", timer: 2000,   showConfirmButton: false });
			var delay = 2000; //Your delay in milliseconds

			setTimeout(function(){ window.location = 'thank_you.html'; }, delay);// show success message with 2 second delay before redirect
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            sweetAlert("Oops...", "Invalid format!", "error");
        });
        return false; // prevent page refresh
		
    });
});





//****mouseout function elements for images on index.html and video.html (plan on using mouseover later on for links)****

$(function(){
	$("#img").mouseout(function () {
	$(this).attr("src", "images/grn_board.jpg");
	})
	.mouseout(function () {
	$(this).attr("src", "images/grn_board.jpg");
	});
	});

$(function(){
	$("#img2").mouseout(function () {
	$(this).attr("src", "images/wheel.jpg");
	})
	.mouseout(function () {
	$(this).attr("src", "images/wheel.jpg");
	});
	});
	
	
	
// ***drop down element on video.html***

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

/*
$(document).ready(function() {
	$("#email").focus();
	
	$("#email_form").validate({
		rules: {
			email_1: {
				required: true,
				email: true
			},
			email_2: {
				required: true,
				email: true,
				equalTo: "#email_1"
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			state: {
				required: true,
				rangelength: [2, 2]
			},
			zip: {
				required: true,
				digits: true,
				rangelength: [5, 5]
			}
		},
		messages: {
			email_2: {
				equalTo: "This entry must equal previous entry."},
				
			state: {
				rangelength: "Please enter a 2-character state code."},
				
			zip: {
				rangelength: "Please enter a 5-digit zip code."}	
		}
	});
});  // end ready
*/


// ****accordian effect ***

$(document).ready(function() {
			$("#accordion").accordion(
				{ 
					event: "dblclick",
					active: false,
					collapsible: true 
				});
	    });
		
		
		