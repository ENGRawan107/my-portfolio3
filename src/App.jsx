
import './App.css';

function App() {
  return (
    <div className="portfolio" id="home">
      <nav className="navbar">
        <div className="logo">
          <span>Rawan</span>
          <p>Frontend Developer</p>
        </div>

        <ul className="nav-links">

          {[
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
].map((link) => (
  <li key={link.label}>
    <a href={link.href}>{link.label}</a>
  </li>
))}
        </ul>

        <a href="#contact" className="nav-btn">Contact Me</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I’m <span>Rawan</span>
          </h1>

          <h2>
            Frontend Developer | <span>React Enthusiast</span>
          </h2>

          <p>
            I build fast, responsive, and user-friendly web applications
            with clean code and modern design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-browser">
            <div className="mini-logo">Code</div>
            <div className="mini-links">
              <span>Home</span>
              <span>About</span>
              <span>Projects</span>
            </div>
          </div>

          <h3>
            Building fast, modern <span>websites</span>
            <br />
            that grow your <span>business</span>
          </h3>

          <p>
            Clean interfaces, responsive layouts, and smooth user experiences.
          </p>

          <div className="preview-cards">
            <div className="tech-card">React</div>
            <div className="tech-card">JavaScript</div>
            <div className="tech-card">UI</div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-icon">♡</div>

        <div className="section-content">
          <h2>ABOUT ME</h2>
          <p>
            Software Engineering graduate with hands-on experience in designing,
            developing, and testing software solutions. Passionate about building
            clean, responsive, and user-friendly web interfaces.
          </p>
        </div>

        <div className="info-boxes">
{[
  { label: "From", value: "Saudi Arabia" },
  { label: "Degree", value: "B.Sc. Software Engineering" },
  { label: "Graduation", value: "2025" }
].map((info) => (
  <div key={info.label}>
    <span>{info.label}</span>
    <strong>{info.value}</strong>
  </div>
))}
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills-container">
                     {["HTML", "CSS", "JavaScript", "React", "TypeScript"].map((skill) => (
                        <div className="skill-card" key={skill}>
                           <h3>{skill}</h3>
                        </div>
              ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">PROJECTS</h2>

        <div className="projects-container">

          
{[
  {
    title: "Frontend System",
    desc: "Angular-based frontend application inspired by NWC digital services.",
    link: "https://github.com/ENGRawan107/nwc-frontend-assignment",
    label: "GitHub"
  },
  {
    title: "Smart Clinical Access Dashboard",
    desc: "A fast-access system helping doctors reach essential tools instantly.",
    link: "https://engrawan107.github.io/My-first-project/",
    label: "Live Demo"
  },
  {
    title: "Dynamic Registration System",
    desc: "A modern form connected to a database for efficient data management.",
    link: "https://engrawan107.github.io/My-second-project/",
    label: "Live Demo"
  },
  {
    title: "Portfolio Website v1",
    desc: "My previous portfolio showcasing design evolution and UI improvements.",
    link: "https://engrawan107.github.io/my-portfolio1/",
    label: "Live Demo"
  }
].map((project) => (
  <div className="project-card" key={project.title}>
    <h3>{project.title}</h3>
    <p>{project.desc}</p>

    <div className="project-buttons">
      <a href={project.link} target="_blank">
        {project.label}
      </a>
    </div>
  </div>
))}

       </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section-title">CONTACT</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let’s work together 🚀</h3>
            <p>
              Feel free to reach out if you’re looking for a frontend developer
              or want to collaborate on a project.
            </p>

            <p><strong>Email:</strong> rawan.software.dev@gmail.com</p>
            <p><strong>Location:</strong> Saudi Arabia</p>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/xyklozdj"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;