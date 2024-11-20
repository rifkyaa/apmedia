import React from 'react'
import "./Contact.css"
import { dataContact } from './dataContact'
import imgApmXSir from "../../assets/apmXsir.png"

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <div className="contact__content container grid">
        <div className="section__contact-first">
          <h1 className='contact__title'>Contact Us</h1>
          <p className='contact__subtitle'>Want to collaborate?</p>
          {dataContact.map((contact) => (
            <div className="wrapper__sosmed-contact" key={contact.id}>
              <contact.icon className='icon__contact' />
              <a href={contact.link} target='_blank' className="value__icon-contact">{contact.value}</a>
            </div>
          ))}
        </div>
        <img src={imgApmXSir} alt="apmxsir" className='img__contact'/>
      </div>
    </section>
  )
}

export default Contact