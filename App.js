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
        if(tictaktoeArray[0]==tictaktoeArray[1] && tictaktoeArray[0]==tictaktoeArray[2] && tictaktoeArray[0]!=""){
		setWinMessage(tictaktoeArray[0] + " has Won ")
		return toast(  tictaktoeArray[0] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[0]==tictaktoeArray[3] && tictaktoeArray[0]==tictaktoeArray[6] && tictaktoeArray[0]!=""){
		setWinMessage(tictaktoeArray[0] + " has Won ")
		return toast(  tictaktoeArray[0] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[3]==tictaktoeArray[4] && tictaktoeArray[3]==tictaktoeArray[5] && tictaktoeArray[3]!=""){
		setWinMessage(tictaktoeArray[3] + " has Won ")
		return toast(  tictaktoeArray[3] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[6]==tictaktoeArray[7] && tictaktoeArray[6]==tictaktoeArray[8] && tictaktoeArray[6]!=""){
		setWinMessage(tictaktoeArray[6] + " has Won ")
		return toast(  tictaktoeArray[6] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[1]==tictaktoeArray[4] && tictaktoeArray[1]==tictaktoeArray[7] && tictaktoeArray[1]){
		setWinMessage(tictaktoeArray[1] + " has Won ")
		return toast(  tictaktoeArray[1] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[2]==tictaktoeArray[5] && tictaktoeArray[2]==tictaktoeArray[8] && tictaktoeArray[2]){
		setWinMessage(tictaktoeArray[2] + " has Won ")
		return toast(  tictaktoeArray[2] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[0]==tictaktoeArray[4] && tictaktoeArray[0]==tictaktoeArray[8] && tictaktoeArray[0]){
		setWinMessage(tictaktoeArray[0] + " has Won ")
		return toast(  tictaktoeArray[0] + " has Won ",{type:"success"})
	}
	else if(tictaktoeArray[2]==tictaktoeArray[4] && tictaktoeArray[2]==tictaktoeArray[6] && tictaktoeArray[2]){
		setWinMessage(tictaktoeArray[2] + " has Won ")
		return toast(  tictaktoeArray[2] + " has Won ",{type:"success"})
	}

    }

    return(
        <div> <Icon choice="hahaha" /> </div>
        )
}

export default App
