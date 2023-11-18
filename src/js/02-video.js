import Player from '@vimeo/player';
import { async } from '@vimeo/player';
import throttle from 'lodash.throttle';
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('vimeo-player');
  const STORAGE_KEY = 'video-player-current-time';
  const saveCurrentTime = () => {
    localStorage.setItem(STORAGE_KEY, video.currentTime);
  };
  const restoreCurrentTime = () => {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime !== null) {
      video.currentTime = parseFloat(savedTime);
    }
  };
  video.addEventListener('timeupdate', saveCurrentTime);
  window.addEventListener('beforeunload', saveCurrentTime);
  restoreCurrentTime();
});
