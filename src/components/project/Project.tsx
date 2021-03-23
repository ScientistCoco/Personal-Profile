import React, { FC } from "react"

import SvgForeign from "images/svgForeign"

import "./project.scss"

export interface IProjectProps {
  languages: string[]
  name: string
  description: string
}

const Project: FC<IProjectProps> = ({ languages, name, description }) => (
  <div className="Project">
    <div>
      <p className="Project_language">{languages.join(" | ").toUpperCase()}</p>
      <p className="Project_name">{name}</p>
      <p className="Project_description">{description}</p>
    </div>
    <div className="Project_link">
      <SvgForeign style={{ cursor: "pointer", fill: "#f2f2f2" }} />
    </div>
  </div>
)

export default Project
