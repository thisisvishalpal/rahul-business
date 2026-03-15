import "./App.css";

function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Kanika Highway Works</div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn primary small">
          Get Quote
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <h1>Highway Maintenance & Road Infrastructure Experts</h1>
            <p>
              Reliable road maintenance, resurfacing, drainage and safety
              services for highways, industrial corridors and city roads.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn primary">
                Request Site Visit
              </a>
              <a href="#projects" className="btn secondary">
                View Projects
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3>250+ KM</h3>
                <p>Highways Maintained</p>
              </div>

              <div>
                <h3>100+</h3>
                <p>Completed Projects</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <h3>Our Expertise</h3>
              <ul>
                <li>Highway Maintenance</li>
                <li>Pothole Repair</li>
                <li>Road Resurfacing</li>
                <li>Drainage Systems</li>
                <li>Road Markings & Safety</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">
            <div className="service-card">
              <h3>Highway Maintenance</h3>
              <p>
                Complete maintenance including pothole repair, crack sealing and
                shoulder improvement.
              </p>
            </div>

            <div className="service-card">
              <h3>Road Resurfacing</h3>
              <p>
                Asphalt overlay, milling and pavement strengthening for
                long-lasting roads.
              </p>
            </div>

            <div className="service-card">
              <h3>Road Safety Works</h3>
              <p>
                Thermoplastic road markings, signage installation and crash
                barriers.
              </p>
            </div>

            <div className="service-card">
              <h3>Drainage Systems</h3>
              <p>
                Culvert cleaning, slope protection and drainage maintenance to
                prevent road damage.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section alt">
          <h2 className="section-title">How We Work</h2>

          <div className="process-grid">
            <div>
              <h3>1. Inspection</h3>
              <p>Detailed site inspection and defect analysis.</p>
            </div>

            <div>
              <h3>2. Planning</h3>
              <p>Traffic management and work scheduling.</p>
            </div>

            <div>
              <h3>3. Execution</h3>
              <p>Efficient repair, resurfacing and infrastructure work.</p>
            </div>

            <div>
              <h3>4. Monitoring</h3>
              <p>Regular reporting and maintenance checks.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2 className="section-title">Recent Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>NH-48 Maintenance</h3>
              <p>
                80 KM highway stretch maintenance including resurfacing and
                drainage improvement.
              </p>
            </div>

            <div className="project-card">
              <h3>Industrial Access Roads</h3>
              <p>Pavement strengthening for heavy logistics vehicles.</p>
            </div>

            <div className="project-card">
              <h3>Urban Junction Safety</h3>
              <p>Road markings, signage and lighting improvements.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Need Road Maintenance Services?</h2>
          <p>
            Contact our team for inspections, estimates and project execution.
          </p>

          <a href="#contact" className="btn primary large">
            Request Quote
          </a>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-grid">
            <div>
              <p>
                Tell us about your highway or road project and our team will
                reach out shortly.
              </p>

              <ul>
                <li>Email: info@Kanika-highways.in</li>
                <li>Phone: +91-98765-43210</li>
                <li>Office Hours: Mon-Sat (9am – 6pm)</li>
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We will contact you soon.");
              }}
              className="contact-form"
            >
              <input placeholder="Name" required />
              <input placeholder="Company" />
              <input placeholder="Road / Project Name" />
              <textarea placeholder="Project details" required />
              <button className="btn primary">Submit</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Kanika Highway Works — Road Construction
          & Maintenance
        </p>
      </footer>
    </div>
  );
}

export default App;
