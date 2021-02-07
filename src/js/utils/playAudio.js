/* eslint no-param-reassign: ["error", { "props": false }] */
export default function playAudio(isAudio, audio) {
  if (isAudio) {
    audio.currentTime = 0;
    audio.play();
  }
}
