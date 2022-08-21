class Printer {
    /**
     * class in charge of creating and managing the print.
     * @clase Printer
     *  constructor 
     * @param {Number} ppm number of pages per minute 
     */
    constructor(ppm) {
        this.pageRate = ppm
        this.currentTask = null//variable assignment of tasks
        this.timeRemaining = 0//time assignment variable
    }
    /***
     * method to check existing tasks and remaining time of the task 
     * 
     */
    tick() {
        if (this.currentTask !== null) { //check existing tasks 
            this.timeRemaining = this.timeRemaining - 1//remaining time calculation 
            if (this.timeRemaining <= 0) {
                this.currentTask = null//condition, verification of time and existing tasks
            }
        }
    }
    /**
     * task verification method 
     * @returns true   or false
     */
    busy() {
        if (this.currentTask !== null) {//check existing tasks 
            return true
        } else {
            return false
        }
    }
    /**
     * method to start a new task 
     * @param {object} newTask 
     * task extracted from the queue
     */
    startNext(newTask) {
        this.currentTask = newTask
        this.timeRemaining = newTask.getPages() * 60 / this.pageRate//number of pages per task in one minute in relation to pages per minute 
    }


}

module.exports =Printer

