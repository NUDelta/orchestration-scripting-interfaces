import React from 'react';
import styles from './DiagSidebar.module.css';

interface SidebarProps {
  content: string;
  setContent: (content: string) => void;
  title: string;
}

const Sidebar: React.FC<SidebarProps> = ({ content, setContent, title }) => {
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
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
