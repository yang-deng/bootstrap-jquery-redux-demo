import _ from 'lodash';
import print from './print';

function component() {
    var element = document.createElement('div');

    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = print.bind(null, 'hello webpack');

    return element;
}

document.body.appendChild(component());