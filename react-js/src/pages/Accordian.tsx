import { useState } from "react";

const Accordian = () => {
    const [accordians, setAccordians] = useState([
        {
            id: 1,
            title: "About Me",
            content: `
      I'm a MERN stack developer with 4+ years of experience building scalable web applications.
      I specialize in React, Node.js, and TypeScript, with a strong focus on clean architecture
      and performance optimization.
    `,
        },
        {
            id: 2,
            title: "Skills",
            content: `
      <ul>
        <li><strong>Frontend:</strong> React, Redux Toolkit, Next.js, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express, NestJS</li>
        <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL</li>
        <li><strong>Others:</strong> GraphQL, Docker, Git, AWS</li>
      </ul>
    `,
        },
        {
            id: 3,
            title: "Projects",
            content: `
      <p><strong>Car Marketplace 2.0:</strong> A vehicle marketplace platform with advanced search and payment integration.</p>
      <p><strong>CMS Admin Portal:</strong> A multi-role content management system with analytics dashboard.</p>
      <p><strong>LoveMedia:</strong> A media streaming application supporting real-time chat and subscriptions.</p>
    `,
        },
        {
            id: 4,
            title: "Experience",
            content: `
      <p><strong>Cyber Infrastructure:</strong> Software Developer (2022–2024) — Built scalable solutions using React and Node.js.</p>
      <p><strong>Systango:</strong> Associate Software Developer (2020–2022) — Focused on MERN stack projects and RESTful APIs.</p>
    `,
        },
        {
            id: 5,
            title: "Contact",
            content: `
      <p>Email: praveen@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/praveen" target="_blank">linkedin.com/in/praveen</a></p>
      <p>GitHub: <a href="https://github.com/praveen" target="_blank">github.com/praveen</a></p>
    `,
        },
    ]
    );
    const [activeId, setActiveId] = useState(null);

    const handleTitleChange = (acItem) => {
        let { id } = acItem;
        setActiveId(activeId == id ? null : id);
    };

    return (<>
        <div>
            <h1>Frequently asked questions</h1>
            {
                accordians.map((acItem, acIndex) => {
                    return (<>
                        <div key={acItem.id}>
                            <p onClick={() => handleTitleChange(acItem)}>{acItem.title}</p>
                            {activeId == acItem.id && <p>{acItem.content}</p>}
                        </div>
                    </>)
                })
            }
        </div>
    </>)
};

export default Accordian;