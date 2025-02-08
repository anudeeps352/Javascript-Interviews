// Debouncing
// Create a button UI and create debounce as follows =>
//      -->     Show 'Button Pressed' <X> times everytime button is pressed
//      -->     Increase Triggered <Y> times count after 800ms of debounce
// what it means --> after we stop clicking button and 800ms has passed count of Triggered <Y> increases

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const btnCount = document.querySelector('.increment_count');

let pressedCount = 0;
let triggeredCount = 0;

const mydebounce = (callback, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
const debouncedCount = mydebounce(() => {
  btnCount.innerHTML = ++triggeredCount;
  console.log(arg1);
}, 800);
btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
