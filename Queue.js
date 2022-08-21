class Queue {
    /**
   *  class in charge of creating and managing the queue.
   * @clase Queue
   * constructor creates the queue as a data array
   */
    constructor() {
        this.queue = [];
    }
    /**
     * method to insert an item in the queue
     * @param {firt item list} item 
     */
    enqueue(item) {
        this.queue.push(item)

    }
    /**
     * method used to extract the first item from the queue
     * @returns return item extact
     */
    dequeue() {
        return this.queue.shift()

    }
    /**
     * method used to verify if the queue is empty
     * @returns true  or  false 
     */
    isEmpty() {
        return this.queue.length === 0
    }
    /**
     * method used to check the number of items in the queue 
     * @returns  number items in to  queue
     */
    size() {
        return this.queue.length
    }
}
module.exports =Queue