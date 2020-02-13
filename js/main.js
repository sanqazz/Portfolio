$(document).ready(function(){
   // $('.header').height($(window).height());
  
    $(".navbar a, .team #grid a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
     
    })
      
   })

let dropline = "";
if (navigator.appVersion.lastIndexOf('Win') != -1) {
dropline = "\r\n"  
} else {
     dropline = "\n" 
}

function mailMeMsg(form) {


 document.mailMeForm.Message.value = (
 '  ' + dropline + dropline
+ '-----START----- ' + dropline
+ dropline + dropline 
+ 'Name     : ' + document.mailMeForm.Name.value + dropline
+ 'Message: ' + document.mailMeForm.message.value
+ dropline  + dropline
+ '-----END------ ' 
+ dropline + dropline 
+ ' FIELD VALUES: ' + dropline
+ '  ' + dropline
);
}


 function email(addr)
      {
            let bodyText = document.mailMeForm.message.value;
            let re = /\n/gi;
            let bodyTextFormatted = bodyText.replace(re, '%0D%0A');

            document.mailMeForm.action = "mailto:" + addr + "?subject=Portfolio&body=" + bodyTextFormatted +"%0D%0AWith best regards, "+ document.mailMeForm.name.value+"!";
            submit();
      
      }
