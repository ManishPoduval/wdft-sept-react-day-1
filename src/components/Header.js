import React from 'react'

function Header(props) {
   // console.log(props)
    //an object
    /*
    props = {
        name: 'Ash',
        age: 23
    }

    */

    return (
        <div>
            Hello {props.name} , my age is {props.age}
        </div>
    )
}

export default Header
