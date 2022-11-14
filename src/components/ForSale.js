import React, {useEffect, useState} from "react";
import CarForm from "./CarForm";

function ForSale () {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cars")
        .then((r) => r.json())
        .then((cars) =>setCars(cars))
        .catch((error) => console.log(error))
    }, [])

    function handleCarSubmit(newCar) {
        setCars([...cars, newCar])
    }

    
    return (
        <div className="search_div">
            <h1 className="search-header">Sell your car!</h1>
            <h2 className="search-second-header">Please fill out our form to add your car to our database!</h2>
            <CarForm carArray={cars} handleCarSubmit={handleCarSubmit}/>
        </div>
    )
}

export default ForSale

//on this page we want to allow people to see the cars in our area and post cars for sale and see who has owned these cars
// get request to get all the data
//display the cars
//allow users to post edit and delete cars from this list
//set up a form to allow users to post a new car using a form
//the form should include price, owners, color, type, and picture
//the form should create a card
