import React from 'react';
import styles from './Guidelines.module.css';

const Guidelines: React.FC = () => {

  return (
    <div className={styles.header}>
        <h2 className={styles.headerTitle}>Guidelines for Asking Questions During SIG</h2>
            <p>Here are some guidelines to help you formulate questions to ask during SIG: </p>
            <ul>
                <li className={styles.list}>Try to scaffold as much as you can by keep asking 'why' to get to the bottom of the issue. 
                For example, if a student said they didn't reach out for help, ask “why was that? Did you feel a lack of support, 
                or you didn't know any help-seeking channels?”</li>
                <li className={styles.list}>Ask metacognitive questions! For the cognitive issues we see, there is usually a metacognitive 
                cause. Try asking questions like:
                <ul>
                    <li className={styles.list}>Why did you decide to [action]?</li>
                    <li className={styles.list}>How did you feel when …?</li>
                    <li className={styles.list}>Why did you do one thing over another?</li>
                    <li className={styles.list}>Do you feel like your decision was a mature decision?</li>
                    <li className={styles.list}>Why did you feel compelled to…?</li>
                    <li className={styles.list}>Why is it hard for you to…?</li>
                </ul>
                </li>
            </ul>
    </div>
  );
};

export default Guidelines;
