import icon from './icon.svg';
import { iconString } from './icon';

document.body.innerHTML += icon;

document.write(`<br><br>The same node: <b>${iconString.trim() === icon}</b>`);