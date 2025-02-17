import throttle from 'lodash.throttle';
import Vimeo from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);


player.on("timeupdate", throttle(storageTime, 1000));

function storageTime(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));