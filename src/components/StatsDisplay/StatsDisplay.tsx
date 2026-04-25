import type { StatsDisplayProps } from "../../types";

function StatsDisplay({stats,showReadingTime,characterCounterProps}:StatsDisplayProps) {

    const readingTimeInString = stats.readingTime.toString().replace(".",":");
   
    return (<>
        <div className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-6" >
            <div className="flex justify-around flex-wrap gap-10">
                <div className=" flex flex-col gap-5">
                    <p>Characters</p>
                    <p className="self-center">{stats.characterCount}</p>
                </div>
                <div className=" flex flex-col gap-5 flex-wrap">
                    <p>Words</p>
                    <p className="self-center">{stats.wordCount}</p>
                    <span className="text-xs text-gray-500">Min:
                         {characterCounterProps.minWords?characterCounterProps.minWords:0} | 
                         Max: {characterCounterProps.maxWords?characterCounterProps.maxWords:0} 
                    </span>
  
                </div>
                {showReadingTime? <div className=" flex flex-col gap-5">
                    <p>Reading Time</p>
                    <p className="self-center">{readingTimeInString}</p>
                </div> : null}
            </div>
        </div>


    </>);
}
export default StatsDisplay;