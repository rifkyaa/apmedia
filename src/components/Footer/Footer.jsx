import React from 'react'
import "./Footer.css"
import {dataContact} from "../Contact/dataContact"

const Footer = () => {
  return (
    <footer className='grid'>
        <span className="title__footer">
            &#169; 2024 APMEDIA. All rights reserved
        </span>
        <div className="wrapper__sosmed-footer">
          {dataContact.map((contact) => (
            <a href={contact.link} target='_blank' key={contact.id}>
              <contact.icon className='icon__sosmed-footer' />
            </a>
          ))}
        </div>
    </footer>
  )
}

export default Footer