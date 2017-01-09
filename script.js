var currentSection = 0;

var sectionCount = 6;

$("#navbar > button").click(function(event){
  scrollTo(event.currentTarget.value);
});

$("#next").click(function(){
  scrollTo(currentSection + 1);
});

$("#previous").click(function(){
  scrollTo(currentSection - 1);
});

var scrollTo = function(sectionNumber){
  $("#container").animate({
      scrollTop: sectionNumber * $("#container").height(),
  }, 200 + 100 * Math.abs(currentSection - sectionNumber));
  currentSection = sectionNumber;

  // hide irrelevant scroll buttons
  var $previous = $("#previous");
  var $next = $("#next")
  if (currentSection < 1){ $previous.addClass('hidden'); }
  else { $previous.removeClass('hidden'); }
  if (currentSection >= sectionCount - 1){$next.addClass('hidden');}
  else { $next.removeClass('hidden'); }
}
