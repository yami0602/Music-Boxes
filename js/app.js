const keysMap = {
    "a": {
        audio: document.querySelector("#cAudio"),
        keyElement: document.querySelector("#cKey"),
    },
    "s": {
        audio: document.querySelector("#dAudio"),
        keyElement: document.querySelector("#dKey"),
    },
    "d": {
        audio: document.querySelector("#eAudio"),
        keyElement: document.querySelector("#eKey"),
    },
    "f": {
        audio: document.querySelector("#fAudio"),
        keyElement: document.querySelector("#fKey"),
    },
    "g": {
        audio: document.querySelector("#gAudio"),
        keyElement: document.querySelector("#gKey"),
    },
    "h": {
        audio: document.querySelector("#aAudio"),
        keyElement: document.querySelector("#aKey"),
    },
    "j": {
        audio: document.querySelector("#bAudio"),
        keyElement: document.querySelector("#bKey"),
    },
    "k": {
        audio: document.querySelector("#cAudioHigh"),
        keyElement: document.querySelector("#cKeyHigh"),
    }
}

document.addEventListener("keypress", function(e) {
    keysMap[e.key].audio.currentTime = 0;
    keysMap[e.key].audio.play();
});

for (let key in keysMap) {
    keysMap[key].keyElement.addEventListener("click", function() {
        keysMap[key].audio.currentTime = 0;
        keysMap[key].audio.play();
    });
}

// for ... in always returns a string (reason why a braket notation is necessary)
// The loop is going to intetate through the object and in this case create 8 click event listeners