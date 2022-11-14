import React, { useEffect, useState} from "react";

function CarDisplay() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cars")
        .then((r) => r.json())
        // .then((cars) => console.log(cars))
        .then((cars) => setCars(cars))
        .catch((error) => console.log(error))
    }, [])

    function handleDeleteCar(deletedCarId) {
        const updatedCarList = cars.filter((car) => {
            console.log(deletedCarId, car, car.id)
            return deletedCarId != car.id
        })
        setCars(updatedCarList)
    }

    const carDataDisplay = cars.map((element) => { 
        console.log(cars)
        const id = element.id
        const price = element.price
        const model = element.model
        const make = element.make
        const year = element.year
        const color = element.color
        const dealership = element.dealership_name
        return (
            <div className="car-display">
                <ul>
                    <li key={id}>Make: {make}</li>
                    <li key={id}>Model: {model}</li>
                    <li key={id}>Color: {color}</li>
                    <li key={id}>Year: {year}</li>
                    <li key={id}>Price: {price}</li>
                    <li key={id}>Dealership: {dealership}</li>
                </ul>
                <button onClick={handleDeleteCar}>Delete</button>
            </div>
        )

    })

    return (
        <div className="car-display-div">
            {carDataDisplay}
        </div>
    )
}

export default CarDisplay

//display all the cars for sale and allow people to click delete on the car to shown its bought