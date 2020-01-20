import icon from './icon.svg';
import { iconString } from './icon';

const iconNode = icon();

document.body.appendChild(iconNode);

document.write(`<br><br>The same node: <b>${iconString.trim() === iconNode.outerHTML}</b>`);