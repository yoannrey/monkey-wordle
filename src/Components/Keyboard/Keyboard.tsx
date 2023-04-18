import React, {useEffect, useState} from "react";

export default function Keyboard({
                                     onClick: onClickProp
                                 }: { onClick: (letter: string) => void }) {
    // const [lettersIn, setLettersIn] = useState<Array<string>>([]);
    // const [lettersGood, setLettersGood] = useState<Array<string>>([]);
    const keyTouches: string[] = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n"];
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        let keyTouch = event.currentTarget.textContent;
        onClickProp(keyTouch!);
    }
    const classes = "drop-shadow-lg hover:bg-neutral-700 h-1 w-1 min-w-full min-h-full justify-center flex text-slate-300 items-center uppercase text-gray-base py-[2rem] px-[1.5rem] text-[1.5rem] font-bold rounded-lg";
    return (
        <div className="pointer-events-auto caret-transparent flex-col flex text-center text-white items-center">
            <div className="grid content-center grid-cols-10 gap-2 mb-[1rem]">
                {
                    keyTouches.map((touch, i) => {
                        return <button key={i} value={touch} onClick={onClick}
                                       className={classes + ' bg-neutral-500'}>{touch}</button>
                    })
                }
            </div>
        </div>
    )
}
