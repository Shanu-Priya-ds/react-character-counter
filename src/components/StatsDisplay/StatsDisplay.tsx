import type { StatsDisplayProps } from "../../types";

function StatsDisplay({ stats, showReadingTime, characterCounterProps }: StatsDisplayProps) {

    const readingTimeInString = stats.readingTime.toString().replace(".", ":");

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
                    {characterCounterProps.minWords && characterCounterProps.maxWords &&
                        <div>
                            <span className="text-xs text-gray-500">Min:
                                {characterCounterProps.minWords} |
                                Max: {characterCounterProps.maxWords}
                            </span>
                            <div className="w-full h-2 border-solid bg-gray-300">
                                <div className="bg-green-800 h-2" style={{ width: `${Math.min((stats.wordCount / characterCounterProps.maxWords) * 100, 100)}%` }}>
                                </div>
                            </div>
                            {stats.wordCount > characterCounterProps.maxWords && <p className="text-red-500 text-xs">Word limit exceeded!</p>}
                            {stats.wordCount > 0 && stats.wordCount < characterCounterProps.minWords && <p className="text-red-500 text-xs">Text too short! Add more words</p>}

                        </div>
                    }
                </div>

                {showReadingTime && 
                    <div className=" flex flex-col gap-5">
                        <p>Reading Time</p>
                        <p className="self-center">{readingTimeInString}</p>
                            {characterCounterProps.targetReadingTime && 
                                <div>
                                <p className="text-xs">Target Reading Time: 
                                    {characterCounterProps.targetReadingTime}
                                </p> 
                                {stats.readingTime >characterCounterProps.targetReadingTime && 
                                    <p className="text-red-500 text-xs">Too long for target reading time</p>
                                }
                                </div>
                            }
                    </div>
                }
            </div>
        </div>


    </>);
}
export default StatsDisplay;