function myAnswer() {
  let secret = "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K";
  let decoded = Buffer.from(secret, "base64");
  let decodedString = decoded.toString("utf8");
  return reverse(decodedString);
}

function reverse(words) {
  let result = "";
  for (let word of words) {
    result = word + result;
  }
  return result;
}

console.log(myAnswer());
