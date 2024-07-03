let speech = new SpeechSynthesisUtterance();
let btn = document.getElementById("btn1");
let textarea = document.getElementById("textarea");
let voices = [];
let selector = document.querySelector("#selectlang");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        selector.options[i] = new Option(voice.name, i);
    });
};

btn.addEventListener("click", () => {
    let content = textarea.value;
    speech.text = content;
    speechSynthesis.speak(speech);
});
