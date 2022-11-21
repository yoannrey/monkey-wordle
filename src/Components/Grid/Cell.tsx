import React from "react";

type CellProps = {
    i?: number;
    value?: string;
    isComplete: boolean;
}

type WordRowProps = {
    value?: string[];
}

export default function WordRow({value}: WordRowProps) {
    return (
        <div className="grid grid-cols-5 place-items-center gap-5 mb-[1rem]">
            {Array.from({length: 5}).map((_, i) => {
                return (
                    <Cell key={i} value={value![i] || ''} isComplete={false}/>
                )
            },
    )}
        </div>)
}

export function EmptyRow() {
    return (
        <div className="grid grid-cols-5 place-items-center gap-5 mb-[1rem]">
            {Array.from({length: 5}).map((_, i) => {
                    return (
                        <Cell key={i} value={''} isComplete={false}/>
                    )
                },
            )}
        </div>)
}

export function CompleteRow({value}: WordRowProps) {
    // TODO: change color on good placement or letter in the word
    return (
        <div className="grid grid-cols-5 place-items-center gap-5 mb-[1rem]">
            {Array.from({length: 5}).map((_, i) => {
                    return (
                        <Cell key={i} value={value![i]} isComplete={true}/>
                    )
                },
            )}
        </div>)
}

export function Cell({i, value, isComplete}: CellProps) {
    const classesTw = 'h-1 w-1 min-w-full min-h-full flex items-center uppercase text-gray-base py-[3rem] px-[3rem] border font-bold text-[2rem] border-gray-300 rounded-lg';
    return (<span key={i} className={!isComplete ? classesTw : classesTw + ' bg-red-600'}>{value}</span>)
}
