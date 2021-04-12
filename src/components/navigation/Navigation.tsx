import React, { FC } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./navigation.scss"

export interface INavigation {
  className?: string
  personalProjectsInViewPort: boolean
  skillsInViewPort: boolean
  contactInViewPort: boolean
}

const Navigation: FC<INavigation> = ({
  className,
  personalProjectsInViewPort,
  skillsInViewPort,
  contactInViewPort,
}) => {
  const navigationItems = [
    {
      number: "01",
      header: "Personal_Projects",
      focused: personalProjectsInViewPort,
    },
    {
      number: "02",
      header: "Skills",
      focused: skillsInViewPort,
    },
    {
      number: "03",
      header: "Contact",
      focused: contactInViewPort,
    },
  ]

  return (
    <div className={`Navigation ${className}`}>
      <ul className="Navigation__list">
        {navigationItems.map(item => (
          <li
            className={`Navigation__list__item ${
              item.focused ? "Navigation__list__item--focused" : ""
            }`}
            onClick={() => scrollTo(`#${item.header}`)}
          >
            <span className="Navigation__list__item-number">{item.number}</span>
            <span className="Navigation__list__item-line"></span>
            <span>{item.header}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
