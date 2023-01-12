const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  //Your code goes here
  msg.lang = "en";
  speakButton.addEventListener("click", () => {
  msg.text = document.querySelector("textarea").value;
});

document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  msg.rate = rate;
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  msg.pitch = pitch;
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#voices").addEventListener("change", () => {
  msg.voice = voices[document.querySelector("#voices").value];
});

speakButton.addEventListener("click", () => {
  msg.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(msg);
});


stopButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});