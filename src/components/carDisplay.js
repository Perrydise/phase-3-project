import React, { useEffect, useState} from "react";
import CarItem from "./CarItem";

function CarDisplay() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cars")
        .then((r) => r.json())
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

    function handleUpdateCar(updatedCarId){
        const updatedCarList = cars.filter((car) => {
            return updatedCarId != car.id
        }) 
        setCars(updatedCarList)
    }

    

    const carDataDisplay = cars.map((element, index) => { 
        console.log(cars)
        const id = element.id
        const price = element.price
        const model = element.model
        const make = element.make
        const year = element.year
        const color = element.color
        const dealership = element.dealership_name
        return (            
        <CarItem key={index} id={id} price={price} model={model} make={make} year={year} color={color} dealership={dealership} handleDeleteCar={handleDeleteCar} handleUpdateCar={handleUpdateCar}/>                
        )     
    })

    return (
        <div className="car-display-div">
            {carDataDisplay}
        </div>
    )
}

export default CarDisplay

