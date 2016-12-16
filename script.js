var currentSection = 0;

$("button").click(function(event){ 
  scrollTo(event.currentTarget.value)
});

var scrollTo = function(sectionNumber){
  $("#container").animate({
      scrollTop: sectionNumber * $("#container").height(),
  }, 200 + 100 * Math.abs(currentSection - sectionNumber));
  currentSection = sectionNumber;
}
