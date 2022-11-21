import React, {useEffect, useState} from "react";
import CarForm from "./CarForm";
import DealerForm from "./DealerForm";

function ForSale () {
    const [cars, setCars] = useState([])
    const [dealers, setDealers] = useState([])
    const [isShown, setIsShown] = useState(false)

    const handleClick = event => {
        setIsShown(current => !current)
    }

    useEffect(() => {
        fetch(`http://localhost:9292/dealerships`)
        .then((r) => r.json())
        .then((dealers) => setDealers(dealers))
        .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9292/cars`)
        .then((r) => r.json())
        .then((cars) =>setCars(cars))
        .catch((error) => console.log(error))
    }, [])

    function onCarFormSubmit(newCar) {
        setCars([...cars, newCar])
    }

    function onDealerFormSubmit(newDealer) {
        setDealers([...dealers, newDealer])
    }

    

    
    return (
        <div className="search_div">
            <h1 className="search-header">Sell your car!</h1>
            <h2 className="search-second-header">Please fill out our form to add your car to our database!</h2>
            <CarForm carArray={cars} onCarFormSubmit={onCarFormSubmit}  dealers={dealers} />
            {isShown && 
                <DealerForm onDealerFormSubmit={onDealerFormSubmit} />
            }
            <button onClick={handleClick}>Show Dealer Form</button>
        </div>
    )
}

export default ForSale


