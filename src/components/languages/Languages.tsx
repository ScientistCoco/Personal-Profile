import React, { FC } from "react"

import "./languages.scss"

interface ILanguages {
  languages: string[]
}

const Languages: FC<ILanguages> = ({ languages }) => (
  <div className="Languages">
    {languages.map(language => (
      <div className="Languages__container">
        <span>{language}</span>
      </div>
    ))}
  </div>
)

export default Languages
