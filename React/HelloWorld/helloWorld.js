'use strict';

const e = React.createElement;

const App = () => {
  return 'Hello, world!';
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);