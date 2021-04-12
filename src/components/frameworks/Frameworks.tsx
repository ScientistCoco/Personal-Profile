import React, { FC } from "react"

import "./frameworks.scss"

interface IFrameworks {
  frameworks: string[]
}

const Frameworks: FC<IFrameworks> = ({ frameworks }) => (
  <div className="Frameworks">
    {frameworks.map(framework => (
      <div className="Frameworks__item">
        <span>{framework}</span>
      </div>
    ))}
  </div>
)

export default Frameworks
