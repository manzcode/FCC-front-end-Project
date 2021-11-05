import React, { useEffect, useState } from 'react'
import audio1  from './data/boiteArythme/Bld_H1.mp3'
import audio2 from './data/boiteArythme/Brk_Snr.mp3'
import audio3 from './data/boiteArythme/Chord_1.mp3'
import audio4 from './data/boiteArythme/Chord_2.mp3'
import audio5 from './data/boiteArythme/Chord_3.mp3'
import audio6 from './data/boiteArythme/Dry_Ohh.mp3'
import audio7 from './data/boiteArythme/Dsc_Oh.mp3'
import audio8 from './data/boiteArythme/Give_us_a_light.mp3'
import audio9 from './data/boiteArythme/Heater-1.mp3'
import audio10 from './data/boiteArythme/Heater-2.mp3'
import audio11 from './data/boiteArythme/Heater-3.mp3'
import audio12 from './data/boiteArythme/Heater-4_1.mp3'
import audio13 from './data/boiteArythme/Heater-6.mp3'
import audio14 from './data/boiteArythme/Kick_n_Hat.mp3'
import audio15 from './data/boiteArythme/punchy_kick_1.mp3'
import audio16 from './data/boiteArythme/RP4_KICK_1.mp3'
import audio17 from './data/boiteArythme/side_stick_1.mp3'
import audio18 from './data/boiteArythme/Cev_H2.mp3'

const Button = ({children, onClick, onKeyDown, id}) => {
    const handleClick = () => {
        onClick(id)
    }
    return <button className="col-lg-3 m-2" onClick={handleClick} onKeyPress={onKeyDown} >
        {children}
    </button>
}

export default function Drumbox () {

    const [titre, setTitle] = useState('')
    const [turn, setTurn] = useState(false)
    const [bank, setBank] = useState(false)

    const audioPlaylist = [
        audio1 ,
        audio2, 
        audio3,
        audio4,
        audio5, 
        audio6, 
        audio7, 
        audio8 ,
        audio9 ,
        audio10,
        audio11,
        audio12,
        audio13,
        audio14,
        audio15,
        audio16,
        audio17,
        audio18]

    const audioBalise =[]


    for (let index = 0; index < 19; index++) {
        audioBalise.push(<audio id={`audio${index}`} src={audioPlaylist[index]} key={index}></audio>)
    }
    const onPlay = (id) => {
        if(!turn){
            return 
        }
        if(bank){
            let newId = +id + 9;
            document.getElementById(`audio${newId}`).play()
            setTitle(`audio${newId}`)
        } else {
            document.getElementById(`audio${id}`).play()
            setTitle(`audio${id}`)
        }
    }

    const handleKey = (e) => {
        switch (e.charCode) {
            case 97:
                onPlay('4')
                break;
            case 122:
                onPlay('7')
                break;
            case 101:
                onPlay('3')
                break;
            case 100:
                onPlay('6')
                break;
            case 115:
                onPlay('5')
                break;
            case 113:
                onPlay('1')
                break;
            case 119:
                onPlay('2')
                break;
            case 120:
                onPlay('8')
                break;
            case 99:
                onPlay('9')
                break;      
            default:
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', handleKey )
        return () => {
            document.removeEventListener('keypress', handleKey )
        }
    })
    

    const handleClick = () => {
        setTurn(t => !t)
    }

    return <div className="container">
        {audioBalise.map(v => v)}
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <Button onClick={onPlay} id='1'>
                        Q
                    </Button>
                    <Button onClick={onPlay} id='2'>
                        W
                    </Button>
                    <Button onClick={onPlay} id='3'>
                        E
                    </Button>
                    <Button onClick={onPlay} id='4'>
                        A
                    </Button>
                    <Button onClick={onPlay} id='5'>
                        S
                    </Button>
                    <Button onClick={onPlay} id='6'>
                        D
                    </Button>
                    <Button onClick={onPlay} id='7'>
                        Z
                    </Button>
                    <Button onClick={onPlay} id='8'>
                        X
                    </Button>
                    <Button onClick={onPlay} id='9'>
                        C
                    </Button>
                </div>
            </div>
            <div className="col-lg-4 text-center">
                <p>
                    Power
                </p>
                <button onClick={handleClick}>
                        {turn ? 'on' : 'off'}
                </button>
                <p className='bg-info my-2'>
                    {turn ? `you play ${titre}` : 'turn on'}
                </p>
                <button onClick={() => setBank(b => !b)}>
                    {bank ? 'bank on' : 'bank off'}
                </button>
            </div>
        </div>

    </div>
}