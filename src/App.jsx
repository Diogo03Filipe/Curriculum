import './App.css'

const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Xibix Solutions',
    period: 'Jul 2026 — Sep 2026',
    location: 'Internship',
    description:
      'Developed a Bid Management app with reusable React features, Microsoft Azure services, and SQL data storage. Integrated AI-powered bid-management features and collaborated on testing and bug fixes to improve reliability.',
    tags: ['React', 'Microsoft Azure', 'SQL', 'AI integration'],
  },
  {
    role: 'Seasonal Cashier',
    company: 'Continente',
    period: 'Feb 2025 — Jun 2025',
    location: 'Seasonal work',
    description:
      'Supported customers, processed registrations and payments, replenished stock, and worked with the team to keep daily store operations running smoothly.',
    tags: ['Customer service', 'Point of sale', 'Teamwork'],
  },
]

const projects = [
  {
    number: '01',
    name: 'Interactive React website',
    type: 'WEB DEVELOPMENT · KRAKOW, POLAND',
    description:
      'Developed an interactive React website in Poland with reusable components, external API data, and React Hooks for state and side-effect management.',
    className: 'project-card--peach',
    mark: '</>',
    stack: 'React · APIs · Hooks',
  },
  {
    number: '02',
    name: 'Bid Management app',
    type: 'SOFTWARE DEVELOPMENT · XIBIX SOLUTIONS',
    description:
      'Built app features for bid management, including reusable React components, Azure deployment, SQL data storage, and AI-powered task support.',
    className: 'project-card--blue',
    mark: 'BM',
    stack: 'React · Azure · SQL · AI',
  },
]

const skillGroups = [
  {
    name: 'Languages & web',
    skills: ['Java', 'JavaScript', 'C#', 'PHP', 'PL/SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Frameworks & libraries',
    skills: ['React', 'Bootstrap', 'Django'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'Oracle', 'MongoDB'],
  },
  {
    name: 'Tools & concepts',
    skills: [
      'Microsoft Azure',
      'Power BI',
      'RStudio',
      'Cisco Packet Tracer',
      'Machine learning',
      'Object-oriented programming',
    ],
  },
]

const education = [
  {
    degree: "Bachelor's Degree in Digital Technologies and Management",
    school: 'Polytechnic Institute of Bragança',
    period: 'Sep 2022 — Jul 2026',
  },
  {
    degree: 'Course in Technologies and Information Systems',
    school: 'Colégio de Gaia',
    period: 'Sep 2018 — Jul 2021',
  },
  {
    degree: 'BIP programme',
    school: 'Krakow Polytechnic, Poland',
    period: 'Jul 2024 — Aug 2024',
  },
]

const courses = [
  'Extract, Transform and Load Data in Power BI',
  'Data Modeling in Power BI',
  'Harnessing the Power of Data with Power BI',
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Diogo Silva, home">
          ds<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER</p>
            <h1>
              Diogo Silva
              <span>I build apps, websites, and practical digital products.</span>
            </h1>
            <p className="hero-description">
              Software developer with hands-on experience building React
              interfaces, integrating APIs, working with SQL, and deploying
              services to Azure.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">
                See my projects <ArrowIcon />
              </a>
              <a
                className="button button--text"
                href="/Diogo-Silva-CV.pdf"
                download="Diogo-Silva-CV.pdf"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>Portugal</span>
              <span className="meta-divider" />
              <span>Web · Apps · Data</span>
            </div>
          </div>

          <div className="portrait-card">
            <img
              className="portrait-photo"
              src="/diogo-silva-portrait.jpg"
              alt="Portrait of Diogo Silva"
            />
            <span className="portrait-stamp" aria-label="Diogo Silva initials">
              DS
            </span>
          </div>
          <div className="hero-note">BUILDING FOR THE WEB.</div>
        </section>

        <section className="intro-section page-width" id="about">
          <div className="section-label">
            <span>01</span> ABOUT
          </div>
          <div className="intro-content">
            <h2>
              Turning ideas into useful software, one thoughtful feature at a time.
            </h2>
            <div className="intro-bottom">
              <p>
                I&apos;m Diogo, a software developer with a degree in Digital
                Technologies and Management. I enjoy building websites and
                applications, connecting front ends to data and APIs, and
                learning the tools that make software useful and reliable.
              </p>
              <a className="text-link" href="mailto:diogofgs@gmail.com">
                Get in touch <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>

        <section className="experience-section section-tint" id="experience">
          <div className="page-width">
            <div className="section-heading">
              <div className="section-label"><span>02</span> EXPERIENCE</div>
              <h2>Where I&apos;ve worked.</h2>
              <p>Software development experience, alongside customer-facing seasonal work.</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-details">
                    <div className="experience-title-row">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="experience-company">
                          {item.company}<span> · </span>{item.location}
                        </p>
                      </div>
                      <span className="experience-arrow" aria-hidden="true">↗</span>
                    </div>
                    <p className="experience-description">{item.description}</p>
                    <ul className="tag-list" aria-label="Skills used">
                      {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section page-width" id="work">
          <div className="section-heading work-heading">
            <div>
              <div className="section-label"><span>03</span> BUILT &amp; LEARNED</div>
              <h2>Projects &amp; learning.</h2>
            </div>
            <p>Web development and data skills from my CV.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className="project-art">
                  <span className="project-number">{project.number} / 02</span>
                  <span className="project-mark">{project.mark}</span>
                  <span className="project-orbit" />
                  <span className="project-spark">✳</span>
                </div>
                <div className="project-copy">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-link">{project.stack}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section-tint">
          <div className="page-width skills-layout">
            <div>
              <div className="section-label"><span>04</span> TECHNICAL SKILLS</div>
              <h2>Tools I work<br />with.</h2>
            </div>
            <div className="skills-content">
              <p>
                From programming languages and web frameworks to databases,
                cloud services, and data tools.
              </p>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.name}>
                    <h3>{group.name}</h3>
                    <ul className="skill-list">
                      {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="education">
                <span>EDUCATION</span>
                <div className="education-list">
                  {education.map((item) => (
                    <article className="education-entry" key={item.degree}>
                      <div>
                        <strong>{item.degree}</strong>
                        <p>{item.school}</p>
                      </div>
                      <span>{item.period}</span>
                    </article>
                  ))}
                </div>
              </div>
              <div className="education courses">
                <span>COURSES · COURSERA · 2024</span>
                <ul className="course-list">
                  {courses.map((course) => <li key={course}>{course}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section page-width" id="contact">
          <div className="section-label"><span>05</span> CONTACT</div>
          <div className="contact-content">
            <p>Have an app or website in mind?</p>
            <h2>Let&apos;s build<br /><em>something useful.</em></h2>
            <a className="button button--dark" href="mailto:diogofgs@gmail.com">
              diogofgs@gmail.com <ArrowIcon diagonal />
            </a>
            <a className="contact-phone" href="tel:+351931184765">
              +351 931 184 765
            </a>
          </div>
          <div className="contact-aside">BASED IN<br />PORTUGAL.</div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home" aria-label="Back to top">ds<span>.</span></a>
        <p>Built with care. © 2026 Diogo Silva</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
