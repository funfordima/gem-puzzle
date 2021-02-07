import create from './create';
import * as constants from '../constants/constants';
import addZero from './addZero';
import createPopUp from '../components/createPopUp';
import playAudio from './playAudio';
import createHeader from '../components/createHeader';
import createFooter from '../components/createFooter';

const { SIZES, handler } = constants;
let isAudio = false;

function btnClickAudioHandler() {
  isAudio = !isAudio;
  const img = document.querySelector('.audio__img');
  if (isAudio) {
    img.setAttribute('src', '../src/assets/volumeOn.svg');
  } else {
    img.setAttribute('src', '../src/assets/volumeOff.svg');
  }
}

const header = createHeader();

document.body.prepend(header);
document.querySelector('.header__audio').addEventListener('click', () => {
  btnClickAudioHandler();
});

const footer = createFooter();
document.body.append(footer);

const main = create('main', 'game', null);
const audio = create('audio', 'audio', null, null, ['src', '../src/assets/1.mp3']);
footer.insertAdjacentElement('beforeend', audio);
footer.insertAdjacentElement('beforebegin', main);

export default class Game {
  constructor({ size = 4 }) {
    this.boardSize = size;
    this.isSolve = false;
    this.isOnGame = false;
    this.isImage = false;
    this.seconds = 0;
    this.minutes = 0;
    this.timerId = null;
  }

  createArr() {
    this.arr = [];
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      this.arr.push(i);
    }
  }

  shuffleArr() {
    this.arr.sort(() => Math.random() - 0.5);
  }

  // Check arr is solvable
  /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
  isSolvable(arr) {
    if (this.boardSize % 2 === 0) {
      const indexBlankPuzzle = this.findPositionBlankPuzzle(arr);
      const countInversion = this.getInvCount(arr);

      if (indexBlankPuzzle % 2 === 0 && countInversion % 2 !== 0) {
        this.isSolve = true;
      } else if (indexBlankPuzzle % 2 !== 0 && countInversion % 2 === 0) {
        this.isSolve = true;
      }
    } else {
      this.getInvCount(arr) % 2 === 0 ? this.isSolve = true : this.isSolve = false;
    }
  }

  // find count inversions
  getInvCount(arr) {
    let invCount = 0;
    for (let i = 0; i < this.boardSize ** 2 - 1; i += 1) {
      for (let j = i + 1; j < this.boardSize ** 2; j += 1) {
        // count pairs(i, j) such that i appears
        // before j, but i > j.
        if (arr[j] && arr[i] && arr[i] > arr[j]) {
          invCount += 1;
        }
      }
    }

    return invCount;
  }

  // find Position of blank from bottom
  findPositionBlankPuzzle(arr) {
    const indexZero = arr.findIndex((num) => num === 0 || num === '');

    return Math.ceil(this.boardSize - indexZero / this.boardSize);
  }

  createPuzzles() {
    let n = 1;
    this.buttons = [];

    this.arr.forEach((buttonNumber) => {
      const cell = create('button', '', buttonNumber.toString(), null, ['draggable', true]);
      cell.style.order = n;
      n += 1;
      if (buttonNumber === 0 || buttonNumber === '') {
        cell.textContent = '';
        cell.classList.add('empty');
      }
      this.buttons.push(cell);
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  moveTo(node1, node2, axis) {
    const counter = header.querySelector('.counter');
    this.moves = counter.innerHTML;

    counter.innerHTML = +this.moves + 1;
    const firstOrder = parseInt(node1.style.order, 10);
    const secondOrder = parseInt(node2.style.order, 10);
    this.board.classList.toggle('transit');
    if (firstOrder < secondOrder) {
      node1.style.transform = `translate${axis}(${node1.offsetWidth}px)`;
      node2.style.transform = `translate${axis}(${-node1.offsetWidth}px)`;
    } else {
      node1.style.transform = `translate${axis}(${-node1.offsetWidth}px)`;
      node2.style.transform = `translate${axis}(${node1.offsetWidth}px)`;
    }

    setTimeout(() => {
      this.board.classList.toggle('transit');
      node1.style.transform = '';
      node2.style.transform = '';

      const temp = node2.style.order;
      node2.style.order = node1.style.order;
      node1.style.order = temp;

      // Check victory
      const scoreArr = Array.from(this.board.children)
        .sort((a, b) => +a.style.order - b.style.order)
        .map((btn) => btn.innerText);
      scoreArr.pop();

      if (scoreArr.every((el, i) => +el === i + 1)) {
        if (this.isOnGame) {
          const target = header.querySelector('.btn__stop');
          this.btnStopHandler(target);
        }
        const message = `
                    <h3>You win!</h3>
                    <span>Time: ${this.minutes} : ${this.seconds}</span>
                    <span>Count moves: ${+this.moves + 1}</span>
                `;
        createPopUp(message, main);
        const topScore = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : [];

        topScore.push({
          moves: +this.moves + 1,
          minutes: this.minutes,
          seconds: this.seconds,
        });

        topScore.sort((a, b) => a.moves - b.moves);

        if (topScore.length + 1 > 10) {
          topScore.pop();
        }

        localStorage.setItem('score', JSON.stringify(topScore));
      }
    }, 500);
  }

  setBoardSize(event) {
    const { target } = event;

    if (target.tagName === 'BUTTON') {
      this.boardSize = SIZES[target.innerText];
      main.innerHTML = '';
      header.removeEventListener('click', handler[0]);
      footer.removeEventListener('click', handler[1]);
      localStorage.removeItem('sessionBoard');
      localStorage.removeItem('sessionTime');
      localStorage.removeItem('sessionMoves');
      localStorage.removeItem('sessionSize');
      localStorage.removeItem('sessionStatus');
      this.minutes = 0;
      this.seconds = 0;
      this.init().generatePuzzles();
    }

    if (target.tagName === 'IMG') {
      this.btnChangeImgHandler();
    }
  }

  clickHandler(event) {
    const { target } = event;

    if (target.classList.contains('empty')) {
      return;
    }

    const emptyCell = document.querySelector('.empty');
    const targetOrder = parseInt(target.style.order, 10);
    const emptyOrder = parseInt(emptyCell.style.order, 10);
    /* eslint max-len: ["error", { "code": 137 }] */
    if (Math.abs(emptyOrder - targetOrder) === this.boardSize) {
      this.moveTo(target, emptyCell, 'Y');
      playAudio(isAudio, audio);
    } else if (
      Math.abs(emptyOrder - targetOrder) === 1
      && Math.floor((emptyOrder - 1) / this.boardSize) === Math.floor((targetOrder - 1) / this.boardSize)
    ) {
      this.moveTo(target, emptyCell, 'X');
      playAudio(isAudio, audio);
    }
  }

  changeTimer() {
    this.timerId = setInterval(() => {
      if (this.isOnGame) {
        const time = header.querySelector('.time');
        this.seconds += 1;
        time.textContent = `${addZero(this.minutes)} : ${addZero(this.seconds)}`;
        if (this.seconds === 60) {
          this.minutes += 1;
          this.seconds = 0;
        }
      }
    }, 1000);
  }

  btnStopHandler(target) {
    this.isOnGame = !this.isOnGame;

    if (this.isOnGame) {
      target.innerHTML = 'Stop Game';
      this.board.classList.remove('off');

      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.changeTimer();
    } else {
      target.innerHTML = 'Resume Game';
      this.board.classList.add('off');
    }
  }

  btnStartHandler() {
    main.innerHTML = '';
    header.removeEventListener('click', handler[0]);
    footer.removeEventListener('click', handler[1]);

    localStorage.removeItem('sessionBoard');
    localStorage.removeItem('sessionTime');
    localStorage.removeItem('sessionMoves');
    localStorage.removeItem('sessionSize');
    localStorage.removeItem('sessionStatus');
    localStorage.removeItem('sessionImage');
    localStorage.removeItem('sessionImgNumber');
    this.imgNumber = null;
    this.minutes = 0;
    this.seconds = 0;
    this.init().generatePuzzles();
    this.isOnGame = true;

    if (this.isImage) {
      document.querySelector('.switch__img').src = '../src/assets/switch-on.svg';
    } else {
      document.querySelector('.switch__img').src = '../src/assets/switch-off.svg';
    }

    if (this.timerId) {
      this.moves = '000';
      clearInterval(this.timerId);
      header.querySelector('.time').textContent = '00:00';
    }

    if (this.isOnGame) {
      this.board.classList.remove('off');
      document.querySelector('.btn__stop').innerHTML = 'Stop Game';
      this.changeTimer();
    } else {
      this.board.classList.add('off');
    }
  }

  btnChangeImgHandler() {
    this.isImage = !this.isImage;

    this.btnStartHandler();
  }

  btnClickHandler(event) {
    const { target } = event;

    // Click Start Button
    if (target.classList.contains('btn__start')) {
      this.btnStartHandler();
    }

    // Click Stop Button
    if (target.classList.contains('btn__stop')) {
      this.btnStopHandler(target);
    }

    // Click Save Button
    if (target.classList.contains('btn__save')) {
      const sessionArr = Array.from(this.board.children)
        .sort((a, b) => +a.style.order - b.style.order)
        .map((btn) => btn.innerText);
      const sessionTime = [this.minutes, this.seconds];
      const sessionMoves = header.querySelector('.counter').textContent;

      localStorage.setItem('sessionBoard', JSON.stringify(sessionArr));
      localStorage.setItem('sessionTime', JSON.stringify(sessionTime));
      localStorage.setItem('sessionMoves', sessionMoves);
      localStorage.setItem('sessionSize', this.boardSize);
      localStorage.setItem('sessionStatus', JSON.stringify(this.isOnGame));
      localStorage.setItem('sessionImage', JSON.stringify(this.isImage));
      if (this.isImage) {
        localStorage.setItem('sessionImgNumber', this.imgNumber);
      }

      this.isOnGame = !this.isOnGame;
      header.querySelector('.btn__stop').textContent = 'Resume Game';
      this.board.classList.add('off');
    }

    // Click Show Results
    if (target.classList.contains('btn__result')) {
      if (this.isOnGame) {
        const element = header.querySelector('.btn__stop');
        this.btnStopHandler(element);
      }

      const topScore = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : false;

      if (!topScore) {
        createPopUp('Your score is empty', main);
      } else {
        // topScore.sort((a, b) => a.moves - b.moves);
        const message = topScore.map((el, i) => `
                  <tr>
                    <td>${i + 1}</td>
                    <td>${el.moves}</td>
                    <td>${addZero(el.minutes)} : ${addZero(el.seconds)}</td>
                  </tr>
                  `).join('');
        createPopUp(`
                <table>
                  <tr>
                    <th>##</th>
                    <th>Moves</th>
                    <th>Time</th>
                  </tr>
                  ${message}
                </table>
        `, main);
      }
    }
  }

  init() {
    if (localStorage.getItem('sessionSize') && localStorage.getItem('sessionBoard')) {
      this.arr = JSON.parse(localStorage.getItem('sessionBoard'));
      header.querySelector('.counter').innerHTML = localStorage.getItem('sessionMoves');
      const sessionTime = JSON.parse(localStorage.getItem('sessionTime'));
      this.seconds = +sessionTime[1];
      this.minutes = +sessionTime[0];
      header.querySelector('.time').textContent = `${addZero(this.minutes)} : ${addZero(this.seconds)}`;
      this.boardSize = +localStorage.getItem('sessionSize');
      this.isOnGame = JSON.parse(localStorage.getItem('sessionStatus'));
      this.isImage = JSON.parse(localStorage.getItem('sessionImage'));
      this.imgNumber = localStorage.getItem('sessionImgNumber');
      this.createPuzzles();
      this.isOnGame = !this.isOnGame;

      if (this.isOnGame) {
        header.querySelector('.btn__stop').textContent = 'Stop Game';
      } else {
        header.querySelector('.btn__stop').textContent = 'Resume Game';
      }

      if (this.isImage) {
        document.querySelector('.switch__img').src = '../src/assets/switch-on.svg';
      } else {
        document.querySelector('.switch__img').src = '../src/assets/switch-off.svg';
      }
    } else {
      header.querySelector('.counter').innerHTML = '000';
      this.createArr();
      this.shuffleArr();
      while (!this.isSolve) {
        this.isSolvable(this.arr);
        if (!this.isSolve) {
          this.shuffleArr();
        }
      }
      this.createPuzzles();
    }

    return this;
  }

  generatePuzzles() {
    this.board = create('div', 'grid off', null, null);
    this.board.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`;
    this.board.style.gridTemplateRows = `repeat(${this.boardSize}, 1fr)`;

    this.buttons.forEach((puzzleItem) => {
      this.board.appendChild(puzzleItem);

      puzzleItem.addEventListener('dragstart', (event) => {
        const empty = document.querySelector('.empty');
        if (event.target === empty) {
          return;
        }
        puzzleItem.classList.add('dragging');
        event.dataTransfer.setData('order', event.target.style.order);
      });

      puzzleItem.addEventListener('dragend', () => {
        puzzleItem.classList.remove('dragging');
      });

      puzzleItem.addEventListener('drop', (event) => {
        event.preventDefault();

        const { target } = event;

        if (!target.classList.contains('empty')) {
          return;
        }

        const orderDragStart = +event.dataTransfer.getData('order', event.target.style.order);
        const targetDragStart = document.querySelector(`[style='order: ${orderDragStart};']`);
        const emptyCell = document.querySelector('.empty');
        const emptyOrder = parseInt(emptyCell.style.order, 10);
        /* eslint max-len: ["error", { "code": 137 }] */
        if (Math.abs(emptyOrder - orderDragStart) === this.boardSize) {
          this.moveTo(targetDragStart, emptyCell, 'Y');
          playAudio(isAudio, audio);
        } else if (
          Math.abs(emptyOrder - orderDragStart) === 1
          && Math.floor((emptyOrder - 1) / this.boardSize) === Math.floor((orderDragStart - 1) / this.boardSize)
        ) {
          this.moveTo(targetDragStart, emptyCell, 'X');
          playAudio(isAudio, audio);
        }
      });
    });

    this.board.ondragover = (e) => e.preventDefault();

    // Handle events
    this.board.addEventListener('click', (event) => this.clickHandler(event, this.boardSize));
    handler[1] = this.setBoardSize.bind(this);
    footer.addEventListener('click', handler[1]);
    handler[0] = this.btnClickHandler.bind(this);
    header.addEventListener('click', handler[0]);

    main.append(this.board);

    if (this.isImage) {
      const can = create('canvas', 'can', null, null, ['width', `${this.board.clientWidth}`], ['height', `${this.board.clientHeight}`]);
      const ctx = can.getContext('2d');
      const im = new Image();
      let n = 1;
      const resArr = [];

      im.onload = () => {
        for (let i = 0; i < this.boardSize; i += 1) {
          const recArr = [];
          for (let j = 0; j < this.boardSize; j += 1) {
            const chunkWidth = this.board.clientWidth / this.boardSize;
            const chunkHeight = this.board.clientHeight / this.boardSize;
            const x = i * chunkWidth;
            const y = j * chunkHeight;
            ctx.drawImage(im, x, y, chunkWidth, chunkHeight, x, y, chunkWidth, chunkHeight);
            const data = ctx.getImageData(x, y, chunkWidth, chunkHeight);
            const ce = document.createElement('canvas');
            ce.width = chunkWidth;
            ce.height = chunkHeight;
            const ctxE = ce.getContext('2d');
            ctxE.putImageData(data, 0, 0);
            recArr.push(ce.toDataURL('image/jpg'));
          }
          resArr.push(recArr);
        }

        function findIndx(arr, k) {
          return arr.findIndex((btn) => +btn.innerText === k);
        }

        for (let i = 0; i < this.boardSize; i += 1) {
          for (let j = 0; j < this.boardSize; j += 1) {
            let index = findIndx(this.buttons, n);

            if (index === -1) {
              index = this.arr.findIndex((num) => num === 0 || num === '');
            }

            this.buttons[index].style.backgroundImage = `url('${resArr[j][i]}')`;
            n += 1;
          }
        }
      };

      im.src = `../src/assets/img/${this.imgNumber || addZero(Math.floor(Math.random() * 10 + 1))}.jpg`;
      this.imgNumber = im.src.slice(-6, -4);
    }

    if (this.timerId) {
      this.moves = 0;
      clearInterval(this.timerId);
      header.querySelector('.time').textContent = '00:00';
    }
  }
}
