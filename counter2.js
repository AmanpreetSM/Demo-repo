let counter = 1;
let timeoutID;


function updateCounter(){
    console.log("Counter: ", counter);
    counter++;
    timeoutID = setTimeout(updateCounter,1000);
    if(counter > 10){
        clearTimeout(timeoutID)
    }
}

updateCounter();

