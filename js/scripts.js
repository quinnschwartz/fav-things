//FRONT END
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var fav1 = $("#fav1").val();
    var fav2 = $("#fav2").val();
    var fav3 = $("#fav3").val();

var array = [fav1, fav2, fav3];
var newArray = [];
newArray.push(array[1], array[0], array[2]);

    $("#output1").text(newArray[0]);
    $("#output2").text(newArray[1]);
    $("#output3").text(newArray[2]);
    $("#answer").show();
   });
});

//BACK END
