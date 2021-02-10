
//create the Stopwatch class to store the information and methods for the stopwatch object
class Stopwatch{

    //initialize the object with the constructor
    //pass in the time parameters
    constructor (seconds, minutes, hours){

        //set the time properties on the new object instance that is created 
        this.seconds = seconds
        this.minutes = minutes
        this.hours = hours
       
    }

    //timer method to count the time and increment to minutes every 60sec and every 60min to hours 
    timer(){
        this.seconds ++

        if(this.seconds / 60 === 1){
            this.seconds = 0
            this.minutes++
    
            if(this.minutes / 60 === 1){
                this.minutes = 0
                this.hours ++
            }
        }
        //display the incremented time values 
        document.getElementById("stopwatch-time").innerHTML = this.hours + "h:" + this.minutes + "m:" + this.seconds + "s";
    }

    //start method to start the timer
    start(){

        //increment the time values every 1000ms if the status of the stopwatch is false; if it is not active
        if(stopwatchStatus === false ){

            //call the stopWatch function every second to uptade the time
           counter = setInterval(()=>{this.timer()}, 1000)

           //set the status to true, so that we know the time has started
           stopwatchStatus = true;
        }

        document.getElementById("start").innerHTML = "Started";

    }

    //pause method to pause the timer
    pause(){
        if(stopwatchStatus === true ){
            //stop the setInterval function
            window.clearInterval(counter)

            //change the start button to resume when the time is running
            document.getElementById("start").innerHTML = "Resume";
            stopwatchStatus = false
        }
    }

    //reset method to reset the stopwatch
    reset(){

        //clear the interval function to stop the counting
        window.clearInterval(counter)
        //set all the variables to zero
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;

        //set the status to false, so the stopwatch can be started after it is reset
        stopwatchStatus = false
        document.getElementById('stopwatch-time').innerHTML = "0h:0m:0s"
        document.getElementById("start").innerHTML = "Start";

    }

    //method to split the time and store the current time value in a variable
    split(){
        console.log(currentTime.innerHTML)
        const addSplitTime = document.getElementById('split-time-container-id')
        addSplitTime.appendChild(currentTime)
    }

}

//variables to store the time values
let seconds = 0
let minutes = 0
let hours = 0

//save the currently displayed time in a variable
let currentTime = document.getElementById('stopwatch-time')
let splitTimeText = document.getElementById('split-time')

//variables to store the status of the setInterval function and the status of the Stopwatch, if started = true, if stopped = false
let counter = null;
let stopwatchStatus = false;

//variables to store connect the html buttons
const startTimerButton = document.getElementById('start')
const pauseTimerButton = document.getElementById('pause')
const splitTimeButton = document.getElementById('split')
const resetTimerButton = document.getElementById('reset')


//create the stopwatch Object with the new keyword, hook up all the variables and make them operate on the stopwatch object
const stopwatch = new Stopwatch(seconds, minutes, hours)

//call the start method every time the start button is clicked
startTimerButton.addEventListener('click', button =>{
    stopwatch.start()

})

//call the pause method every time the pause button is clicked
pauseTimerButton.addEventListener('click', button =>{
    stopwatch.pause()
})

//split the current time when the split button is clicked
splitTimeButton.addEventListener('click', button =>{
    stopwatch.split()
} )

//call the reset method to reset the timer every time the reset button is clicked
resetTimerButton.addEventListener('click', button =>{
    stopwatch.reset()
})

