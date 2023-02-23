var ShortestJobAlgorithm = /** @class */ (function () {
    function ShortestJobAlgorithm() {
    }
    ShortestJobAlgorithm.prototype.getNextTask = function () {
        // implement shortest job first algo
        console.log("...shortest job");
    };
    return ShortestJobAlgorithm;
}());
var FirstComeFirstServeAlgorithm = /** @class */ (function () {
    function FirstComeFirstServeAlgorithm() {
    }
    FirstComeFirstServeAlgorithm.prototype.getNextTask = function () {
        // implement first-come first-serve algo
        console.log("...first-come first-serve job");
    };
    return FirstComeFirstServeAlgorithm;
}());
var TaskRunner = /** @class */ (function () {
    function TaskRunner() {
    }
    TaskRunner.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    TaskRunner.prototype.nextTask = function () {
        this.strategy.getNextTask();
    };
    return TaskRunner;
}());
var scheduler = new TaskRunner();
scheduler.setStrategy(new FirstComeFirstServeAlgorithm());
scheduler.nextTask();
scheduler.setStrategy(new ShortestJobAlgorithm());
scheduler.nextTask();
