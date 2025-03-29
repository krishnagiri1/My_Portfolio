import React, { useState, useEffect } from 'react';
import { db } from './firebase';  // Import Firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectSnapshot = await getDocs(collection(db, "projects")); // Fetch projects collection
      const projectList = projectSnapshot.docs.map(doc => doc.data());
      setProjects(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.title}</li>  // Display project titles
        ))}
      </ul>
    </div>
  );
};

export default Projects;
