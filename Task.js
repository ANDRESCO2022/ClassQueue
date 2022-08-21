class Task {
    /**
     *class in charge of creating and managing tasks 
     * @clase Task
     *  constructor class Task
     * @param {Number} time //time in relation to time for general printing 
     */
    constructor(time) {
        this.timesAmp = time
        this.pages = Math.floor((Math.random() * (21 - 1 + 1)) + 1)//length of pages a task can have

    }
    /**
     * method for obtaining time in relation to printing tasks
     * @returns time in relation to time for general printing 
     */
    getStamp() {
        return this.timesAmp
    }
    /**
     *  method to obtain the length of pages a task can have
     * @returns number of pages in a task 
     */
    getPages() {
        return this.pages
    }
    /**
     * method to obtain the amount of time per impression 
     * @param {Number} currentTime 
     * @returns result of the operation between the time to enter and exit the task from the queue
     */
    waitTime(currentTime) {
        return currentTime - this.timesAmp

    }
}
module.exports =Task
