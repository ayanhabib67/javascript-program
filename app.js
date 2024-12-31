var language = prompt("Enter your language ");

if (language === "javascript") {
  var city = prompt("Enter your city");
  if (city === "karachi") {
    var exp = prompt("Enter Your Expriences");
    if (exp === "2 years") {
      console.log("pass ho gai");
    } else {
      console.log("baray ho kar aaho ");
    }
  } else {
    console.log("karachi chal");
  }
} else {
  console.log("phar ka aa ho ");
}