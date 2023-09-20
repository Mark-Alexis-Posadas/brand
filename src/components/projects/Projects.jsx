import { useState } from "react";
import { PageTitle, StyledWrapper } from "../../globalStyles";
import data from "./data";
import {
  StyledArticle,
  StyledProjectFlex,
  StyledProjectGrid,
} from "./Projects.style";

const filterButtons = [
  {
    id: 1,
    text: "JavaScript",
  },
  {
    id: 2,
    text: "React JS",
  },
  {
    id: 3,
    text: "HTML & CSS",
  },
];
const Projects = () => {
  return (
    <section>
      <StyledWrapper>
        <PageTitle>Projects</PageTitle>
        <StyledProjectFlex>
          <div>
            {filterButtons.map((button) => {
              return <button key={button.id}>{button.text}</button>;
            })}
          </div>
          <StyledProjectGrid>
            {data.map((projects) => {
              const { id, image, pageTitle, description, source, demo } =
                projects;
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
          </StyledProjectGrid>
        </StyledProjectFlex>
      </StyledWrapper>
    </section>
  );
};

export default Projects;
