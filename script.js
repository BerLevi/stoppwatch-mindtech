
//defining variables to store the time increments
let seconds = 0
let minutes = 0
let hours = 0

//variables to store the status of the setInterval function and the status of the Stopwatch, if started = true, if stopped = false
let counter = null;
let stopwatchStatus = false;

//incrementing the value of second, each time the function is calles
function stopwatch(){

    seconds ++
    //increment to the next value (minutes, hours)
    if(seconds / 60 === 1){
        seconds = 0
        minutes++

        if(minutes / 60 === 1){
            minutes = 0
            hours ++
        }
    }

    //display the time values 
    document.getElementById("stopwatch-time").innerHTML = hours + "h:" + minutes + "m:" + seconds + "s";

}


//start the timer whenever the status is false
function start(){
    if(stopwatchStatus === false ){

        //call the stopWatch function every 1000ms to uptade the time
       counter = window.setInterval(stopwatch, 1000);

       document.getElementById("start").innerHTML = "Started";

       //set the status to true, so that we know the time has started
       stopwatchStatus = true;
    }
}

//pause the timer whenever the status is true
function pause(){
    if(stopwatchStatus === true ){
        window.clearInterval(counter)
        stopwatchStatus = false;
    }
    //change the start button to resume when the time is running
    document.getElementById("start").innerHTML = "Resume";
}


//reset the stopwatch timer
function reset(){

    window.clearInterval(counter)
    //set all the variables to zero
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    stopwatchStatus = false;

    //change the resume button back to start
    document.getElementById("start").innerHTML = "Start";
    //reset the html tag to its original state
    document.getElementById("stopwatch-time").innerHTML = "0h:0m:0s"
}
