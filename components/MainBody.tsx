import dynamic from 'next/dynamic';
import styles from './MainBody.module.css';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { BottomRow } from 'blockly/core/renderers/zelos/zelos';

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
        <div>
          <div className={styles.carouselContainer}>
            <Carousel
              w="100%"
              // withIndicators
              bg={'#f5f5f5'}
              height={250}
              loop
              draggable={false}
              controlSize={40}
              nextControlIcon={
                <div>
                  <p>Next</p>
                </div>
              }
              previousControlIcon={
                <div>
                  <p>Back</p>
                </div>
              }
              styles={{
                controls: {
                  marginTop: 75,
                  justifyContent: 'center',
                  gap: 20,
                  height: rem(50),
                  borderColor: 'black',
                },
                control: {
                  padding: 12,
                  borderRadius: 2,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: 'black',
                },
                // indicators: {
                //   width: rem(50),
                //   height: rem(4),
                //   transition: 'width 250ms ease',
                //   backgroundColor: 'black',

                //   '&[data-active]': {
                //     width: rem(40),
                //   },
                // },
              }}
            >
              <Carousel.Slide>
                <div className={styles.guideStep}>
                  <h3 className={styles.guideHeader}>
                    Step 1: Getting started
                  </h3>
                  <p className={styles.guideDescription}>
                    A general script consists of 3 parts: Scope, Detector, and
                    Strategies. We will walk you through how to construct each
                    part.
                  </p>
                </div>
              </Carousel.Slide>
              <Carousel.Slide ml={100}>
                <div className={styles.guideStep}>
                  <h3 className={styles.guideHeader}>Step 2: Script Scope</h3>
                  <p className={styles.guideDescription}>
                    Let's define the scope of this script! You will specify your
                    scope by attaching a "Scope" block to the "I want this
                    script to apply to" block. <br></br>
                    <br></br>
                    Who do you want this script to apply for? Is it a specific
                    SIG? Is it all projects?<br></br>Take a look at the "Scope"
                    blocks under Social Structures
                  </p>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div className={styles.guideStep}>
                  <h3 className={styles.guideHeader}>
                    Step 3: Script Detector
                  </h3>
                  <p className={styles.guideDescription}>
                    <b>
                      Now that we have a scope, let's define how we will detect
                      the situation.
                    </b>{' '}
                    <br></br>
                    You can build the detector by attaching different condition
                    blocks to the blue "Detector (=if)" block. <br></br> For
                    example, you can attach conditions like checking what time
                    it is in the sprint, or checking for the work students are
                    doing using the tools in the "Sprint", "Canvases", and
                    "Github" categories.{' '}
                    {/* <em>
                      Hint: you can combine different conditions using the
                      "Logic" blocks.
                    </em> */}
                    <br></br>
                    Note: if your scope contains more than one object (1+
                    projects, SIGs etc.), the detector and strategy will
                    automatically run for each object.
                  </p>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div className={styles.guideStep}>
                  <h3 className={styles.guideHeader}>
                    Step 4: Script Strategies
                  </h3>
                  <p className={styles.guideDescription}>
                    <b>
                      When this situation is detected, what do you want to do
                      about it?
                    </b>{' '}
                    <br></br>You can use the blue "Strategy" block to include
                    how you want to support your students. <br></br> A situation
                    can also have multiple strategies. Use the "Set of" green
                    block to declare a set of strategies. Then, attach the
                    strategies to a "Root Cause" block to specify which root cause it addresses. When you're done, attach
                    your strategy/set of strategies to the detector. <br></br>
                    <em>
                      e.g. one strategy could be to send a slack message to
                      yourself/your student when something comes up (look under
                      "Communication")
                    </em>
                  </p>
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>
          <BlocklyEditor />
        </div>
      </div>
    </main>
  );
};
