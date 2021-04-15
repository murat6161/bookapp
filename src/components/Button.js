import React from 'react'

export default function Button(props) {

    // function handleClick(e){

    //     let value = e.target.style
    //     alert(value)
    // }

    const buttontext = "Delete"
    return (
        <div>
            <button type="button" onClick={(e) => props.deleteBookProp(props.book)} style ={{ padding: '10px', backgroundColor: 'yellow', border: '4px solid grey', borderRadius:'50%'}}>{buttontext}</button>
        </div>
    )
}
