import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Forkify from '../img/Forkify.png'
import MovieApp from '../img/Movie-App.jpg'
import '../CSS/project.css'

const PROJECTS = [
  {
    title: 'Forkify',
    description:
      'A recipe search application that allows users to search, bookmark, and upload custom recipes. Features include pagination, dynamic servings adjustment, and local storage persistence.',
    image: Forkify,
    tags: ['JavaScript', 'HTML', 'CSS', 'REST API', 'MVC'],
    github: 'https://github.com/SreevardhanLM/Forkify-Projact-JavaScript.git',
    live: null,
  },
  {
    title: 'Movie App',
    description:
      'A movie discovery application that lets users browse, search, and explore movie details using a third-party API. Features responsive design and smooth UI interactions.',
    image: MovieApp,
    tags: ['React', 'API Integration', 'CSS'],
    github: 'https://github.com/SreevardhanLM/MovieUi.git',
    live: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function Project() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="Projects" className="projects-section section">
      <motion.div
        ref={ref}
        className="projects-inner"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <h2 className="section-heading">
          <span className="heading-accent">03.</span> Projects
        </h2>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={cardVariants}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Project