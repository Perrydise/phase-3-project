import React, {useState} from "react";

function DealerForm({ onDealerFormSubmit }) {
    const [dealer, setDealer] = useState("")

    function handleName(event) {
        setDealer(event.target.value)
    }

    function handleDealerSubmit(event) {
        event.preventDefault()
        let newDealer = {
            name: dealer
        }
        fetch("http://localhost:9292/dealerships", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newDealer)
        })
        onDealerFormSubmit(newDealer)
        setDealer("")
    }

    return(
        <form className="dealer-form" onSubmit={handleDealerSubmit}>
            <div className="dealer-div">
                <label for="dealer">Dealer name: </label>
                <input className="dealer-box" type="text" name="Dealer" value={dealer} onChange={handleName}/>
            </div>
            <input type="submit" value="Add Dealership"/>
        </form>        
    )
}

export default DealerForm