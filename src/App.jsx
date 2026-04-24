
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
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
          <div>
            <span>From</span>
            <strong>Saudi Arabia</strong>
          </div>

          <div>
            <span>Degree</span>
            <strong>B.Sc. Software Engineering</strong>
          </div>

          <div>
            <span>Graduation</span>
            <strong>2025</strong>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills-container">
          <div className="skill-card"><h3>HTML</h3></div>
          <div className="skill-card"><h3>CSS</h3></div>
          <div className="skill-card"><h3>JavaScript</h3></div>
          <div className="skill-card"><h3>React</h3></div>
          <div className="skill-card"><h3>TypeScript</h3></div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">PROJECTS</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>Frontend System</h3>
            <p>
              Angular-based frontend application inspired by NWC digital services.
            </p>

            <div className="project-buttons">
              <a href="https://github.com/ENGRawan107/nwc-frontend-assignment" target="_blank">
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Smart Clinical Access Dashboard</h3>
            <p>
              A fast-access system helping doctors reach essential tools instantly.
            </p>

            <div className="project-buttons">
              <a href="https://engrawan107.github.io/My-first-project/" target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Dynamic Registration System</h3>
            <p>
              A modern form connected to a database for efficient data management.
            </p>

            <div className="project-buttons">
              <a href="https://engrawan107.github.io/My-second-project/" target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Portfolio Website v1</h3>
            <p>
              My previous portfolio showcasing design evolution and UI improvements.
            </p>

            <div className="project-buttons">
              <a href="https://engrawan107.github.io/my-portfolio1/" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
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