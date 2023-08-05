import {useState} from "react";

function ControlledForm(props) {

    // Set state for answer toggling
    const [question, setQuestion] = useState({})


    // Function for handling fetching from API
    const fetchQuestion = async () => {
        // Construct URL for API call
        const url = "http://jservice.io/api/random"

        // Make API call
        const response = await fetch(url)

        // Convert response object into JS object
        const data = await response.json()

        // Testing
        console.log(data)

        // Update the state
        props.setQuestion(data)
    };


    // handleChange function for form
    const handleChange = (event) => {
        // Create copy of the current state
        const newState = {...question}

        // Modify the copy dynamically
        //newState[event.target.name] = event.target.value
        
        // Update the state with the copy
        setQuestion(newState)
    }

    // Function to handle click of button
    const handleButton = (event) => {
        event.preventDefault()

        // Call fetchQuestion
        fetchQuestion()

        // Clear the form
        //setFormData({question: ""})
    };

    return <div>
        <h3>Controlled Form</h3>
        <form onClick = {handleButton}>
            <input type="button" name="question" value="Get Question" onClick={fetchQuestion, handleChange}/>
        </form>
    </div>

}

export default ControlledForm;