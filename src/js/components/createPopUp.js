import create from '../utils/create';

export default function createPopUp(message, main) {
  const popUp = create('div', 'popUp', [
    create('div', 'modal', [create('p', 'message', `${message}`)]),
  ]);
  main.insertAdjacentElement('beforeEnd', popUp);

  popUp.addEventListener('click', () => {
    main.removeChild(popUp);
  });
}
