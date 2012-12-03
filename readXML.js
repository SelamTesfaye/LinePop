$(document).ready(function(){
  $.get("students.xml",{},function(xml){
    $('student',xml).each(function(i){
      studentName = $(this).find("name").text();
      });
  });
});