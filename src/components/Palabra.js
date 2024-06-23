import React from "react";
import { tipos } from "../consts";
import { useState, useEffect } from "react";
import { useFrase } from "../hooks/useFrase";

function Palabra (props) {
    const {word, id, index, correcta} = props
    const {setAnswerApp} = useFrase()

    console.log(correcta)

    const [currentType, setCurrentType] = useState(tipos[0])
    const [resp, setResp] = useState({
        morf: 'verbo',
        morfType1: '',
        persona: '1',
        genre: '',
        numero: 'singular',
        tiempo: 'presente'
    })

    useEffect(()=>{
        setAnswerApp(resp, index)
    }, [])

    const setIcon = (correcta) => {
        if(correcta === true) {
            return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-2 icontrue">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              )
        } else if(correcta === false) {
            return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-2 iconfalse">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              )
        } else {
            return (
                ''
            )
        }
    }

    const setWordClass = (correcta) => {
        if(correcta === true) {
            return 'greenBorder'
        } else if(correcta === false) {
            return 'redBorder'
        } else {
            return ''
        }
    }


    const handleChangePrincipal = e => {
        /*const newResp = {
            ...resp,
            [e.target.name]: e.target.value
        }
        setResp(newResp)*/
        let newType = {}
        if(e.target.value === 'verbo') newType = tipos[0]
        if(e.target.value === 'sustantivo') newType = tipos[1]
        if(e.target.value === 'adjetivo') newType = tipos[2]
        if(e.target.value === 'preposición') newType = tipos[5]
        if(e.target.value === 'adverbio') newType = tipos[3]
        if(e.target.value === 'determinante') newType = tipos[8]
        if(e.target.value === 'conjunción') newType = tipos[6]
        if(e.target.value === 'pronombre') newType = tipos[4]
        if(e.target.value === 'artículo') newType =tipos[7]

        const newResp = {
            [e.target.name]: e.target.value,
            morfType1: newType.morfType1[0]? newType.morfType1[0] : '',
            persona: newType.persona[0]? newType.persona[0] : '',
            genre: newType.genre[0] ? newType.genre[0] : '',
            numero: newType.numero[0] ? newType.numero[0] : '',
            tiempo: newType.tiempo[0] ? newType.tiempo[0] : ''
        }
        setResp(newResp)
        
        setCurrentType(newType)
        setAnswerApp(newResp, index)
    }    

    const handleChange = e => {
        const newResp = {
            ...resp,
            [e.target.name]: e.target.value
        }
        setResp(newResp)
        setAnswerApp(newResp, index)

    }

    return <div className={`wordBox ${setWordClass(correcta)}`}>
        {setIcon(correcta)}
        <div style={{width: 80}}>{word.word}</div>
        <form style={{display: 'flex'}}>
            <select name="morf" 
                value={resp.morf}
                onChange={handleChangePrincipal}
            >
                {tipos.map((morfo, index) => {
                return (<option value={morfo.morf} key={`${morfo.morf}_${index}`}>
                        {morfo.morf}
                    </option>)
                })}
            </select>
            {currentType.morfType1.length>0 && <select name="morfType1" value={resp.morfType1} onChange={handleChange}             >
                {currentType.morfType1.map((type, index)=> {
                    return (<option value={type} key={`${type}_${index}`}>
                        {type}
                    </option>)
                })}
            </select>}
            {currentType.persona.length > 0 && <select name="persona" value={resp.persona} onChange={handleChange}             >
                {currentType.persona.map((type, index)=> {
                    return (<option value={type} key={`${type}_${index}`}>
                        {type}
                    </option>)
                })}
            </select>}
            {currentType.genre.length > 0 && <select name="genre" value={resp.genre} onChange={handleChange}             >
                {currentType.genre.map((type, index)=> {
                    return (<option value={type} key={`${type}_${index}`}>
                        {type}
                    </option>)
                })}
            </select>}
            {currentType.numero.length > 0  && <select name="numero" value={resp.numero} onChange={handleChange}             >
                {currentType.numero.map((type, index)=> {
                    return (<option value={type} key={`${type}_${index}`}>
                        {type}
                    </option>)
                })}
            </select>}
            {currentType.tiempo.length > 0 && <select name="tiempo" value={resp.tiempo} onChange={handleChange}             >
                {currentType.tiempo.map((type, index)=> {
                    return (<option value={type} key={`${type}_${index}`}>
                        {type}
                    </option>)
                })}
            </select>}
        </form>
    </div>
}

export default Palabra