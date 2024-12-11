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

const debouncedCount = _.debounce(() => {
  btnCount.innerHTML = ++triggeredCount;
}, 800);
btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
