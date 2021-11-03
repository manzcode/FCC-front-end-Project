import React, { memo, useCallback, useState } from 'react'
import calcul from './operation'
import ReactFCCtest from 'react-fcctest'


const Button = memo(({children, color, onClick, index}) => {
    const handleClick = useCallback(() => {
        onClick(index)
    }, [onClick, index])
    return <button className={`btn btn-${color} form-control`} onClick={handleClick}>
        {children}
    </button>
})


export default function Calculatrice () {
    const initialState = {
        input: '', 
        nbr: '0', 
        result: false
    }
   
    const [state, setstate] = useState(initialState);
    const [data, setData] = useState([])

    const handleClick = useCallback((index) => {
        if(index === '.' && state.nbr[state.nbr.length - 1] === '.'){
            return
        } else if(index === '.' && state.nbr === '0'){
            setstate(state => ({
                input: state.input,
                nbr: '0' + index,
                result: state.result
            }))
        }else if(state.result) {
            setData([])
            setstate(state => ({
                input: state.input,
                nbr: '' + index,
                result: state.result
            }))
        }else if(state.nbr === '0'){
            setstate(state => ({
                input: state.input,
                nbr: '' + index,
                result: state.result
            }))
        } else {
            setstate(state => ({
                input: state.input,
                nbr: state.nbr + index,
                result: state.result
            }))
        }
        
    }, [state.nbr, state.result])

    const onResult = useCallback(() => {
         const res = calcul([...data, +state.nbr])
        //  console.log(divres, multipleres, plusres, negativesign)
         setstate(state => ({
            input: state.input +  state.nbr, 
            nbr: res,
            result: !state.result
        }))
        setData([])
    }, [data, state.nbr])

    const onClear = useCallback(() => {
        setData([])
        setstate({
            input: '', 
            nbr: '0', 
            result: false
        })
    }, [])
    const signClick = useCallback((sign) => {
        if(state.result){
            setData(d => [...d, +state.nbr, sign])
            setstate(state => ({
                input: '' + state.nbr + sign,
                nbr: '0',
                result: !state.result
            }))
        }else if(state.nbr === '0' && sign !== '-'){
             return
         } else if(state.nbr === '0' && sign === '-'){
            setData(d => [...d])
            setstate(state => ({
                input: state.input,
                nbr: '' + sign,
                result: false
            }))
        } else {
            setData(d => [...d, +state.nbr, sign])
            setstate(state => ({
                input: state.input +  state.nbr + sign,
                nbr: '0',
                result: false
            }))
        }
        
    }, [state.nbr, state.result])

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
                    <th  colSpan='4' className='text-end bg-dark text-light' id="display">
                    <p>{state.input}</p>
                    <p>{state.nbr}</p>
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
       
        <ReactFCCtest/>
    </div>
}