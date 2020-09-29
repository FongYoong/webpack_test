import _ from "lodash";
import './style_page_2.scss'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Page 2', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());