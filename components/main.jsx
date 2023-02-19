export const MainBody = () => {
    return (
        <main className="h-screen w-screen p-3">
        <div className="grid grid-cols-25/75 w-full h-screen">
            <div>
                {/* reflection prompt 1 */}
                <div className = "p-5 border-4">
                    <b className = "font-sans text-xl leading-3">Step 1: reflect on situation to script for</b>
                    <div className = "space-y-3">
                        <p className = "font-sans text-base leading-4 whitespace-normal">Think back to a time when one of your students was not working or learning effectively this quarter. Describe what the student did and how you noticed it was happening.</p>
                        <p className = "font-sans text-sm whitespace-normal leading-3 italic"> Example: <br/>Student was <u>building prototype to polish</u>, and not actively thinking about how what they were building would help them test. I noticed this during <u>office hours</u> when the student felt like they needed to build features but didn't have plans to test them. </p>
                        <textarea className = "border border-black w-full"></textarea>
                    </div>
                </div>
                {/* reflection prompt 2 */}
                <div className = "p-5 border-4">
                    <b className = "font-sans text-xl leading-3">Step 2: reflect on strategy for the above situation</b>
                    <div className = "space-y-3">
                        <p className = "font-sans text-base leading-4 whitespace-normal">After you noticed the above situation, how did you support your student in practicing a more effective working or learning strategy?</p>
                        <p className = "font-sans text-sm whitespace-normal leading-3 italic"> Example: <br/>I encouraged the student to <u>test the prototype</u> in its imperfect state so we could understand its implications. </p>
                        <textarea className = "border border-black w-full"></textarea>
                    </div>
                </div>
                {/* reflection prompt 3 */}
                <div className = "p-5 border-4">
                    <b className = "font-sans text-xl leading-3">Step 3: describe your situation and strategy in pseudocode</b>
                    <div className = "space-y-3">
                        <p className = "font-sans text-base leading-4 whitespace-normal">Based on your answers for Steps 1 and 2, write pseudocode for both the situation and the support strategy. There's no need to get all the details in the pseudocode here, please refer to the example below.</p>
                        <p className = "font-sans text-sm whitespace-normal leading-3 italic"> 
                        Example: <br/>
                        </p>
                        <ul className="list-disc font-sans text-sm whitespace-normal leading-3 italic">
                            <li>Situation: <u>when</u> student is building prototype but does not have a plan to test it</li>
                            <li>Strategy: <u>send Slack message:</u> "Before you continue building tech, could you test the ARGUMENTS faster in a lower fidelity" <u>at</u> 1 hour before SIG</li>
                        </ul>
                        <textarea className = "border border-black w-full"></textarea>
                    </div>
                </div>
            </div>
            <div className="bg-red-500">Right</div>
        </div>
      </main>)
    }