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
        <div className="h-screen flex flex-col
                    items-center justify-center">
            <div className="content-center">
                {pressed.map((char, i) => {
                    return (
                        <span key={i} className="uppercase test text-gray-base
                              mr-3 py-8 px-10 h-2 border
                              border-gray-200 rounded mb-2">{char}</span>
                    )
                })}
            </div>
        </div>
    );
}
