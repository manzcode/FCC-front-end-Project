import React, {useState} from 'react'
import data from './data/quotes.json'

const Data = data.quotes
const nbr = Math.floor(Math.random()*100)

export default function Quotes () {
    let initialState= {
        quote: Data[nbr].quote, 
        author: Data[nbr].author
    }
    const [state, setstate] = useState(initialState)
    const generateColor = () => {
  
        let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
        // document.body.style.backgroundColor = "#" + randomColor;
        // let text = document.querySelector('#code');
        // text.innerText = "#" + randomColor;
        return randomColor
      
    }


    const handleClick = (e) => {
        const anotherQuote = Math.floor(Math.random()*100);
        setstate({
            quote: Data[anotherQuote].quote, 
            author: Data[anotherQuote].author
        })
        const bg = generateColor();
        const color = generateColor() === bg ? generateColor() : generateColor();
        let btnChange = document.getElementsByClassName('btn-change')
        for(let i = 0; i < btnChange.length; i++){
            btnChange[i].style = `background-color: #${bg}; color: #${color}`;
        }
        document.body.style = `background-color: #${bg}; color: #${color}`
        console.log(bg, color)
    }

    return <div className={`container-fluid`} id="quote-box">
        <div className={`container card my-5 w-50 h-75 py-5`}>
            <h2 className='text-center' id="text">
               {`"${state.quote}"`}           
            </h2>
            <p className='text-end' id="author">
               {state.author}
            </p>
            <div className="row">
                <div className="col-lg-4">
                    <div className="row">
                    <div className="col-lg-3">
                        <button className="btn btn-change btn-primary">
               <a href="twitter.com/intent/tweet" id="tweet-quote">
               <i className="fab fa-twitter"></i>
               </a>
            </button>
                    </div>
                    <div className="col-lg-4 offset-3">
                    <button className="btn btn-change btn-primary">
                    <i className="fab fa-linkedin"></i>
            </button>
                    </div>
                    </div>
                </div>
            <div className="col-lg-4 offset-4">
            <button className="btn btn-change btn-primary" onClick={handleClick} id="new-quote">
                change
            </button>
            </div>
            </div>
        </div>
    </div>
}