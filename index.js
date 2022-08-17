function intro()
{
  let texts = [
  "Heya kiddo.",
  "What's your name?",
  "...",
  "Well,"
  ]
  for(let text of texts)
  {
    let txt = ""
    for(let char of text)
    {
      txt += char
      setTimeOut(displayText("introText",txt),25)
    }
    
  }
  
}
function displayText(id, text)
{
  document.getElementById(id).innerHTML = text;
}
intro()
