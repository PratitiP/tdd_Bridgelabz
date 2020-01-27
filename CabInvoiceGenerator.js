
const BASE_FAIR_NORMAL = 5;
const FARE_PER_KM_NORMAL = 10;
const FARE_PER_MIN_NORMAL = 1;
const BASE_FAIR_PREMIUM = 20;
const FARE_PER_KM_PREMIUM = 15;
const FARE_PER_MIN_PREMIUM = 2;
const CATEGORY_NORMAL = 'normal';
const CATEGORY_PREMIUM = 'premium';

function calculateFare(distance, time, category) {

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


    //for category
    //case 1 - check if category is undefined
    if (typeof (category) == 'undefined')
        category = normal;

    //calculate fare for passed values
    let fare = 0;
    if (category == CATEGORY_NORMAL) {
        fare = BASE_FAIR_NORMAL + distance * FARE_PER_KM_NORMAL + time * FARE_PER_MIN_NORMAL;
    } else if (category == CATEGORY_PREMIUM) {
        fare = BASE_FAIR_PREMIUM + distance * FARE_PER_KM_PREMIUM + time * FARE_PER_MIN_PREMIUM;

    }
    return fare;
}

function calAggregateFare(rides) {

    //case 1 - if number of rides is not zero
    if (rides.length <= 0)
        return 0;

    let totalAggregateFare = 0;
    for (ride of rides) {
        totalAggregateFare = totalAggregateFare + calculateFare(ride.distance, ride.time, ride.cat);
    }
    console.log(totalAggregateFare);
    return totalAggregateFare;
}

function cabInvoiceGenerator(rides) {
    let totalAggregateFare = calAggregateFare(rides);
    let nRides = rides.length;
    let averageFarePerRide = Number((totalAggregateFare / nRides).toFixed(2));
    let invoice = {
        totalFare: totalAggregateFare,
        noOfRides: rides.length,
        averageFare: averageFarePerRide
    }
    return invoice;

}

let rides = [
    { distance: 5, time: 8, cat:'normal'}, 
    { distance: 15, time: 20, cat:'premium' }, 
    { distance: 30, time: 40, cat:'normal' }];
cabInvoiceGenerator(rides);