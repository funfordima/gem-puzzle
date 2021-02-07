import create from '../utils/create';

export default function createFooter() {
  return create('footer', 'footer', [
    create('div', 'switch__button', [create('img', 'switch__img', null, null,
      ['src', '../src/assets/switch-off.svg'], ['alt', 'switch image icon'])]),
    create('button', 'button__size', '3x3'),
    create('button', 'button__size', '4x4'),
    create('button', 'button__size', '5x5'),
    create('button', 'button__size', '6x6'),
    create('button', 'button__size', '7x7'),
    create('button', 'button__size', '8x8'),
  ]);
}
