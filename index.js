// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    let hq = 42
    if (streetNumber > hq){
        return streetNumber - hq
    } else return hq - streetNumber
}

function distanceFromHqInFeet(streetNumber){
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    return (start - destination) * 264 < 400 = "gives customers a free sample";
    
  }