const BASE_FAIR = 5;
const FARE_PER_KM = 10;
const FARE_PER_MIN = 1;


// console.log(calculateFare(20, 30));


function calculateFare(distance, time) {

    //case 1 - check if no arguments
    if (distance == "" || time == "")
        return 0;

    //case 2 - check if partial argumants
    if (typeof (distance) === 'undefined' || typeof (time) === 'undefined')
        return 0;
    //case 3 - check if non number arguments
    if (typeof (distance) !== 'number' || typeof (time) !== 'number')
        return 0;

    //case 4 - check for negative arguments
    if (distance < 0 || time < 0)
        return 0;

    //case 5 - calculate fare for passed values

    let fare = BASE_FAIR + distance * FARE_PER_KM + time * FARE_PER_MIN;
    return fare;
}

let rides = [{ distance: 5, time: 8 }, { distance: 15, time: 20 }, { distance: 30, time: 40 }];
calAggregateFare(rides);

function calAggregateFare(rides) {

    //case 1 - if number of rides is not zero
    if (rides.length <= 0)
        return 0;

    let totalAggregateFare = 0;
    for (ride of rides) {
        totalAggregateFare = totalAggregateFare + calculateFare(ride.distance, ride.time);
    }
    console.log(totalAggregateFare);

    return totalAggregateFare;
}



