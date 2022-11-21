import React, {useState} from "react";

function CarItem ({ id, price, model, make, year, color, dealership, handleDeleteCar, handleUpdateCar }) {

    const [formPrice, setFormPrice] = useState(price)
    const [formModel, setFormModel] = useState(model)
    const [formColor, setFormColor] = useState(color)
    const [formMake, setFormMake] = useState(make)
    const [formYear, setFormYear] = useState(year)
    const [showForm, setShowForm] = useState(true)
      

    function handlePrice(event) {
        setFormPrice(event.target.value)
    }

    function handleModel(event) {
        setFormModel(event.target.value)
    }

    function handleColor(event) {
        setFormColor(event.target.value)
    }

    function handleMake(event) {
        setFormMake(event.target.value)
    }


    function handleYear(event) {
        setFormYear(event.target.value)
    } 


    function handleDeleteClick() {
        fetch(`http://localhost:9292/cars/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDeleteCar(id))
    }

    function handlePatchSubmit(event) {
        // event.preventDefault()
        setShowForm(true)
        console.log(
            JSON.stringify({
                price: formPrice,
                model: formModel,
                make: formMake,
                year: formYear,
                color: formColor,
                dealership: dealership,
            })
        )
        fetch(`http://localhost:9292/cars/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                price: formPrice,
                model: formModel,
                make: formMake,
                year: formYear,
                color: formColor,
            }),
        })
        .then((updatedCars) => {
            console.log(updatedCars)
            handleUpdateCar(updatedCars)
        })
        .catch((error) => console.log(error))
    }

    return (
        // <form className="patch-form" >
            <div className="car-item-display" >
                <ul>
                    <li key={id+"-make"}>
                        <label for="Make">Make: </label>
                        <input className="input-box" type="text" name="make" readOnly={showForm} value={formMake} onChange={handleMake}/>
                    </li>
                    <li key={id+"-model"}>
                        <label for="Model">Model: </label>
                        <input className="input-box" type="text" name="model" readOnly={showForm} value={formModel} onChange={handleModel}/>
                    </li>
                    <li key={id+"-color"}>
                        <label for="color">Color: </label>
                        <input className="input-box" type="text" name="color" readOnly={showForm} value={formColor} onChange={handleColor}/>
                    </li>
                    <li key={id+"-year"}>
                        <label for="year">Year: </label>
                        <input className="input-box" type="text" name="year" readOnly={showForm} value={formYear} onChange={handleYear}/>
                    </li>
                    <li key={id+"-price"}>
                        <label for="price">Price: </label>
                        <input className="input-box" type="text" name="price" readOnly={showForm} value={formPrice} onChange={handlePrice}/>
                    </li>
                    <li key={id+"-dealership"}>
                        Dealership: {dealership}                      
                    </li>
                </ul>
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={() => {setShowForm(false)}} disabled={!showForm}>Edit</button>
                <button onClick={handlePatchSubmit} disabled={showForm} >Submit Change</button>
                
            </div>
        // </form>
    )
}

export default CarItem

//this page should show all the cars in the database 
//should allow users to edit or delete cars
//patch request
//delete request
//put cars in a card format with buttons
//
