import React from 'react';

const documents = [
  {
    title: "Project Summary",
    description: "A brief overview of the GymBuddiesApp, including goals and target audience.",
    file: "/documents/GymBuddies_Proposal.pdf"
  },
  {
    title: "Project Vision",
    description: "Outlines the long-term vision and core value proposition of the app.",
    file: "/documents/GymBuddies_Vision.pdf"
  },
  {
    title: "Project Requirements",
    description: "Defines functional and non-functional requirements for the app.",
    file: "/documents/GymBuddies_Requirements.pdf"
  },
  {
    title: "Project Plan",
    description: "Details the project timeline, milestones, and resource allocation.",
    file: "/documents/GymBuddies_Plan.pdf"
  },
  {
    title: "Requirements Analysis and Design",
    description: "In-depth analysis and design specifications including use cases and architecture.",
    file: "/documents/GymBuddies_Analysis_Design.pdf"
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
