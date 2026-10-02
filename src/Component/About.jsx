import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiMail } from 'react-icons/fi'
import profile from '../img/sreevardhan-org1.jpeg'
import '../CSS/About.css'

function About() {
  return (
    <section id="Home" className="hero section">
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Sreevardhan L M</h1>
          <div className="hero-role">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'React Developer',
                2000,
                'JavaScript Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="hero-type"
            />
          </div>
          <p className="hero-description">
            I build responsive, user-friendly web applications with clean
            interfaces and scalable backends. Specializing in React, Node.js,
            and modern JavaScript to deliver apps that solve real problems.
          </p>
          <div className="hero-actions">
            <a href="#Projects" className="btn btn-primary">View My Work</a>
            <a href="#Contact" className="btn btn-outline">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Sreevardhan2002-cell" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="mailto:lmsreevardhan@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-image-wrapper">
            <img src={profile} alt="Sreevardhan L M" className="hero-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
