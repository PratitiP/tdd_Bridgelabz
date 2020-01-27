const BASE_FAIR = 5;
const FARE_PER_KM = 10;
const FARE_PER_MIN = 1;

let distance = 10;
let time = 40;
console.log(calculateFare(distance,time));


function calculateFare(distance, time) {
    let fare = BASE_FAIR + distance * FARE_PER_KM + time * FARE_PER_MIN;
    return fare;
}
