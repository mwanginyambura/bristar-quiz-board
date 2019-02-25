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
  if (percent > 79) {
    $("#result").text("you have scored:" + percent + "%" + " KUDOOS");
    $("#result").slideUp();
  } else if (percent > 59 && percent < 79) {
    $("#result").text("you have scored:" + percent + "%" + " FAIR");
    $("#result").slideToggle();
  } else if (percent > 39 && percent < 59) {
    $("#result").text("you have scored:" + percent + "%" + " PULL UP YOUR SOCKS");
    $("#result").slideToggle();
  } else {
    $("#result").text("you have scored:" + percent + "%" + " FAIL");
    $("#result").slideToggle();
  };
});
});
