var d= new Date();
var nd = d.getDate();
var nm = d.getMonth()+1;
var ny = d.getFullYear();

var pos = 6; 
for(var year=2000; year<2031; year++){
                                     
                                 
                                   document.write("<div class ='year'>");{
    }
                      
    document.write ("<h2>"+year+"</h2>");

for(var month=1; month<13; month++){
    
                                    document.write ("<div class ='month'>");
    if(month==1){var max = 31;var name = "January";}
    if(month==2){var max = 28;if(year%4==0){max=29;}var name = "February";}
    if(month==3){var max = 31; var name = "March";}
    if(month==4){var max = 30; var name = "April";}
    if(month==5){var max = 31; var name = "May";}
    if(month==6){var max = 30; var name = "June";}
    if(month==7){var max = 31; var name = "Jule";}
    if(month==8){var max = 31; var name = "August";}
    if(month==9){var max = 30; var name = "September";}
    if(month==10){var max = 31; var name = "October";}
    if(month==11){var max = 30; var name = "Noveber";}
    if(month==12){var max = 31; var name = "December";}
               
                                   document.write ("<div class ='name'>"+name+"</div>");
            document.write("<div class='wd'>Mon</div>");
            document.write("<div class='wd'>Tu</div>");
            document.write("<div class='wd'>We</div>");
            document.write("<div class='wd'>Th</div>");
            document.write("<div class='wd'>Fr</div>");
            document.write("<div class='wda'>Sa</div>");
            document.write("<div class='wda'>Su</div>");

for (var p=1; p<=pos; p++){
    
                                  document.write("<span class='p'></span>");
}
    
    for (var day=1; day<=max; day++){
                              if(ny==year && nm==month && nd==day){
                                    document.write("<span class='now'>"+day+"</span>")
                                }
                              else  if(day==13 && pos==4){
                                    document.write("<span class='f13'>"+day+"</span>")
                                }
                              else if(pos==5 || pos==6)
                                                   {  document.write("<span class='tar'>"+day+"</span>")}
                              else{  document.write("<span class='day'>"+day+"</span>")}
       pos++;
       if(pos==8){pos=1};
    
   }
       document.write ("</div>") 
}
    document.write ("</div>") 
}
document.write("<div class='fon'>")


for(var button=2000;button<=2030;button++){
    
    document.write("<button class='qw'>"+button+"</button>");
}
 $('.year').eq(19).slideDown(5000);

  $('button').eq(0).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(0).slideDown(5000);
    
   }); 

 $('button').eq(1).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(1).slideDown(5000);
    
   });
$('button').eq(2).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(2).slideDown(5000);
    
   });
$('button').eq(3).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(3).slideDown(5000);
    
   });
$('button').eq(4).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(4).slideDown(5000);
    
   });
$('button').eq(5).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(5).slideDown(5000);
    
   });
$('button').eq(6).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(6).slideDown(5000);
    
   });
$('button').eq(7).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(7).slideDown(5000);
    
   });
$('button').eq(8).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(8).slideDown(5000);
    
   });
$('button').eq(9).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(9).slideDown(5000);
    
   });
$('button').eq(10).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(10).slideDown(5000);
    
   });
$('button').eq(11).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(11).slideDown(5000);
    
   });
$('button').eq(12).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(12).slideDown(5000);
    
   });
$('button').eq(13).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(13).slideDown(5000);
    
   });
$('button').eq(14).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(14).slideDown(5000);
    
   });
$('button').eq(15).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(15).slideDown(5000);
    
   });
$('button').eq(16).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(16).slideDown(5000);
    
   });
$('button').eq(17).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(17).slideDown(5000);
    
   });
$('button').eq(18).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(18).slideDown(5000);
    
   });
$('button').eq(19).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(19).slideDown(5000);
    
   });
$('button').eq(20).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(20).slideDown(5000);
    
   });
$('button').eq(21).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(21).slideDown(5000);
    
   });
$('button').eq(22).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(22).slideDown(5000);
    
   });
$('button').eq(23).click(function(){
      $('.year').hide();
      $('.year').eq(23).slideDown(5000);
    
   });
$('button').eq(24).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(24).slideDown(5000);
    
   });
$('button').eq(25).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(25).slideDown(5000);
    
   });
$('button').eq(26).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(26).slideDown(5000);
    
   });
$('button').eq(27).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(27).slideDown(5000);
    
   });
$('button').eq(28).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(28).slideDown(5000);
    
   });
$('button').eq(29).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(29).slideDown(5000);
    
   });
$('button').eq(30).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(30).slideDown(5000);
    
   });
$('button').eq(31).click(function(){
      $('.year').slideUp(5000);
      $('.year').eq(31).slideDown(5000);
    
   });

document.write("</div>");








