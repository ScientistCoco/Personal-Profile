import * as React from "react"

import { Project } from "components/project"
import { Navigation } from "components/navigation"
import "./index.scss"

const projects = [
  {
    languages: ["reactjs"],
    name: "AelanPlace",
    description: "Accommodation website for AirBnB apartments",
  },
  {
    languages: ["reactjs", "python"],
    name: "Accommodex",
    description:
      "Machine learning to determine if it is better to sell, rent or AirBnB a property",
  },
  {
    languages: ["java"],
    name: "Dungeon Crawler game",
    description: "University project to learn the basics of OOP",
  },
]

const IndexPage = () => (
  <div className="Index">
    <div>
      <h1 className="Index__header">
        Hello, I'm <br />
        Courtney Lum.
      </h1>
      <p className="Index__description">
        I am a software engineer currently working within the Australian FinTech
        space.
      </p>
      <Navigation className="Index__navigation" />
    </div>
    <div className="Index__projects">
      {projects.map(project => (
        <div className="Index__project">
          <Project
            languages={project.languages}
            name={project.name}
            description={project.description}
          />
        </div>
      ))}
    </div>
  </div>
)

export default IndexPage
