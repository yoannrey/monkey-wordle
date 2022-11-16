import React, {useEffect, useState} from 'react';
import './App.css';

export default function App() {
    const BACKSPACE = 'Backspace'
    const [pressed, setPressed] = useState<Array<string>>([]);
    useEffect(() => {
            function handleKeyDown({key}: { key: string }) {
                const isChar: boolean = /^[A-Za-z]$/.test(key);
                const isBackSpace: boolean = key === BACKSPACE;
                if (isBackSpace) {
                    setPressed((prev) => {
                        const temp = [...prev];
                        temp.pop();
                        return temp;
                    })
                } else if (isChar && pressed.length < 5)
                    setPressed((prev) => [...prev, key]);
            }

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            }
        }
        ,
        [pressed.length]
    ) // Used to check when length has changed

    console.log(pressed)

    return (
        <div>
            <h1 className='text-3xl font-bold uppercase'>
                Hello World!
            </h1>
            <div>
                {pressed.map((char, i) => {
                    return <span key={i} className="uppercase">{char}</span>
                })}
            </div>
        </div>
    );
}
