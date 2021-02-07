import create from '../utils/create';

export default function createHeader() {
  return create('header', 'header', [
    create('div', 'header__button', [
      create('button', 'btn__start', 'Shuffle and Start'),
      create('button', 'btn__stop', 'Stop Game'),
      create('button', 'btn__save', 'Save Game'),
      create('button', 'btn__result', 'Show Results'),
    ]),
    create('div', 'header__info', [
      create('div', 'info', [
        create('span', 'description', 'Time: '),
        create('span', 'time', null),
      ]),
      create('div', 'header__audio', [create('img', 'audio__img', null, null, ['src', '../src/assets/volumeOff.svg'], ['alt', 'audio icon'])]),
      create('div', 'moves', [
        create('span', 'description', 'Moves: '),
        create('span', 'counter', '000'),
      ]),
    ]),
  ]);
}
