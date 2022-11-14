import React, {useState} from "react";

function carForm ({ onCarFormSubmit }) {
    const [price, setPrice] = useState(" ")
    const [model, setModel] = useState(" ")
    const [color, setColor] = useState(" ")
    const [make, setMake] = useState(" ")
    const [year, setYear] = useState(" ")
    const [dealership, setDealership] = useState(" ")

    function handlePrice(event) {
        setPrice(event.target.value)
    }

    function handleModel(event) {
        setModel(event.target.value)
    }

    function handleColor(event) {
        setColor(event.target.vale)
    }

    function handleMake(event) {
        setMake(event.target.vale)
    }

    function handleDealership(event) {
        setDealership(event.target.value)
    }

    function handleYear(event) {
        setYear(event.target.value)
    } 

    function handleCarSubmit(event) {
        event.preventDefault()
        const newCar = {
            price: price,
            model: model,
            color: color,
            make: make,
            year: year,
            dealership: dealership
        }
        fetch("http://localhost:9292/cars", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
        onCarFormSubmit(newCar)
        setColor("")
        setDealership("")
        setMake("")
        setModel("")
        setPrice("")
        setYear("")
    }

    return (
        <form className="car-form" onSubmit={handleCarSubmit}>
            <div className="price-div">
                <label for="price">Price:</label>
                <input className="price-box" type="text" name="Price" value={price} onChange={handlePrice}/>
            </div>
            <div className="model-div">
                <label for="model">Model</label>
                <input className="model-input" type="text" name="Model" value={model} onChange={handleModel}/>                
            </div>
            <div className="color-div">
                <label for="color">Color</label>
                <input className="color-input" type="text" name="Color" value={color} onChange={handleColor}/>
            </div>
            <div className="owners-div">
                <label for="owners">Make</label>
                <input className="owner-input" type="text" name="Make" value={make} onChange={handleMake}/>
            </div>
            <div className="year-div">
                <label for="year">Year</label>
                <input className="year-input" type="text" name="Year" value={year} onChange={handleYear}/>
            </div>
            <div className="dealership-div">
                <label for="dealership">Dealership</label>
                <input className="dealership-input" type="text" name="dealership" vale={dealership} onChange={handleDealership}/>
            </div>
            <input type="submit" value="Add for sale"/>
        </form>
    )
}

export default carForm