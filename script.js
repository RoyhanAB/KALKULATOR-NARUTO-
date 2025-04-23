function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.value === "0") display.value = "";
    display.value += char;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = "0";
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || "0";
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    const history = document.getElementById('history');
  
    try {
      const result = eval(display.value);
      display.value = result;
  
      const item = document.createElement("li");
      item.textContent = result;
      item.style.fontWeight = "bold";
      item.style.color = "#ff9900";
      history.prepend(item);
      if (history.children.length > 5) {
        history.removeChild(history.lastChild);
      }
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function toggleAudio() {
    const audio = document.getElementById("background-audio");
    audio.muted = !audio.muted;
  }
  
  const quotes = [
    "I never go back on my word – Naruto Uzumaki",
    "Hard work is worthless for those who don’t believe.",
    "A smile is the best way to get away with trouble.",
    "Failing doesn’t give you a reason to give up.",
    "The pain of being alone is not an easy one to bear."
  ];
  document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
  