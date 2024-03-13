import React, { useState, useEffect } from 'react';
import styles from './Signal.module.css';

interface SignalProps {
  content: string;
  title: string;
  project: string;
}

const Signal: React.FC<SignalProps> = ({ content, title, project}) => {
  useEffect(() => {
  }, []);

  return (
    <div className={styles.header}>
        <h2 className={styles.headerTitle}>Signal Debrief</h2>
        <p>What issue would you like to talk about during SIG today?</p>
        <textarea className="w-full"></textarea>
    </div>
  );
};

export default Signal;
