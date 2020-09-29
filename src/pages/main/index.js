import _ from "lodash";
import './style_main.scss'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Main', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());