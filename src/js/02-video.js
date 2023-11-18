import Player from '@vimeo/player';
import { async } from '@vimeo/player';
import throttle from 'lodash.throttle';

const plauyer = Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';
const saveCurrentTime = throttle(async () => {
  try {
    const saveCurrentTime = await plauyer.getCurrentTime();
  } catch (error) {
    console.error('Error saving urent time:', error);
  }
}, 1000);

const restoreCurrentTime = async () => {
  if (savedTime) {
    try {
      const getCurrentTime = JSON.parse(savedTime);
      await plauyer.setCurrentTime(currentTime);
    } catch (error) {
      console.error('Error restoring current time::', error);
    }
  }
};
plauyer.on('timeupdate', saveCurrentTime);
document.addEventListener('DOMContentLoaded', () => {
  restoreCurrentTime();
});
