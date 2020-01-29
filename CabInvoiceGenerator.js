const BASE_FAIR_NORMAL = 5,
    FARE_PER_KM_NORMAL = 10,
    FARE_PER_MIN_NORMAL = 1,
    BASE_FAIR_PREMIUM = 20,
    FARE_PER_KM_PREMIUM = 15,
    FARE_PER_MIN_PREMIUM = 2,
    CATEGORY_NORMAL = 'normal',
    CATEGORY_PREMIUM = 'premium';

exports.calculateFare = function (distance, time, category) {

    //cases - check function for no arguments, partial argumants, non number arguments, negative arguments
    if (distance === "" || time === "" ||
        distance === null || time === null ||
        typeof (distance) === 'undefined' || typeof (time) === 'undefined' ||
        typeof (distance) !== 'number' || typeof (time) !== 'number' ||
        distance < 0 || time < 0)

        return 0;

    //for category
    //case 5 - check if category is undefined
    if (typeof (category) == 'undefined')
        category = 'normal';

    //case 6 - check if category is other than normal or premium
    let cat = category.toLowerCase()
    if (cat === CATEGORY_NORMAL && cat === CATEGORY_PREMIUM)
        return 0;

    //calculate fare for passed values
    let fare = 0;
    if (category === CATEGORY_NORMAL) {
        fare = BASE_FAIR_NORMAL + distance * FARE_PER_KM_NORMAL + time * FARE_PER_MIN_NORMAL;
    } else if (category === CATEGORY_PREMIUM) {
        fare = BASE_FAIR_PREMIUM + distance * FARE_PER_KM_PREMIUM + time * FARE_PER_MIN_PREMIUM;
    }
    return fare;
}

exports.calAggregateFare = function (rides) {

    //case 1 - check function for no arguments, type of rides, rides size if it is zero
    if (rides === undefined ||
        typeof (rides) !== 'object' ||
        rides.length === 0)
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
    //cases - check function for empty string arguments, undefined arguments, NaN, negative argument
    if (userID === "" ||
        userID === undefined ||
        isNaN(userID) ||
        userID < 0)

        return 0;



    //get rides for userID from RidesRepo
    let ridesForUserID = RideRepository.find(obj => {
        if (obj.userID === userID)
            return obj;
    });

    //case 5 - check if user exists in repo
    if (ridesForUserID == undefined)
        return 0;

    // console.log(ridesForUserID.rides[0]);
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
let userRides = this.getRides(1);
this.cabInvoiceGenerator(userRides);