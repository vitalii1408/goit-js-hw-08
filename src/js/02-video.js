import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
document.addEventListener('DOMContentLoaded', function () {
  const player = new Vimeo(document.getElementById('vimeo-player'));
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player
      .setCurrentTime(parseFloat(savedTime))
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;

          default:
            break;
        }
      });
  }
  player.on(
    'timeupdate',
    throttle(function (data) {
      localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
  );
});
