import React from 'react'

const MyComponent = (props) =>{
    console.log(props,'==props');

    return(
        <>
        {props.information === 'Home Info' &&
        <div>
            <h1>Home</h1>
            <p>{props.information}</p>
        </div>
        }
        {props.information === 'Contact Info' &&
        <div>
            <h1>Contact</h1>
            <p>{props.information}</p>
        </div>
        }
        </>
    )
}

export default MyComponent
