class TaskRunner {
  constructor(strategy: () => void | undefined) {
    if (strategy) {
      this.nextTask = strategy;
    }
  }

  nextTask() {
    // default strategy
    console.log("...default strategy");
  }
}

function ShortestJobAlgorithm() {
  // implement shortest job first algo
  console.log("...shortest job");
}

function FirstComeFirstServeAlgorithm() {
  // implement first-come first-serve algo
  console.log("...first-come first-serve job");
}

let shortestScheduler: TaskRunner = new TaskRunner(ShortestJobAlgorithm);
shortestScheduler.nextTask();

let firstComeScheduler: TaskRunner = new TaskRunner(
  FirstComeFirstServeAlgorithm
);
firstComeScheduler.nextTask();
