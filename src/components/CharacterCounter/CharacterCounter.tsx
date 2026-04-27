import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";


function CharacterCounter({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) {

    const defaultReadingTime: number = 0.00;
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [readingTime, setReadingTime] = useState(defaultReadingTime);

    const handleTextChange = (text: string) => {
        //calculate word count
        let wordCount: number = 0;
        let readingTime: number = defaultReadingTime;
        if (text.length > 0) {
            const wordsArray: string[] = text.trim().split(/[!?\s,.]+/).filter(Boolean);
            console.log(wordsArray);
            wordCount = wordsArray.length;
            readingTime = Number((wordCount / 200).toFixed(2));
        }
        else {
            wordCount = 0;
            readingTime = defaultReadingTime;
        }
        setCharCount(text.length);
        setWordCount(wordCount);
        setReadingTime(readingTime);//need to calculate


    }

    const textStats: TextStats = {
        characterCount: charCount,
        wordCount: wordCount,
        readingTime: readingTime,
    }

    const characterCounterProps: CharacterCounterProps = {
        minWords: minWords,
        maxWords: maxWords,
        targetReadingTime: targetReadingTime
    }



    return (<>

        <TextInput onTextChange={handleTextChange}></TextInput>
        <StatsDisplay stats={textStats} showReadingTime={true} characterCounterProps={characterCounterProps} />
    </>);
}
export default CharacterCounter;
