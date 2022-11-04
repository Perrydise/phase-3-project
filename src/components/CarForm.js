import React, {useState} from "react";

function carForm () {
    const [price, setPrice] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [owners, setOwners] = useState("")
    const [dealership, setDealership] = useState("")

    return (
        <form className="car-form">
            <div className="price-div">
                <label for="price">Price:</label>
                <input className="price-box" type="text" name="Price" value={price}/>
            </div>
            <div className="model-div">
                <label for="model">Model</label>
                <input className="model-input" type="text" name="Model" value={model}/>                
            </div>
            <div className="color-div">
                <label for="color">Color</label>
                <input className="color-input" type="text" name="Color" value={color}/>
            </div>
            <div className="owners-div">
                <label for="owners">owners</label>
                <input className="owner-input" type="text" name="Owners" value={owners}/>
            </div>
            <div className="dealership-div">
                <label for="dealership">Dealership</label>
                <input className="dealership-input" type="text" name="dealership" vale={dealership}/>
            </div>
            <input type="submit" value="Add for sale"/>
        </form>
    )
}

export default carForm