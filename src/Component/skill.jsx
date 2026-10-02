import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiLinux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'
import { FiCode, FiCpu, FiDatabase } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import '../CSS/Skill.css'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FiDatabase />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    title: 'Tools & Other',
    icon: <FiCpu />,
    skills: [
      { name: 'Git & GitHub', icon: <SiGit /> },
      { name: 'REST APIs', icon: <FiCode /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'Problem Solving', icon: <HiOutlineLightBulb /> },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function Skill() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="Skills" className="skills-section section">
      <motion.div
        ref={ref}
        className="skills-inner"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <h2 className="section-heading">
          <span className="heading-accent">02.</span> Skills & Technologies
        </h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map(cat => (
            <motion.div
              key={cat.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="skill-category-title">
                <span className="skill-category-icon">{cat.icon}</span>
                {cat.title}
              </h3>
              <ul className="skill-list">
                {cat.skills.map(skill => (
                  <li key={skill.name} className="skill-pill">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skill