let counter = 1;

function updateCounter(){
    console.log("Counter: ", counter);
    counter++;
    if(counter > 10){
        clearInterval(intervalID)
    }
}
let intervalID = setInterval(updateCounter,1000);
