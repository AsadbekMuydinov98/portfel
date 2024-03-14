import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
import { getMySites } from "../services/api";

export const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getMySites()
.then((response) => setData(response.mySitesId  ))
  })

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Explore a diverse array of projects that showcase Asadbek's proficiency across the MERN stack. From sleek and responsive user interfaces built with React and Next.js to robust backend solutions powered by Nest.js and Express.js, each project exemplifies Asadbek's ability to translate complex ideas into seamless digital experiences. Leveraging MongoDB for efficient data management and Tailwind CSS for polished styling, Asadbek's portfolio embodies innovation at every turn.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          data.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                imgUrl={project.image.url}
                                github={project.githubLink}
                                website={project.vercelLink}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="oboi" />
    </section>
  )
}
