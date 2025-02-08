// Implement a queue (can use an array for simplicity) to hold the promise factories.

// Create a function to manage the execution of tasks. This function should handle the invocation of promise factories and maintain the count of concurrently running tasks.

// Ensure that no more than three tasks are running at any given time. When a task is completed, the next task in the queue (if any) should start.

// Create several promise factories that simulate async tasks with different durations.

// Add these factories to the queue and test if the queue correctly limits the concurrency and processes tasks in the order they were added.

//soln

//declare an array of promises as input

class TaskRunner {
  constructor(maxTask) {
    this.queue = [];
    this.maxTask = maxTask;
    this.activeCount = 0;
  }

  async push(promise) {
    if (this.activeCount < this.maxTask) {
      this.execute(promise);
    } else {
      this.queue.push(promise);
    }
  }
  async execute(promise) {
    this.activeCount++;
    try {
      await promise();
    } catch (error) {
      console.log('error');
    } finally {
      this.activeCount--;
      if (this.queue.length) {
        this.execute(this.queue.shift());
      }
    }
  }
}

PromiseArray = [
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolve Promise 1');
        resolve();
      }, 2000);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolve Promise 2');
        resolve();
      }, 2200);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolve Promise 3');
        resolve();
      }, 2000);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolve Promise 4');
        resolve();
      }, 2000);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolve Promise 5');
        resolve();
      }, 2000);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolve Promise 6');
        resolve();
      }, 2000);
    }),
];

const runner = new TaskRunner(3);
PromiseArray.forEach((promise) => {
  runner.push(promise);
});
// now declare a custom class which adds these promises to queue
