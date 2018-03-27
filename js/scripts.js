var codedSentence = "";
var removeVowels = function(string1, string2){
  for (var i = 0; i < string1.length; i++) {
    if (string1[i]=== "a" || string1[i]=== "e" || string1[i]=== "i" || string1[i]=== "o" || string1[i]=== "u") {
      string2 += "-";
    }else {
      string2 += string1[i];
    }
  }
}
$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    removeVowels(sentence,codedSentence);
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
