import React, {ReactElement} from "react";

enum IsComplete {
    NOT,
    IN,
    GOOD
}

type CellProps = {
    i?: number;
    value?: string;
    isComplete: IsComplete;
}

type WordRowProps = {
    value?: string[];
    word?: string[];
}

export default function WordRow({value}: WordRowProps) {
    return (
        <div className="grid grid-cols-5 place-items-center gap-5 mb-[1rem]">
            {Array.from({length: 5}).map((_, i) => {
                    return (
                        <Cell key={i} value={value![i] || ''} isComplete={IsComplete.NOT}/>
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
                        <Cell key={i} value={''} isComplete={IsComplete.NOT}/>
                    )
                },
            )}
        </div>)
}

function isLetterIn(letters: string[]): Map<string, number> {
    let counts: any = {};
    let mapLetters = new Map<string, number>();
    for (let elem of letters) {
        counts[elem] = counts[elem] ? counts[elem] + 1 : 1;
        mapLetters.set(elem, counts[elem])
    }
    return mapLetters;
}

export function CompleteRow({value, word}: WordRowProps) {
    // ITERATION COUNTER
    let map1 = new Map();
    map1 = isLetterIn(word!);
    return (
        <div className="grid grid-cols-5 place-items-center gap-5 mb-[1rem]">
            {Array.from({length: 5}).map((_, i) => {
                if (word!.indexOf(value![i]) !== -1) {
                    if (map1.get(value![i]) > 0) {
                        map1.set(value![i], map1.get(value![i]) - 1);
                        if (word![i] === value![i])
                            return <Cell key={i} value={value![i]} isComplete={IsComplete.GOOD}/>
                        return <Cell key={i} value={value![i]} isComplete={IsComplete.IN}/>;
                    }

                }
                // Check if letter exist in word
                // if (word!.indexOf(value![i]) !== -1) {
                //
                //     // If index value is the same as the word index => GREEN
                //     if (word![i] === value![i]) {
                //         return (
                //             <Cell key={i} value={value![i]} isComplete={IsComplete.GOOD}/>
                //         )
                //     }
                //     else {
                //         return (
                //             <Cell key={i} value={value![i]} isComplete={IsComplete.IN}/>
                //         )
                //     }
                // }
                    return (
                        <Cell key={i} value={value![i]} isComplete={IsComplete.NOT}/>
                    )
                },
            )}
        </div>)
}

export function Cell({i, value, isComplete}: CellProps) {
    const classesTw = 'h-1 w-1 min-w-full min-h-full justify-center flex text-slate-300 items-center uppercase text-gray-base py-[3rem] px-[3rem] border text-[3rem] font-bold border-gray-600 rounded-lg';
    let result: ReactElement = <span key={i} className={classesTw + ' bg-grey-600 '}>{value}</span>;
    switch (isComplete) {
        case IsComplete.NOT:
            result = <span key={i} className={classesTw + ' bg-zinc-800'}>{value}</span>;
            break;
        case IsComplete.IN:
            result = <span key={i} className={classesTw + ' bg-orange-600 animate-flip-card'}>{value}</span>;
            break;
        case IsComplete.GOOD:
            result = <span key={i} className={classesTw + ' bg-green-800 animate-flip-card'}>{value}</span>;
            break;
    }
    return result;
}
