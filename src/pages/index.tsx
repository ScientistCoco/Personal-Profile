import React, { FC, useRef, useState } from "react"
import { useInViewport } from "react-in-viewport"
import { Project } from "components/project"
import { Navigation } from "components/navigation"
import { Languages } from "components/languages"
import { Frameworks } from "components/frameworks"
import { Contact } from "components/contact"

import "./index.scss"

const projects = [
  {
    languages: ["reactjs"],
    name: "AelanPlace",
    description: "Accommodation website for AirBnB apartments",
    link: "https://aelanplace.com/apartments/",
    githubLink: "https://github.com/ScientistCoco/Aelan-Place",
  },
  {
    languages: ["reactjs", "python"],
    name: "Accommodex",
    description:
      "Machine learning to determine if it is better to sell, rent or AirBnB a property",
    link: "https://accommodex.netlify.com/",
    githubLink: "https://github.com/ScientistCoco/Accommodex_Client",
  },
  {
    languages: ["java"],
    name: "Cipher App",
    description:
      "A mobile app that allows you to encode a message in five ways",
    link: "",
    githubLink: "https://github.com/ScientistCoco/cipherApp",
  },
]

const ViewPortBlock: FC<any> = ({
  callInViewPort,
  callExitViewPort,
  children,
}) => {
  const myRef = useRef<HTMLDivElement>(null)

  useInViewport(
    myRef,
    { threshold: 1.0 },
    { disconnectOnLeave: false },
    {
      onEnterViewport: callInViewPort,
      onLeaveViewport: callExitViewPort,
    }
  )

  return <div ref={myRef}>{children}</div>
}

const IndexPage = () => {
  const [personalProjectsInViewPort, setPersonalProjectsInViewPort] = useState(
    false
  )
  const [skillsInViewPort, setSkillsInViewPort] = useState(false)
  const [contactInViewPort, setContactInViewPort] = useState(false)

  return (
    <div className="Index">
      <div className="Introduction">
        <h1 className="Introduction__header">
          Hello, I'm <br />
          Courtney Lum.
        </h1>
        <p className="Introduction__description">
          I am a software engineer currently working within the Australian
          FinTech space.
        </p>
        <Navigation
          className="Introduction__navigation"
          personalProjectsInViewPort={personalProjectsInViewPort}
          skillsInViewPort={skillsInViewPort}
          contactInViewPort={contactInViewPort}
        />
      </div>
      <div className="Info">
        <ViewPortBlock
          callInViewPort={() => setPersonalProjectsInViewPort(true)}
          callExitViewPort={() => setPersonalProjectsInViewPort(false)}
        >
          <section className="Personal-projects" id="Personal_Projects">
            <h2 className="d-none">Personal Projects</h2>
            {projects.map(project => (
              <div className="py-2">
                <Project
                  languages={project.languages}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  githubLink={project.githubLink}
                />
              </div>
            ))}
          </section>
        </ViewPortBlock>
        <ViewPortBlock
          callInViewPort={() => setSkillsInViewPort(true)}
          callExitViewPort={() => setSkillsInViewPort(false)}
        >
          <section className="Skills" id="Skills">
            <div className="Skills_languages">
              <h2>Languages:</h2>
              <Languages languages={[".JS", "C#", ".PY", "C", "SQL", "JAVA"]} />
            </div>
            <div className="Skills_frameworks">
              <h2>Frameworks:</h2>

              <Frameworks
                frameworks={[
                  "ReactJS",
                  "Typescript",
                  "ExpressJS",
                  "GatsbyJS",
                  ".Net Core",
                  ".Net Framework",
                ]}
              />
            </div>
          </section>
        </ViewPortBlock>
        <ViewPortBlock
          callInViewPort={() => setContactInViewPort(true)}
          callExitViewPort={() => setContactInViewPort(false)}
        >
          <section className="Contact" id="Contact">
            <h2 className="d-none">Contact</h2>
            <Contact />
          </section>
        </ViewPortBlock>
      </div>
    </div>
  )
}

export default IndexPage
