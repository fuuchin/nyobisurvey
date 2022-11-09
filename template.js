'use strict';
for (let i = 0; i <= 7; i++) {
  document.getElementsByClassName('example')[i].onclick = () => {
    document.getElementById('input').value = 'Q. ' + document.getElementsByClassName('example')[i].getAttribute('name');
  }
};
