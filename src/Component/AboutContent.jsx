import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../CSS/AboutContent.css'

function AboutContent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="About" className="about-section section">
      <motion.div
        ref={ref}
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="section-heading">
          <span className="heading-accent">01.</span> About Me
        </h2>
        <div className="about-body">
          <p>
            I'm a JavaScript developer with a strong interest in building
            responsive, interactive, and scalable web applications. I primarily
            work with <span className="highlight">React</span> for frontend
            development, using <span className="highlight">Tailwind CSS</span> for
            fast and clean UI design. I focus on writing clean, maintainable code
            and building user interfaces that are both accessible and performant.
          </p>
          <p>
            Recently, I've been expanding into full-stack development, leveraging{' '}
            <span className="highlight">Node.js</span> and{' '}
            <span className="highlight">Express.js</span> on the backend to build
            RESTful APIs, handle server-side logic, and integrate with databases
            such as MongoDB and PostgreSQL.
          </p>
          <p>
            I enjoy using tools like Git, VS Code, Postman, and browser developer
            tools to streamline my workflow. I also have experience designing and
            consuming RESTful APIs, handling JSON data, and optimizing application
            performance through code-splitting, lazy loading, caching, and
            server-side optimizations.
          </p>
          <p>
            I thrive in collaborative environments, but I'm equally comfortable
            taking ownership of a project from concept to deployment. My goal is
            to create applications that not only meet functional requirements but
            also provide an intuitive and enjoyable user experience.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutContent