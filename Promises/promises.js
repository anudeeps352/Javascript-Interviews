//Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

const randomPromise = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 2); // math.rand gives a number [0,1) . Scale it by 2 gives a range of [0,2). On floor it gives either 0 or 1,with equal prob
  setTimeout(() => {
    if (num === 0) {
      resolve('Hello World');
    } else {
      reject('Error occurred');
    }
  }, 1000);
});

randomPromise
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
