let homeCount = 0
let guestCount = 0

let homeCountEL = document.getElementById("displayhome")
let guestCountEL = document.getElementById("displayguest")


function homePlusOne() {
    homeCount += 1
    homeCountEL.textContent = homeCount
}


function homePlusTwo() {
    homeCount += 2
    homeCountEL.textContent = homeCount
}

function homePlusThree() {
    homeCount += 3
    homeCountEL.textContent = homeCount
}

function homeReset1() {
    homeCount = 0
    homeCountEL.textContent = count = 0
    
  
} 

function guestPlusOne() {
    guestCount += 1
    guestCountEL.textContent = guestCount
}

function guestPlusTwo() {
    guestCount += 2
    guestCountEL.textContent = guestCount
}

function guestPlusThree() {
    guestCount += 3
    guestCountEL.textContent = guestCount
}

function guestReset1() {
    guestCount = 0
    guestCountEL.textContent = count = 0
   
}