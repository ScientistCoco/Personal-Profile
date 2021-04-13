import React, { FC } from "react"
import LinkedIn from "images/linkedin"
import Github from "images/github"
import Email from "images/email"

import "./contact.scss"

const contacts = [
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/courtney-lum/",
  },
  {
    icon: <Github />,
    link: "https://github.com/ScientistCoco",
  },
  {
    icon: <Email />,
    link: "mailto: courtney.lum@gmail.com",
  },
]

const Contact: FC<any> = () => (
  <div className="Contact">
    <ul className="Contact__list">
      {contacts.map(contact => (
        <li className="Contact__list__item">
          <span>{contact.icon}</span>
          <a
            className="Contact__list__item-link"
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.link}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Contact
