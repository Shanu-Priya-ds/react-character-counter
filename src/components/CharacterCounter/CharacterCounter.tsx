import type { CharacterCounterProps } from "../../types";


function CharacterCount({minWords,maxWords,targetReadingTime}:CharacterCounterProps){
    return(<>
    <span>Min: {minWords} | Max: {maxWords} | Target Readig Time:{targetReadingTime}</span>
    </>);
}
export default CharacterCount;