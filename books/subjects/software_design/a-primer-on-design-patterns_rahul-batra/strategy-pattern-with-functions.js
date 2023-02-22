var TaskRunner = /** @class */ (function () {
    function TaskRunner(strategy) {
        if (strategy) {
            this.nextTask = strategy;
        }
    }
    TaskRunner.prototype.nextTask = function () {
        // default strategy
        console.log("...default strategy");
    };
    return TaskRunner;
}());
function ShortestJobAlgorithm() {
    // implement shortest job first algo
    console.log("...shortest job");
}
function FirstComeFirstServeAlgorithm() {
    // implement first-come first-serve algo
    console.log("...first-come first-serve job");
}
var shortestScheduler = new TaskRunner(ShortestJobAlgorithm);
shortestScheduler.nextTask();
var firstComeScheduler = new TaskRunner(FirstComeFirstServeAlgorithm);
firstComeScheduler.nextTask();
