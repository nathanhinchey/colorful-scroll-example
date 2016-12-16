var sections = ["#s1", "#s2", "#s3", "#s4", "#s5", "#s6"];
var sectionId = 0;

var log = function(){
  $("#pseudo-console").html(
    [
      sections[sectionId] + " position().top: " + $(sections[sectionId]).position().top,
      sections[sectionId] + " offset().top: " + $(sections[sectionId]).offset().top,
      "#container position.top: " + $("#container").position().top,
      "#container offset.top: " + $("#container").offset().top,
      
    ].join("<br>")
  );
}
log();
$("#container").click(function(event){
  sectionId++;
  window.setInterval(log, 1);
  $("#container").animate({
      scrollTop: $(sections[sectionId]).position().top
  }, 200);
});