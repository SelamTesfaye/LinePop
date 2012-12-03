$(document).ready(function(){
  $.get("EdgeId.xml",{},function(xml){
    $('EdgeId',xml).each(function(i){
      studentName = $(this).find("FromId").text();
      });
  });
});