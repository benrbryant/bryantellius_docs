interface ITaskAlgorithm {
  getNextTask: Function;
}

class ShortestJobAlgorithm implements ITaskAlgorithm {
  public getNextTask() {
    // implement shortest job first algo
    console.log("...shortest job");
  }
}

class FirstComeFirstServeAlgorithm implements ITaskAlgorithm {
  public getNextTask() {
    // implement first-come first-serve algo
    console.log("...first-come first-serve job");
  }
}

class TaskRunner {
  strategy: ITaskAlgorithm;

  public setStrategy(strategy: ITaskAlgorithm): void {
    this.strategy = strategy;
  }

  public nextTask(): void {
    this.strategy.getNextTask();
  }
}

let scheduler: TaskRunner = new TaskRunner();
scheduler.setStrategy(new FirstComeFirstServeAlgorithm());
scheduler.nextTask();
scheduler.setStrategy(new ShortestJobAlgorithm());
scheduler.nextTask();
