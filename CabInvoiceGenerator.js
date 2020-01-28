
const BASE_FAIR_NORMAL = 5;
const FARE_PER_KM_NORMAL = 10;
const FARE_PER_MIN_NORMAL = 1;
const BASE_FAIR_PREMIUM = 20;
const FARE_PER_KM_PREMIUM = 15;
const FARE_PER_MIN_PREMIUM = 2;
const CATEGORY_NORMAL = 'normal';
const CATEGORY_PREMIUM = 'premium';

exports.calculateFare=function (distance, time, category) {

    //case 1 - check function for no arguments
    if (distance == "" || time == "")
        return 0;

    //case 2 - check function for partial argumants
    if (typeof (distance) === 'undefined' || typeof (time) === 'undefined')
        return 0;
    //case 3 - check function for non number arguments
    if (typeof (distance) !== 'number' || typeof (time) !== 'number')
        return 0;

    //case 4 - check function for negative arguments
    if (distance < 0 || time < 0)
        return 0;


    //for category
    //case 5 - check if category is undefined
    if (typeof (category) == 'undefined')
        category = 'normal';

    //case 6 - check if category is other than normal or premium
    let cat=category.toLowerCase()
    if(cat === CATEGORY_NORMAL && cat===CATEGORY_PREMIUM)
        return 0;

    //calculate fare for passed values
    let fare = 0;
    if (category == CATEGORY_NORMAL) {
        fare = BASE_FAIR_NORMAL + distance * FARE_PER_KM_NORMAL + time * FARE_PER_MIN_NORMAL;
    } else if (category == CATEGORY_PREMIUM) {
        fare = BASE_FAIR_PREMIUM + distance * FARE_PER_KM_PREMIUM + time * FARE_PER_MIN_PREMIUM;

    }
    return fare;
}

exports.calAggregateFare=function(rides) {

    //case 1 - check function for no arguments
    if(rides==undefined)
        return 0;

    //case 2 - check function for type of rides
    if(typeof(rides)!='object')
        return 0;

    //case 3 - check function for rides size if it is zero
    if (rides.length == 0)
        return 0;

    //case 4 - check function for valid input rides
    let totalAggregateFare = 0;
    for (ride of rides) {
        totalAggregateFare = totalAggregateFare + this.calculateFare(ride.distance, ride.time, ride.cat);
    }
    // console.log(totalAggregateFare);
    return totalAggregateFare;
}

exports.cabInvoiceGenerator = function (rides) {
    let totalAggregateFare = this.calAggregateFare(rides);
    let nRides = rides.length;
    let averageFarePerRide = Number((totalAggregateFare / nRides).toFixed(2));
    let invoice = {
        totalFare: totalAggregateFare,
        noOfRides: rides.length,
        averageFare: averageFarePerRide
    }
    return invoice;

}

exports.getRides = function (userID) {
    //case 1 - check function for no arguments
    if (userID == "")
        return 0;

    //case 2 - check function for undefined arguments
    if (userID == undefined)
        return 0;

    //case 3 - check function for non number arguments
    if (isNaN(userID))
        return 0;

    //case 4 - check function for negative number arguments
    if (isNaN(userID))
        return 0;


    //case 5 - get rides for userID from RidesRepo
    let ridesForUserID = RideRepository.find(obj => {
        if (obj.userID === userID)
            return obj;
    });

    //case 6 - check if user exists in repo
    if (ridesForUserID == undefined)
        return 0;

    // console.log(ridesForUserID.rides);
    return ridesForUserID.rides;
}


let rides1 = [
    { distance: 5, time: 8, cat: 'normal' },
    { distance: 15, time: 20, cat: 'premium' },
    { distance: 30, time: 40, cat: 'normal' }];

let rides2 = [
    { distance: 15, time: 50, cat: 'normal' },
    { distance: 5, time: 10, cat: 'normal' },
    { distance: 30, time: 30, cat: 'premium' }];

let RideRepository = [{ userID: 1, rides: rides1 }, { userID: 2, rides: rides2 }];

// console.log(this.calculateFare(30,50));
// let userRides = this.getRides(1);
// this.cabInvoiceGenerator(userRides);