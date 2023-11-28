import React from 'react';
import './App.css';




import {useState} from "react";

function App() {
    const [light, setLight] = useState(false)


    return (
        <>

        <main className={light ? 'on' : 'off'}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => setLight(!light)}>
                    {light ? 'Turn off' : 'Turn on'}
                </button>
            </section>
        </main>


        </>
    );
}

export default App;
