import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
    text: "All",
  },
  {
    id: 2,
    text: "JavaScript",
  },
  {
    id: 3,
    text: "React",
  },
  {
    id: 4,
    text: "HTML & CSS",
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects =
    selectedFilter === "All"
      ? data
      : data.filter((project) =>
          project.tags.some(
            (tag) => tag.toLowerCase() === selectedFilter.toLowerCase()
          )
        );

  return (
    <section>
      <StyledWrapper>
        <PageTitle>Projects</PageTitle>
        <StyledProjectFlex>
          <div>
            {filterButtons.map((button) => {
              return (
                <button
                  onClick={() => handleFilterClick(button.text)}
                  key={button.id}
                  className={selectedFilter === button.text ? "active" : ""}
                >
                  {button.text}
                </button>
              );
            })}
          </div>

          <StyledProjectGrid>
            {filteredProjects.map((project) => {
              const { id, image, pageTitle, description, source, demo, tags } =
                project;
              return (
                <StyledArticle key={id}>
                  <figure>
                    <img src={image} alt={pageTitle} />
                  </figure>
                  <header>
                    <h1>{pageTitle}</h1>
                  </header>
                  <p>{description}</p>

                  <ul>
                    {project.buttons.map((button, idx) => {
                      let href = "";

                      if (button === "Demo") {
                        href = demo;
                      } else if (button === "Source") {
                        href = source;
                      }

                      return (
                        <li key={idx}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {button}
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <span>{tags.join(", ")}</span>
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
