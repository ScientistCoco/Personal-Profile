import React, { FC } from "react"

import "./navigation.scss"

export interface INavigation {
  className?: string
}

const navigationItems = [
  {
    number: "01",
    header: "Personal Projects",
  },
  {
    number: "02",
    header: "Skills",
  },
  {
    number: "03",
    header: "Contact",
  },
]

const Navigation: FC<INavigation> = ({ className }) => (
  <div className={`Navigation ${className}`}>
    <ul className="Navigation__list">
      {navigationItems.map(item => (
        <li className="Navigation__list__item">
          <span className="Navigation__list__item-number">{item.number}</span>
          <span className="Navigation__list__item-line"></span>
          <span>{item.header}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default Navigation
