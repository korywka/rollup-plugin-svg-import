import compass from './compass.svg';
import star from './star.svg';

const stringify = false;

if (stringify) {
  document.body.innerHTML += compass;
  document.body.innerHTML += compass;
  document.body.innerHTML += star;
  document.body.innerHTML += star;
} else {
  document.body.appendChild(compass());
  document.body.appendChild(compass({
    fill: '#2196f3'
  }));
  document.body.appendChild(star({
    fill: '#e91e63'
  }));
  document.body.appendChild(star({
    fill: '#9c27b0'
  }));
}