import React, { useState, useEffect } from 'react';
import styles from './DiagSidebar.module.css';

interface SidebarProps {
  content: string;
  setContent: (content: string) => void;
  title: string;
  project: string;
}

const Sidebar: React.FC<SidebarProps> = ({ content, setContent, title, project}) => {
  const [problemContent, setProblemContent] = useState(
    'Students are significantly undercommitted in this sprint'
  );

  useEffect(() => {
  }, []);

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Your detector for {title} has been triggered for {project}.</h1>
      <h2 className="text-lg font-semibold mb-2">Detector Debrief</h2>
      <textarea
        className={styles.problem_textbox}
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default Sidebar;
