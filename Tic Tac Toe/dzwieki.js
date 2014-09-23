function playAudio(src) {
    src += android_path_holder;
    var media = new Media(src, success, error_error);
    media.play();
}

function success() {
    // ignore
}

function error_error(e) {
    alert('Cos poszło nie tak z....');
    alert(e.message);
}
function muteSounds() {
    if (device.platform) {
        dzwiekX.setVolume(0.0);
        dzwiekY.setVolume(0.0);
    } else {
        dzwiekX.muted = true;
        dzwiekY.muted = true;
    }

    sounds = false;
    soundsButton.innerHTML = "Włącz dźwięk.";
}
function unMuteSounds() {
    if (device.platform) {
        dzwiekX.setVolume(1.0);
        dzwiekY.setVolume(1.0);
    } else {
        dzwiekX.muted = false;
        dzwiekY.muted = false;
    }

    sounds = true;
    soundsButton.innerHTML = "Wyłącz dźwięk.";
}
function toggleSounds() {
    if (sounds) {
        muteSounds();
    } else {
        unMuteSounds();
    }
}
console.log("Dzwieki zaladowane !!")