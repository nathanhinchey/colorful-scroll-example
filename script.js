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

  if (currentSection < 1){
    document.getElementById("previous").setAttribute("disabled", "disabled")
  }
  else {
    document.getElementById("previous").removeAttribute("disabled")
  }
  if (currentSection >= sectionCount - 1){
    document.getElementById("next").setAttribute("disabled", "disabled")
  }
  else {
    document.getElementById("next").removeAttribute("disabled")
  }
}
