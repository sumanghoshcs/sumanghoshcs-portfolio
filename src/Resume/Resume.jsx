import React from "react";
import "./Resume.css";

const ResumeComponent = () => {
  // Replace YOUR_FILE_ID with the actual ID of your Google Drive PDF
  const resumePdfId = "18iLL4PcvIzdZQtxMsyig2v3WiyEA5x0S";
  // https://drive.google.com/file/d//view?usp=sharing
  const resumePdfUrl = ` https://drive.google.com/file/d/${resumePdfId}/preview`;

  return (
    <div className="resume-container">
      <div className="resume-box">
        <iframe src={resumePdfUrl} title="Resume" className="resume-iframe" />
      </div>
      <a
        href={resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View Resume
      </a>
    </div>
  );
};

export default ResumeComponent;
