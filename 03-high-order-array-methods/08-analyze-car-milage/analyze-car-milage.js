function analyzeCarMileage(cars) {
    let totalMileage = cars.reduce((acc, car) => (acc + car.mileage), 0);
    let averageMileage = (totalMileage / cars.length).toFixed(2)
    let highestMileageCar = cars.reduce((highest, car) => (highest.mileage > car.mileage ? highest : car), cars[0]);
    let lowestMileageCar = cars.reduce((highest, car) => (highest.mileage < car.mileage ? highest : car), cars[0]);
    return {
        totalMileage,
        averageMileage:parseFloat(averageMileage),
        highestMileageCar,
        lowestMileageCar,
    }
}

module.exports = analyzeCarMileage;
