import React, { memo, useCallback, useState } from 'react'
import calcul from './operation'


const Button = memo(({children, color, onClick, index}) => {
    const handleClick = useCallback(() => {
        onClick(index)
    }, [onClick, index])
    return <button className={`btn btn-${color} form-control`} onClick={handleClick}>
        {children}
    </button>
})


export default function Calculatrice () {

    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const [nbr, setNbr] = useState('0')
    const [result, setResult] = useState('')

    const handleClick = useCallback((index) => {
        setResult('')
        setNbr(nbr => {
            if(nbr === '-' && input === '-'){
                return nbr + index
            }
            if(nbr === '0' || nbr === '-' || nbr === '+' || nbr === '*' || nbr === '/' || result !== ""){
                nbr = ''
            } 
            if( index === "." && nbr[nbr.length - 1] === "."){
                index = ''
            }
            return nbr + index
        })
        setInput(input =>{
            if(result !== ""){
                input = ''
            } 
            return  input + index
        })
        setData(d => {
            if(nbr === '+' || nbr === '*' || nbr === '/' ){
                d[d.length - 1] = nbr
                return [...d]
            }
            return d
        })
    }, [nbr, result, input])

    const onResult = useCallback(() => {
         let res = calcul([...data, +nbr])
        //  console.log(typeof res)
         setNbr(res)
         setInput(res)
         setResult(res)
         setData([])
    }, [data, nbr])

    const onClear = useCallback(() => {
        setData([])
        setInput('')
        setNbr('0')
        setResult('')
    }, [])

    const signClick = useCallback((sign) => {
        if(nbr === "0" && (sign === "/" || sign === "*")){
            sign = "";
        }
        setResult('')
        setNbr(nbr =>{
            if(sign === ""){
                nbr = "0"
            } else {
                nbr = ''
            }
            return nbr + sign
        })
        setInput(input => {
            if(nbr === '-' || nbr === '+' || nbr === '*' || nbr === '/'){
                let change = data.slice(0, -1).join('')
                return change + sign 
            }
            return input + sign})
        setData(d => {
            if(nbr === '-' || nbr === '+' || nbr === '*' || nbr === '/' || nbr === "0"){
                return [...d]
            }
            return [...d, +nbr, sign]
        })
    }, [nbr,data])

    const chiffre = [];
    for(let i = 1; i < 10; i++){
        let ids = ['one', 'two', 'three', 'four', 'five', 'six', "seven", "eight", 'nine']
        chiffre.push(<td id={ids[i - 1]} key={i}>
            <Button color="warning" index={i} onClick={handleClick}>
            {i}
        </Button>
        </td>)
    }
    return <div className="container">
        
        <div className="row justify-content-center">
        <table className="table table-bordered my-5 w-50 table-responsive">
            <thead>
                <tr>
                    <th  colSpan='4' className='text-end bg-dark text-light' >
                    <p>{input}</p>
                    <p id="display" >{nbr}</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
               <td colSpan='3' id="clear"><Button color='danger'  index='C' onClick={onClear}>
            C
        </Button></td>
        <td id="divide"><Button color='primary' index='/' onClick={signClick}>
            /
        </Button></td>
                </tr>
                <tr>
                {chiffre.filter((value, index) => {
               return (index < 3) && (<td>{value}</td>)
            })}
            <td id="add"><Button color='primary' index='+' onClick={signClick}>
            +
        </Button></td>
                </tr>
                <tr>
                {chiffre.filter((value, index) => {
               return (index >= 3 && index < 6) && value
            })}
            <td id="multiply"><Button color='primary' index='-' onClick={signClick}>
            -
        </Button></td>
                </tr>
                <tr>
            {chiffre.filter((value, index) => {
               return (index >= 6) && value
            })}
            <td id="subtract" ><Button color='primary' index='*' onClick={signClick}>
            *
        </Button></td>
                </tr>
                <tr>
                <td id="zero" colSpan='2'><Button color='warning' index='0' onClick={handleClick}>
            0
        </Button></td>
        <td  id="decimal"><Button color='info' index='.' onClick={handleClick}>
            .
        </Button></td>
        <td id="equals"><Button color='primary' index='=' onClick={onResult}>
            =
        </Button></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
}