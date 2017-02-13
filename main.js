//type into input
//User can click 'add to list' to add food item into ul
//User can click edit button to edit food item in ul
//User can click remove to remove food item from ul
//User can click 'clear list' to clear whole list
//User can click 'clear completed' to clear items aleady bought
//User can click "you have # todo left" appears when items listed
//User can click it updates automatically
//user can click a line item and it gets striked out
$("#addToList").on("click", function(){
	var text= $("input").val();
	$("ul").append("<li>"+text+"</li>");
 });
 $("#clearList").on("click", function(){
  	var dissapear= $("ul").val;
   $("#itemList ul").html("");
  });
 //User can click 'clear completed' to clear items aleady bought
 $("#clearCompleted").on("click", function(){
  	var dissapear= $("ul").val;
   $(".checkedOff").remove();
  });
  $("li").on("click" function);
