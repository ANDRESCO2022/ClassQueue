
const Printer = require("./Printer.js")
const Queue = require("./Queue.js")
const Task = require("./Task.js")
/**
 * function to determine the printout of a job on a shared printer
 * @param {Number} numSeconds number of seconds in an hour 
 * @param {Number} pagesPerMinute number of pages to be printed
 * @returns number of tasks inand time spent 
 */
const simulator = (numSeconds, pagesPerMinute) => {
    let labPrinter = new Printer(pagesPerMinute)
    let printQueue = new Queue()
    let waitTimes = []

    for (let currenSecond = 0; currenSecond <= numSeconds; currenSecond++) {//
        if (newPrintTask()) {
            let task = new Task(currenSecond)

            printQueue.enqueue(task)
        }
        if ((!labPrinter.busy()) && (!printQueue.isEmpty())) {
            let newTask = printQueue.dequeue()

            waitTimes.push(newTask.waitTime(currenSecond))
            labPrinter.startNext(newTask)

        }
        labPrinter.tick()
    }

    let averageWait = waitTimes.reduce((acc, b) => acc + b, 0) / (waitTimes.length)


    return `Average Wait: ${averageWait.toFixed(2)} secs, ${printQueue.size()} tasks remaining`

}

/**
 * funtion for creation of a new print job
 * @returns true  or  false
 * enables or disables the print job
 */
const newPrintTask = () => {
    let num = Math.floor((Math.random() * (180 - 1 + 1)) + 1)

    if (num === 180) {
        return true
    } else {
        return false
    }

}

for (let i = 0; i <= 10; i++) {

    console.log(simulator(3600, 5))
}

