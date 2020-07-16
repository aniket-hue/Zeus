import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Homepage from './Views/Homepage/Homepage'
class Root extends Component {
    render() {
        return (
            <Homepage/>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)