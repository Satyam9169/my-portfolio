import React, { useState } from "react";

const useProject = () => {

  const portfolio_GithubLink = () =>
    window.open(
      "https://github.com/Satyam9169/my-portfolio/tree/master",
      "_blank",
      "noopener noreferrer"
    );

  const userApp_GithubLink = () =>
    window.open(
      "https://github.com/Satyam9169/User_management",
      "_blank",
      "noopener noreferrer"
    );

  const MovieApp_GithubLink = () =>
    window.open(
      "https://github.com/Satyam9169/react-moview-search/tree/main",
      "_blank",
      "noopener noreferrer"
    );

  return {
    portfolio_GithubLink,
    userApp_GithubLink,
    MovieApp_GithubLink,
  };
};

export default useProject;

// import { useState, useEffect } from "react";

// const useProject = () => {
//   const [loading, setLoading] = useState(true);
//   const [portfolio_GithubLink, setPortfolio_GithubLink] = useState("");
//   const [userApp_GithubLink, setUserApp_GithubLink] = useState("");
//   const [MovieApp_GithubLink, setMovieApp_GithubLink] = useState("");

//   useEffect(() => {
//     // Simulate an API call
//     let timeId = setTimeout(() => {
//       setPortfolio_GithubLink("https://github.com/user/portfolio");
//       setUserApp_GithubLink("https://github.com/user/userapp");
//       setMovieApp_GithubLink("https://github.com/user/movieapp");
//       setLoading(false);
//     }, 1000);

//     // use cleanup funciton
//     return () => clearTimeout(timeId);
//   }, []);

//   return {
//     portfolio_GithubLink,
//     userApp_GithubLink,
//     MovieApp_GithubLink,
//     loading,
//   };
// };

// export default useProject;


