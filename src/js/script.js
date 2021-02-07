import Game from './utils/game';
import { SIZES } from './constants/constants';
import '../css/style.scss';

new Game(SIZES).init().generatePuzzles();
