import dynamic from 'next/dynamic';
const BlocklyEditor = dynamic(() => import('./BlocklyEditor'), { ssr: false });

export const MainBody = () => {
  const scaffoldingSteps = [
    {
      step: 'Step 1: reflect on situation to script for',
      prompt: (
        <>
          Think back to a time when one of your students was not working or
          learning effectively this quarter. Describe what the student did and
          how you noticed it was happening.
        </>
      ),
      example: (
        <>
          <p>
            {' '}
            Example: <br />
            Student was <u>building prototype to polish</u>, and not actively
            thinking about how what they were building would help them test. I
            noticed this during <u>office hours</u> when the student felt like
            they needed to build features but didn&apos;t have plans to test
            them.{' '}
          </p>
        </>
      ),
    },
    {
      step: 'Step 2: reflect on strategy for the above situation',
      prompt: (
        <>
          After you noticed the above situation, how did you support your
          student in practicing a more effective working or learning strategy?
        </>
      ),
      example: (
        <>
          <p>
            {' '}
            Example: <br />I encouraged the student to <u>
              test the prototype
            </u>{' '}
            in its imperfect state so we could understand its implications.{' '}
          </p>
        </>
      ),
    },
    {
      step: 'Step 3: describe your situation and strategy in pseudocode',
      prompt: (
        <>
          Based on your answers for Steps 1 and 2, write pseudocode for both the
          situation and the support strategy. There&apos;s no need to get all
          the details in the pseudocode here, please refer to the example below.
        </>
      ),
      example: (
        <>
          <p>
            Example: <br />
          </p>
          <ul className="list-disc font-sans text-sm whitespace-normal leading-3 italic">
            <li>
              Situation: <u>when</u> student is building prototype but does not
              have a plan to test it
            </li>
            <li>
              Strategy: <u>send Slack message:</u> &quot;Before you continue
              building tech, could you test the ARGUMENTS faster in a lower
              fidelity&quot; <u>at</u> 1 hour before SIG
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <main className="h-screen w-screen relative">
      {/* Scaffolding prompts */}
      <div className="grid grid-cols-25/75">
        <div>
          {scaffoldingSteps.map(({ step, prompt, example }, index) => (
            <div key={'scaffolding-step-' + index} className="p-5">
              <b className="font-sans text-xl leading-3">{step}</b>
              <div className="space-y-3">
                <p className="font-sans text-base leading-4 whitespace-normal">
                  {prompt}
                </p>
                <div className="font-sans text-sm whitespace-normal leading-3 italic">
                  {example}
                </div>
                <textarea className="border border-black w-full"></textarea>
              </div>
            </div>
          ))}
        </div>

        {/* Blockly Interface */}
        <div id="blocklyContainer">
          <BlocklyEditor />
        </div>
      </div>
    </main>
  );
};
