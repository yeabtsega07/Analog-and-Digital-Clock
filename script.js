'use strict'
setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour]');
const minuteHand = document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');


function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() /60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60;
    const hoursRatio = (minutesRatio  + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

function displayDateTime(){
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      //Display am or pm

      var meridiemoffset = "AM";
      // Handle midnight use case
      if (hours == 0) {
        hours = hours - 12;

      }

      // handle pm

      if (hours > 12){
        hours = hours -12;
        meridiemoffset = "PM";
      }

      // calculate the time

      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      // Display the time
      var time = hours + ":" + minutes + ":" + seconds + ":" + meridiemoffset;
      document.getElementById('digital').innerText = time;

      // diplay the date
      let options = { weekday : 'long', year : 'numeric', month: 'long', day: 'numeric'};
      document.getElementById('date').innerHTML = date.toLocaleDateString('en-GB', options);

      //keep running the program every 1000ms for accuracy
      setTimeout( displayDateTime,1000);
      

};

// Run the function
 displayDateTime();

 // optional ro have an onload event to diplay the time.
 //window.onload = (event) => {
    // displayDateTime();

//  };