$(document).ready(function() {
  $("form#qz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=qz1]:checked").val());
    var q2 = parseInt($("input:radio[name=qz2]:checked").val());
    var q3 = parseInt($("input:radio[name=qz3]:checked").val());
    var q4 = parseInt($("input:radio[name=qz4]:checked").val());
    var q5 = parseInt($("input:radio[name=qz5]:checked").val());
    var q6 = parseInt($("input:radio[name=qz6]:checked").val());
    var q7 = parseInt($("input:radio[name=qz7]:checked").val());
    var total = (q1 + q2 + q3 + q4 + q5 + q6 + q7);
    var percent = ((total / 40) * 100);
    $("#result").text("you have scored:" + percent + "%");
  });
});
