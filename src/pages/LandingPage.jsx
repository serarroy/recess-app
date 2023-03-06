import React from 'react'
import '../stylesheets/LandingPage.css'


function LandingPage( {setStart }) {
    return (
        <div className='landing'>
            <h1 className='title'>Recess App</h1>
            <button onClick={() => setStart(true)}>Let's see!</button>
        </div>
    )
}

export default LandingPage
