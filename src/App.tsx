import React, {useEffect, useState} from 'react';
import './App.css';
import WordRow, {EmptyRow} from "./Components/Grid/Cell";
import {Utils} from "./Utils";

export default function App() {
    const [pressed, setPressed] = useState<Array<string>>([]);
    const [submitted, setSubmitted] = useState<Array<Array<string>>>([]);
    useEffect(() => {
            function handleKeyDown({key}: { key: string }) {
                const isChar: boolean = /^[A-Za-z]$/.test(key);
                const isBackSpace: boolean = key === Utils.BACKSPACE;
                const isEnter: boolean = key === Utils.ENTER;
                const isWordComplete: boolean = pressed.length === 5;
                switch (true) {
                    case isBackSpace:
                        setPressed((prev) => {
                            const temp = [...prev];
                            temp.pop();
                            return temp;
                        });
                        break;
                    case isEnter && isWordComplete:
                        setSubmitted((prev) => [...prev, pressed]);
                        setPressed([]);
                        break;
                    case isChar && pressed.length < 5:
                        setPressed((prev) => [...prev, key]);
                        break;
                }
                console.log(submitted);
            }

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            }
        }
        ,
        [pressed.length, pressed]
    ) // Used to check when length has changed

    return (
        <div className="h-screen flex flex-col
                    items-center">
            <div className="content-center">
                <WordRow value={pressed} />
                <EmptyRow />
                <EmptyRow />
            </div>
        </div>
    );
}
