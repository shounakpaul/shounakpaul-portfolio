import React from "react";
import ProjectTile from "../components/ProjectTile";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <div className="md:w-[80%] sm:w-[90%] w-[95%] flex flex-wrap gap-4 basis-0">
        <ProjectTile
          title="University Gatepass System"
          description="Developed a comprehensive solution for managing student entry and exit on campus, ensuring seamless integration for wardens, admins, guards, and over 1000 students. Designed a user-friendly interface and progressive web app (PWA) to streamline the request and approval process efficiently."
          techStack="React, Node.js, Express, MSSQL, Tailwind CSS, Figma"
          link="https://github.com/shounakpaul/Gatepass"
        />
        <ProjectTile
          title="Document-Based Chatbot Using LLM and Retrieval-Augmented Generation (RAG)"
          description="Developed a web-based chatbot interface enabling document uploads to provide contextual responses. Built with React on the frontend and Python (Flask) on the backend, it features a minimalistic UI for interactions and PDF uploads. Utilized LangChain for document processing and local LLM models for context-based responses."
          techStack="React, Python, Langchain, Ollama, ChromaDB"
          link="https://github.com/shounakpaul/DocInsight"
        />
        <ProjectTile
          title="Python Everywhere Shell"
          description="Python Everywhere Shell (Pyesh) is a Python-based shell implementation featuring essential commands for directory and file management. Supports operations like navigation, listing contents, current directory display, directory creation and removal, file deletion, and creation. Designed to provide a familiar shell experience with Python."
          techStack="Python"
          link="https://github.com/shounakpaul/pyesh"
        />
        <ProjectTile
          title="Food Delivery App"
          description="Built using React Native, the Bhooka Pet food delivery app leverages Expo for streamlined development and deployment. Incorporates Redux for efficient state management, Tailwind CSS for styling consistency, and Sanity for seamless content management. Designed to enhance user experience and facilitate pet food delivery services with modern technology."
          techStack="React Native, Expo, Sanity"
          link="https://github.com/shounakpaul/Food-Delivery-App"
        />
        <ProjectTile
          title="Movie Recommendation System"
          description="Developed a movie recommendation system using the TMDB dataset, employing content-based filtering to enhance user engagement with personalized movie suggestions. Deployed on Azure cloud services and Docker containers for efficient performance and scalability, ensuring seamless integration and optimal user experience."
          techStack="Python, TensorFlow, Azure, Docker"
          link="https://movie-recommender.azurewebsites.net/"
        />
        <ProjectTile
          title="Event Recommendation System"
          description="Developed an event recommendation system, utilizing collaborative filtering and content-based algorithms for accurate personalized suggestions. Implemented user feedback mechanisms to continually enhance recommendation relevance, aiming to optimize user engagement and satisfaction with event choices."
          techStack="Python, TensorFlow"
          link="https://github.com/shounakpaul/EvRecSys"
        />
        <ProjectTile
          title="DCGAN for Cat Image Generation"
          description="Implemented a Deep Convolutional Generative Adversarial Network (DCGAN) for generating cat images using PyTorch. Trained the model on the Cat Dataset to generate realistic cat images, leveraging the power of GANs for high-quality image generation."
          techStack="Python, Pytorch"
          link="https://github.com/shounakpaul/gan-cat-image-generation"
        />
        <ProjectTile
          title="Siamese Neural Network based Face Recognition"
          description="Developed a face recognition system using a Siamese Neural Network architecture to identify and verify faces. Trained the model on the LFW dataset, achieving high accuracy in face recognition tasks. Implemented using Python and TensorFlow for efficient performance."
          techStack="Python, TensorFlow"
          link="https://github.com/shounakpaul/siamese-face-recognition"
        />
      </div>
    </div>
  );
}

export default Projects;
