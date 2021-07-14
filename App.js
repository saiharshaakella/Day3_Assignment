import React, { useState } from 'react'
import Icon from "./Components/icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"


const tictakArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage ,setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictakArray.fill("")
    }

    const findWinner=() =>{

    }

    return(
        <div> <Icon choice="hahaha" /> </div>
        )
}

export default App