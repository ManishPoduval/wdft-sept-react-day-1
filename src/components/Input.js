import React from 'react'

export default function Input(props) {
    return (
        <div className="control">
            <input className="input" type="text" placeholder={props.text} />
        </div>
    )
}
