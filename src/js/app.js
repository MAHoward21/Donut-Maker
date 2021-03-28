import {DonutMaker} from "./DonutMaker.js";


const donutMaker = new DonutMaker();
const addNewDonutMultiplier = document.querySelector(".add-donut-multiplier");
const donutPerSecond = document.querySelector(".donuts-per-second");
const donutPerClick = document.querySelector(".donuts-per-click");
const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
const autoClickerCount= document.querySelector(".auto-clicker-count");
const addNewAutoClicker = document.querySelector(".add-auto-clicker");
const resetGameButton = document.querySelector('.reset-button');

const donutClickerButton = document.querySelector(".add-donut");
function updateDonutCount(){
    console.log(document);
    donutMaker.recordClick();
    donutPerClick.innerHTML ="Current Amount";
    donutPerSecond.innerText = donutMaker.donuts;
    if(donutMaker.donuts >= donutMaker.donutMultiplierPrice){
        addNewDonutMultiplier.style.visibility = "visible";
        if(donutMaker.donuts >= donutMaker.autoClickerPrice){
            addNewAutoClicker.style.visibility = "visible";
        }
    }

};

donutClickerButton.addEventListener("click",updateDonutCount);
addNewDonutMultiplier.addEventListener("click", () => {
    donutMaker.addNewDonutMultiplier();
    donutPerSecond.innerText = donutMaker.donuts;
    donutMultiplierCount.innerText = donutMaker.donutMultiplier;
    if(donutMaker.donuts < donutMaker.donutMultiplierPrice){
        addNewDonutMultiplier.style.visibility = "hidden";
    }
    })
donutClickerButton.addEventListener("click", updateDonutCount);
addNewAutoClicker.addEventListener("click", () => {
    donutMaker.addNewAutoClicker();
        donutPerSecond.innerText = donutMaker.donuts;
        autoClickerCount.innerText = donutMaker.autoClicker;
        if(donutMaker.donuts < donutMaker.autoClickerPrice){
            addNewAutoClicker.style.visibility="hidden";
    };
})
    
resetGameButton.addEventListener("click", function(){
    const resetGameConfirm = confirm("Are you sure you want to reset?");
    if (resetGameConfirm)
    {
        location.reload();
    }
})


