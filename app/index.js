import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { today, goals } from "user-activity";
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let background = document.getElementById("background");


// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const date = document.getElementById("date");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  let thedate = util.zeroPad(today.getDate());
  let theday = days[today.getDay()];
  date.text = `${theday} ${thedate}`;
}

// plays the animation, runs when the background is clicked... EXTREME CAUTION!!!! CODE PRODUCED BY SOMEONE WHO HAS ZERO CLUE WHAT THEYRE DOING

background.addEventListener("click", (evt) => {
  background.href = "lagtrainframes/frame1processed.jpg";
  
    setTimeout(function(){ 
        background.href = "lagtrainframes/frame2processed.jpg";
    
}, 70);
      setTimeout(function(){ 
        background.href = "lagtrainframes/frame3processed.jpg";
    
}, 140);
      setTimeout(function(){ 
        background.href = "lagtrainframes/frame4processed.jpg";
    
}, 210);
});