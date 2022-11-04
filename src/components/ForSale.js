import React, {useEffect, useState} from "react";
import CarForm from "./CarForm";

function forSale () {
    const [cars, setCars] = useState([])

    // useEffect(() => {
    //     fetch("link to database for the GET call")
    // })
    
    return (
        <div className="search_div">
            <h1 className="search-header">Search for your next car!</h1>
            <h2 className="search-second-header">Please use our state of the art database to search through and see who has your car of 
            your dreams and how many owners that car has had!</h2>
            <CarForm />
        </div>
    )
}

export default forSale

//on this page we want to allow people to see the cars in our area and post cars for sale and see who has owned these cars
// get request to get all the data
//display the cars
//allow users to post edit and delete cars from this list
//set up a form to allow users to post a new car using a form
//the form should include price, owners, color, type, and picture
//the form should create a card
