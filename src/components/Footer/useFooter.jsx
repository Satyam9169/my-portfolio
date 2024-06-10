import React from 'react'

const useFooter = () => {
  const handleLinkedin = () =>
    window.open(
      "https://www.linkedin.com/in/satyam-agrahari/",
      "_blank",
      "noopener noreferrer"
    );

  const handleGithub = () =>
    window.open(
      "https://github.com/Satyam9169",
      "_blank",
      "noopener noreferrer"
    );

  const handleJavaScript = () =>
    window.open(
      "https://leetcode.com/u/satyamagrahari952/",
      "_blank",
      "noopener noreferrer"
    );

  const currentYear = new Date().getFullYear();

  return { handleGithub, handleLinkedin, currentYear, handleJavaScript }
}

export default useFooter