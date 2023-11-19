import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.getElementById('vimeo-player');
  const player = new Vimeo(iframe);
  const saveToLocalStorageThrottled = throttle(saveToLocalStorage, 1000);
  player.on('timeupdate', saveToLocalStorageThrottled);
  loadFromLocalStorage();
  function saveToLocalStorage(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }
  function loadFromLocalStorage() {
    const storedTime = localStorage.getItem('videoplayer-current-time');
    if (storedTime) {
      const currentTime = parseFloat(storedTime);
      player.setCurrentTime(currentTime);
    }
  }
});
