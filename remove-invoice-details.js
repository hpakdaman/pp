// ==UserScript==
// @name        remove-invoice-details
// @namespace   /
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

setInterval(function () { 
  $('.halfColForPrint dl #td_buyerShipTo').closest('dl').remove(); 
}, 100);
