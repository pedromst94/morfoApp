import React, { useState, useEffect } from "react";
import Palabra from "./Palabra";
import { useCheckAnswer } from "../hooks/useFrase";
import { useAppSelector } from "../hooks/store";


function Ejercicio (props) {
    const {frase} = props
    const {checkAnswer} = useCheckAnswer()
    const tryAnswer = useAppSelector(state => state.answers)
    const [arrayCorreccion, setArrayCorreccion] = useState([new Array(frase.words.length)])
    const [firstTime, setFirstTime] = useState(true)

    useEffect(()=>{
        if(firstTime) {
            setFirstTime(false)
            return
        }
        const newArrayCorrecion = new Array(frase.words.length)
        setArrayCorreccion(newArrayCorrecion)
    }, [frase])

    const handleClick = () => {
        const newArrayCorrecion = checkAnswer(frase.words, tryAnswer)
        setArrayCorreccion(newArrayCorrecion)
        console.log(arrayCorreccion)
    }

    return <>
        <p style={{border: '1px solid white', borderRadius: '5px', padding: '3px 0'}}>
            {frase.sentence}
        </p>
        {frase.words.map((word, index) => {
            return <Palabra word={word} key={`word${index}`} id={frase.id} index={index}
                 correcta={arrayCorreccion[index]}/>
        })}
        <button onClick={handleClick}>Comprobar</button>
    </>
}

export default Ejercicio