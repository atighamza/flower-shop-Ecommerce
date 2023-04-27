import React from 'react'
import PageIndicator from '../components/PageIndicator'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <PageIndicator text='contact' />
          <ContactForm />
        
        
    </div>
  )
}

export default ContactPage
