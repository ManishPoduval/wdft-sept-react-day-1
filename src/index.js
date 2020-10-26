//const React = require('react')
// module.exports ={}

// import React from 'react';
// export 

// import sandra from './helper.js'
// import {greet} from './helper.js'

// // console.log('Start')
// // sandra()
// // greet()

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bulma/css/bulma.css'

let container = document.getElementById('myApp')
ReactDOM.render( <App name="React" /> , container)