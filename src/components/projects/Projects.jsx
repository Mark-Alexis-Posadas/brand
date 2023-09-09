import { useState } from "react";
import { PageTitle, StyledWrapper } from "../../globalStyles";
import data from "./data";
import { StyledArticle } from "./Projects.style";
const Projects = () => {
  return (
    <section>
      <StyledWrapper>
        <PageTitle>Projects</PageTitle>
        {data.map((projects) => {
          const { id, image, pageTitle, description, source, demo } = projects;
          return (
            <StyledArticle key={id}>
              <figure>
                <img src={image} alt={image} />
              </figure>
              <header>
                <h1>{pageTitle}</h1>
              </header>
              <p>{description}</p>
            </StyledArticle>
          );
        })}
      </StyledWrapper>
    </section>
  );
};

export default Projects;
