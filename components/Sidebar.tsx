import styles from './Sidebar.module.css';

const steps = [
    { title: "Getting started", instructions: "A general script consists of 4 parts: Detector, Root Causes, Context for Root Cause Diagnosis, and Strategies. "},
    { title: "1. The Detector", instructions: "Think back to a time when one of your students was not working or learning effectively this quarter. Think about what the student did and how you noticed it was happening. Using the blocks on the right, build a detector that can help you know when the problem is happening."},
    { title: "2. Potential Causes", instructions: "Based on your understanding of your students, what do you think is causing this situation? Under Potential Causes, list the common reasons why your student might be struggling with the issue."},
    { title: "3. Context for Root Cause Diagnosis", instructions: "Using the dropdown, select some context information to help you diagnose the key root cause. When the detector triggers, the context information you selected will be sent to you to help you diagnose exactly which root cause is causing the struggling."},
    { title: "4. Strategies", instructions: "Formulate a help strategy for the potential cause(s) identified in step 2. If you identified multiple potential causes, strategize for each one."}
]


export const Sidebar = () => {

    return (
        <div className={styles.container}>
            <h1>Orchestration Scripting Environments</h1>

            {steps.map((x) => (
                <div className={styles.step} key={x.title}>
                    <h2>{x.title}</h2>
                    <p>{x.instructions}</p>
                </div>
            ))}

        </div>
)}