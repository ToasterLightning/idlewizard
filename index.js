function intro()
{
  let time;
  let texts = [
  "Heya kiddo.",
  "What's your name?",
  "...",
  "Well,"
  ];
  for(let text of texts)
  {
    let txt = "";
    for(let char of text)
    {
      txt += char;
      time = setTimeout(displayText("introText",txt),25)
    }
    
  }
  
}
function displayText(id, text)
{
  document.getElementById(id).innerHTML = text;
}
intro();
