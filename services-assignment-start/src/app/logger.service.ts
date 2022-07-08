export class LoggerService{
    inactiveCount: number;
    activeCount: number;
    
    constructor(){
        this.activeCount = 0;
        this.inactiveCount = 0;
    }

    onInactiveAdded(){
        this.inactiveCount++;
        console.log("inactive count " + this.inactiveCount);
    }

    onActiveAdded(){
        this.activeCount++;
        console.log(`active count: ${this.activeCount}`);
    }
}