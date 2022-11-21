import React, {useEffect, useState} from 'react';
import './App.css';
import WordRow, {CompleteRow, EmptyRow} from "./Components/Grid/Cell";
import {Utils} from "./Utils";


function isGameWin(value: string[], word: string[]): boolean {
    return JSON.stringify(value) === JSON.stringify(word);
}

export default function App() {
    const [pressed, setPressed] = useState<Array<string>>([]);
    const [submitted, setSubmitted] = useState<Array<Array<string>>>([]);
    const TRIES_NB = 6;
    const word = 'chien';
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
                        // Do the things

                        setPressed([]);

                        break;
                    case isChar && pressed.length < 5:
                        setPressed((prev) => [...prev, key]);
                        break;
                }
            }

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            }
        }
        ,
        [pressed.length, pressed, submitted.length]
    ) // Used to check when length has changed
    if (isGameWin(submitted[submitted.length - 1], word.split(''))) {
        return <div className="h-screen bg-zinc-800 flex flex-col
                    items-center text-amber-50"> BRAVO C'EST GAGNÉ</div>
    }
    return (
        <div className="h-screen bg-zinc-800 flex flex-col
                    items-center">
            <div className="content-center mt-5">
                {submitted.length !== 0 && submitted.map((_, i) => <CompleteRow key={i} value={submitted[i]} word={word.split('')}/>)}
                {submitted.length < TRIES_NB ? <WordRow value={pressed} /> : 'GAME ENDED'}
                {Array.from({length: TRIES_NB - submitted.length - 1}).map((_, i) => <EmptyRow key={i}/>)}
            </div>
        </div>
    );
}
