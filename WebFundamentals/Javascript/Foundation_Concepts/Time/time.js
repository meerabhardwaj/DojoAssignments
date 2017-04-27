// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";
// prints "it's almost 9 in the morning"
//
// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = PM;
// prints "It's just after 7 in the evening"

If (MINUTE<30 && PERIOD==="PM"){
  console.log("It's just after", HOUR, "in the evening.");
}
else if (MINUTE<30 && PERIOD==="AM") {
  console.log("It's just after", HOUR, "in the morning.");
}
else if (MINUTE>=30 && PERIOD==="PM") {
  console.log("It's almost", HOUR, "in the evening.");
}
else if (MINUTE>=30 && PERIOD==="AM") {
  console.log("It's almost", HOUR, "in the morning");
}
