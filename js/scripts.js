$(document).ready(function() {
  $("form#qz").submit(function(event) {
    event.preventDefault();
    var qz1 = parseInt($("input:radio[name=qz1]:checked").val());
    var qz2 = parseInt($("input:radio[name=qz2]:checked").val());
    var qz3 = parseInt($("input:radio[name=qz3]:checked").val());
    var qz4 = parseInt($("input:radio[name=qz4]:checked").val());
    var qz5 = parseInt($("input:radio[name=qz5]:checked").val());
    var qz6 = parseInt($("input:radio[name=qz6]:checked").val());
    var qz7 = parseInt($("input:radio[name=qz7]:checked").val());
    var total = (qz1 + qz2 + qz3 + qz4 + qz5 + qz6 + qz7);
    var percent = ((total / 40) * 100);
    $("#result").text("you have scored:" + percent + "%");
  });
});
function getResult(sum) {
 if (percent < 40){
   result = 'You have failed!';
   return result
 } else if ( percent > 40 && percent < 80) {
   result = 'you have fairly passed!';
   return result
 } else (){
   result = 'congratualtions you have passed the test!';
   return result
 }
}

/* displayResult = getResult(sum1);

$("#display").text(displayResult);
 });

$('#restart').click(function() {
   location.reload();
 });
}); */
