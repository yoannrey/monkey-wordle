import {CompleteRow} from "../Grid/Cell";
import React from "react";

export default function Keyboard() {
    const keyTouchesTop: string[] = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyTouchesMid: string[] = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];
    const keyTouchesBot: string[] = ["W", "X", "C", "V", "B", "N"];
    return (
        <div className="flex-col flex text-center text-white items-center">
            <div className="grid grid-cols-10 gap-2 mb-[1rem]">
                {keyTouchesTop.map((touch) => <span className="h-1 w-1 min-w-full min-h-full justify-center flex text-slate-300 items-center uppercase text-gray-base py-[2rem] px-[1rem] border text-[1.5rem] font-bold border-gray-600 rounded-lg">{touch}</span>)}
            </div>
            <div className="grid grid-cols-10 gap-2 mb-[1rem]">
                {keyTouchesMid.map((touch) => <span className="h-1 w-1 min-w-full min-h-full justify-center flex text-slate-300 items-center uppercase text-gray-base py-[2rem] px-[1rem] border text-[1.5rem] font-bold border-gray-600 rounded-lg">{touch}</span>)}
            </div>
            <div className="grid grid-cols-6 gap-2 mb-[1rem]">
                {keyTouchesBot.map((touch) => <span className="h-1 w-1 min-w-full min-h-full justify-center flex text-slate-300 items-center uppercase text-gray-base p-4 py-[2rem] px-[1rem] border text-[1.5rem] font-bold border-gray-600 rounded-lg">{touch}</span>)}
            </div>
        </div>
    )
}
