import React, {useState} from 'react';
import './App.css';

function App(){
    const [number1,setNumber1] = useState(0);
    const [number2,setNumber2] = useState(0);
    const [ans,setAns] = useState(0);

    function number1Change(e){
        setNumber1(parseInt(e.target.value));
    }
    function number2Change(e){
        setNumber2(parseInt(e.target.value));
    }
    function addNumbers() {
        setAns(number1+number2);
    }
    function subtractNumbers(){
        setAns(number1-number2);
    }
    function multiplyNumbers(){
        setAns(number1*number2);
    }
        function divideNumbers(){
            setAns(number1/number2);
        }
            function remainderofNumbers(){
                setAns(number1%number2);
            }
    return (
        <div>
            
            <input id="i1" type='number' placeholder='Number 1' onChange={number1Change}/>
            <input id="i2" type='number' placeholder='Number 2' onChange={number2Change}/>
            <button id="b1" onClick ={addNumbers}>Add</button>
            <button id="b2" onClick ={subtractNumbers}>Subtract</button>
            <button id="b3" onClick ={multiplyNumbers}>Multiply</button>
            <button id="b4" onClick ={divideNumbers}>Divide</button>
            <button id="b5" onClick ={remainderofNumbers}>Modulus</button>
            <div id="theDiv"><h1>Answer: {ans}</h1></div>

        </div>
    );
}

export default App;

// Create 3 files as Heading.js Content.js Image.js
// inside them create tags via rfc snippet
// inside Heading return a h1 tag with some data
// inside Content return a p tag with some data
// inside Image return a img tag with some src link
// import all 3 components in App.js
// render them inside App.js return div




