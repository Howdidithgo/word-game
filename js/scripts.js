
var sentence;

$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    sentence = $("#sentence").val();
    var codedSentence = "";
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i]=== "a" || sentence[i]=== "e" || sentence[i]=== "i" || sentence[i]=== "o" || sentence[i]=== "u") {
        codedSentence += "-";
      }else {
        codedSentence += sentence[i];
      }
    }
    console.log(codedSentence);
    $(".guess").show();
    $("#form1").hide();
    $("#coded").text(codedSentence);
  });
  $("#form2").submit(function(event) {
    event.preventDefault();
    var guess = $("#guess").val();
    if (guess === sentence) {
      alert("You guessed right!");
      $(".guess").hide();
      $("#form1").show();
    }else {
      alert("Try again.");
    }
  });
});
