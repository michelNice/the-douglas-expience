document.getElementById('startBtn').addEventListener('click', startSpeechRecognition);
document.getElementById('stopBtn').addEventListener('click', stopSpeechRecognition);
document.getElementById('cleanBtn').addEventListener('click', cleanOutput);

let recognition;
function startSpeechRecognition() {
    recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        document.getElementById('output').innerText = result;
    };

    recognition.start();
}

function stopSpeechRecognition() {
    if (recognition) {
        recognition.stop();
    }
}

function cleanOutput(){
    document.getElementById('output').innerText = '';
}