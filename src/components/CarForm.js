import React, {useState} from "react";


function CarForm ({ onCarFormSubmit, dealers }) {
    const [price, setPrice] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [make, setMake] = useState("")
    const [year, setYear] = useState("")
    const [dealership, setDealership] = useState("")
    

    const dealerOptions = dealers.map((element) => {
        const id = element.id
        const name = element.name
        return (
            <option value={id} key={id}>{name}</option>
        )
    })

    function handlePrice(event) {
        setPrice(event.target.value)
    }

    function handleModel(event) {
        setModel(event.target.value)
    }

    function handleColor(event) {
        setColor(event.target.value)
    }

    function handleMake(event) {
        setMake(event.target.value)
    }

    function handleDealerClick(event) {
        console.log(event.target.value)
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
        .then((r) => console.log(r))
        .catch((error) => console.log(error))
        onCarFormSubmit(newCar)
        setColor("")
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
            <label for="dealerships">Choose a Dealership: </label>
            <select name="dealerships" id="dealerships" onChange={handleDealerClick}>
                {dealerOptions}
            </select>
            </div>
            <input type="submit" value="Add for sale"/>            
        </form>
        
    )
}

export default CarForm