import React, { useState } from 'react'

const App = () => {
    const[result , setResult] = useState("");

    const clickBtn = (event) =>{
        setResult(result.concat(event.target.value));
    }

    const clearDisplay = () =>{
        setResult("");
    }

    const finalResult = () =>{
        setResult(eval(result).toString());
    }

    return (
        <>
            <div className="calculator">
                <input type="text" placeholder="0" className="display" value={result} />
                <input type="button" value="9" className="button" onClick={clickBtn} />
                <input type="button" value="8" className="button"  onClick={clickBtn}/>
                <input type="button" value="7" className="button"  onClick={clickBtn}/>
                <input type="button" value="6" className="button"  onClick={clickBtn}/>
                <input type="button" value="5" className="button"  onClick={clickBtn}/>
                <input type="button" value="4" className="button"  onClick={clickBtn}/>
                <input type="button" value="3" className="button"  onClick={clickBtn}/>
                <input type="button" value="2" className="button"  onClick={clickBtn}/>
                <input type="button" value="1" className="button"  onClick={clickBtn}/>
                <input type="button" value="0" className="button"  onClick={clickBtn}/>
                <input type="button" value="." className="button"  onClick={clickBtn}/>
                <input type="button" value="+" className="button"  onClick={clickBtn}/>
                <input type="button" value="-" className="button"  onClick={clickBtn}/>
                <input type="button" value="*" className="button"  onClick={clickBtn}/>
                <input type="button" value="/" className="button"  onClick={clickBtn}/>
                <input type="button" value="%" className="button"  onClick={clickBtn}/>
                <input type="button" value="clear" className="button"  onClick={clearDisplay}/>
                <input type="button" value="=" className="button"  onClick={finalResult}/>
            </div>
        </>
    )
}

export default App
