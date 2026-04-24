import { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import CharacterCount from "../CharacterCounter/CharacterCounter";


function StatsDisplay(){
    const[stats, setStats] = useState({ characterCount: 0, wordCount: 0, readingTime: 0});

     const handleTextChange=(text:string)=>{
        let updatedStats = {characterCount: text.length,
            wordCount:6,//calculate word count
            readingTime:0.01 //calculate reading time
         }

         setStats(updatedStats);
        
        
    }
    return(<><TextInput onTextChange={handleTextChange}></TextInput>
    <div className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " >
       <div className="flex justify-around">
        <div className=" flex flex-col gap-5">
            <p>Characters</p>
            <p className="self-center">{stats.characterCount}</p>
        </div>
        <div className=" flex flex-col gap-5">
            <p>Words</p>
            <p className="self-center">{stats.wordCount}</p>
        </div>
        <div className=" flex flex-col gap-5">
            <p>Reading Time</p>
            <p className="self-center">{stats.readingTime}</p>
        </div>
        </div>
        <div className="flex justify-around"> <CharacterCount minWords={25} maxWords={100}></CharacterCount></div>
       </div>
       
      
    </>);
}
export default StatsDisplay;