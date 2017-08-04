// ==UserScript==
// @name        paypal-scripts
// @namespace   /
// @description paypal-allowed-emails
// @include     https://www.paypal.com/
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==


setInterval(function(){  
    
    // login page
    if($('input[name=login_email]').length)
    { 

        $('input[name=login_email]').remove();

        var paupalEmails = "h.laravel@gmail.com,iraitc@gmail.com";
        //var paupalEmails = "nader.modarres1317tp@gmail.com";
        var data = paupalEmails.split(',');



        var s = $("<select id=\"email\" class='hasHelp  validateEmpty' name=\"login_email\" />");
        for(var val in data) {
            $("<option />", {value: data[val], text: data[val]}).appendTo(s);
        }

        $("#login_emaildiv .fieldWrapper").append(s);
    }

}, 1);
