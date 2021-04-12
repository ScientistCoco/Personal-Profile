import React, { FC } from "react"

import SvgForeign from "images/svgForeign"
import CodeForkSymbol from "images/codeForkSymbol"

import "./project.scss"

export interface IProjectProps {
  languages: string[]
  name: string
  description: string
  link: string
  githubLink: string
}

const Project: FC<IProjectProps> = ({
  languages,
  name,
  description,
  link,
  githubLink,
}) => (
  <div className="Project">
    <div>
      <p className="Project_language">{languages.join(" | ").toUpperCase()}</p>
      <p className="Project_name">{name}</p>
      <p className="Project_description">{description}</p>
    </div>
    <div className="Project_link">
      <span>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <CodeForkSymbol style={{ cursor: "pointer", fill: "#f2f2f2" }} />
        </a>
      </span>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <SvgForeign style={{ cursor: "pointer", fill: "#f2f2f2" }} />
        </a>
      )}
    </div>
  </div>
)

export default Project
