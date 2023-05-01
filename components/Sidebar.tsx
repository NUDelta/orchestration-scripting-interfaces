import styles from './Sidebar.module.css';
import { Carousel } from '@mantine/carousel';

const steps = [
    [{ title: "Getting started", instructions: "A general script consists of 4 parts: Detector, Potential Causes, Context for Key Cause Diagnosis, and Strategies. "},
    { title: "1. The Detector", instructions: "Describe the situation that you want to script for. "},
    { title: "1.1 Scope", instructions: "First, specify who you want this script to apply for. Is it a specific SIG? Is it all projects? Take a look at the 'Scope' blocks under Social Structures."
    + "Attach a 'Scope' block to the 'I want this script to apply to' block."},
    { title: "1.2 Detecting the situation", instructions: "Think back to a time when this situation happened. What did the student do and how did you notice it was happening? Using the blocks on the right, build a detector that can help you know when the problem is happening."}],
    [{ title: "2. Potential Causes", instructions: "Based on your understanding of your students, what do you think is causing this situation? Under Potential Causes, list the common reasons why your student might be struggling with the issue."}],
    [{ title: "3. Context for Root Cause Diagnosis", instructions: "Using the dropdown, select some context information to help you diagnose the key root cause. When the detector triggers, the context information you selected will be sent to you to help you diagnose exactly which root cause is causing the struggling."}],
    [{ title: "4. Strategies", instructions: "Formulate a help strategy for the potential cause(s) identified in step 2. If you identified multiple potential causes, design a tailored strategy for each one."}]
]


export const Sidebar = () => {

    return (
        <div className={styles.container}>
            <h1>Orchestration Scripting Environment</h1>

            <div className={styles.carouselContainer}>
            <Carousel
              w="100%" height="100%" loop draggable={false} controlSize={40}
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
                  marginTop: '37vh',
                  justifyContent: 'center',
                  gap: 20,
                  borderColor: 'black',
                },
                control: {
                  padding: 12,
                  borderRadius: 2,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: 'black',
                },
              }}
            >
            {steps.map((x) => (
                <Carousel.Slide>
                    {x.map((y) => (
                        <div className={styles.step} key={y.title}>
                        <h2>{y.title}</h2>
                        <p>{y.instructions}</p>
                        </div>
                    ))}
                    </Carousel.Slide>
                ))}
                </Carousel>
            </div>
        </div>
    );
}

                    {/* {y.title === "1. The Detector" && (
                <div className={styles.textareaContainer}>
                    <textarea 
                        placeholder="Enter your description here" 
                        className={styles.textarea} 
                    />
                </div>
                ))} */}