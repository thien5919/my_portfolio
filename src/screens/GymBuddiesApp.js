import React from 'react';

const documents = [
  {
    title: "Project Summary",
    description: "A brief overview of the GymBuddiesApp, including goals and target audience.",
    file: "/documents/F24_T16_Project_Summary.docx"
  },
  {
    title: "Project Vision",
    description: "Outlines the long-term vision and core value proposition of the app.",
    file: "/documents/F24_T16_Project_Vision_1.0.docx"
  },
  {
    title: "Project Requirements",
    description: "Defines functional and non-functional requirements for the app.",
    file: "/documents/F24_T16_High_Level_Requirements.docx"
  },
  {
    title: "Project Plan",
    description: "Details the project timeline, milestones, and resource allocation.",
    file: "/documents/F24_T16_ProjectPlan.docx"
  },
  {
    title: "Requirements Analysis and Design",
    description: "In-depth analysis and design specifications including use cases and architecture.",
    file: "/documents/F24_T16_Requirements Analysis and Design.docx"
  },
  {
    title: "Wireframes and Mockups",
    description: "Visual layouts and mockups of key screens and user flows.",
    file: "/documents/GymBuddies_Wireframes.pdf"
  },
  {
    title: "Status Reports",
    description: "Weekly progress reports and summaries of completed milestones.",
    file: "/documents/GymBuddies_StatusReports.pdf"
  },
  {
    title: "System Implementation",
    description: "Technical details on backend/frontend setup, APIs, and deployment.",
    file: "/documents/GymBuddies_Implementation.pdf"
  }
];

function Documents() {
  return (
    <section className="documents-page">
      <h2>📁 GymBuddiesApp – Project Documents</h2>
      <ul className="document-list">
        {documents.map((doc, index) => (
          <li key={index} className="document-item">
            <article>
              <h4>{doc.title}</h4>
              <p>{doc.description}</p>
              <a href={doc.file} target="_blank" rel="noopener noreferrer">
                📄 View / Download
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Documents;
