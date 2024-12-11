// Throttling
// Create a button UI and create debounce as follows =>
//      -->     Show 'Button Pressed' <X> times everytime button is pressed
//      -->     Increase Triggered <Y> times count after 800ms of throttle
// what it means --> it limits the exectuion of an event handler when it is being invoked continously

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const btnCount = document.querySelector('.increment_count');

let pressedCount = 0;
let triggeredCount = 0;

const throttledCount = _.throttle(() => {
  btnCount.innerHTML = ++triggeredCount;
}, 800);
btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
