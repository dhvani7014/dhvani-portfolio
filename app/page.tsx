"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, FileText, GraduationCap, Mail, Phone } from "lucide-react";
import { about, certifications, education, experience, profile, projects, stats, techStack } from "@/data/content";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import ContactNetwork from "@/components/ContactNetwork";
import PortfolioChat from "@/components/PortfolioChat";

const nav = ["about", "experience", "projects", "education", "skills", "awards", "contact"];

function renderHighlighted(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong className="glass-highlight" key={index}>{part.slice(2, -2)}</strong>
    ) : <Fragment key={index}>{part}</Fragment>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const pane = document.querySelector(".right-scroll-pane");
    const scrollTarget = pane && pane.scrollHeight > pane.clientHeight ? pane : window;

    const updateActiveSection = () => {
      const threshold = pane ? pane.getBoundingClientRect().top + 145 : 145;
      const visible = nav.filter((id) => document.getElementById(id)?.getBoundingClientRect().top! <= threshold);
      setActiveSection(visible.at(-1) ?? "about");
    };

    updateActiveSection();
    scrollTarget.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => scrollTarget.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="site-header">
        <a href="#top" className="portfolio-mark">Portfolio / 2026</a>
        <nav aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item}`} className={activeSection === item ? "active" : undefined}>{item}</a>)}
        </nav>
        <a className="resume-button" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume <FileText size={15} />
        </a>
      </header>

      <div className="right-scroll-pane">
      <section id="top" className="hero wrap">
        <div className="hero-identity">
          <div className="identity-main">
            <div className="hero-art">
              <div className="halo" />
              <div className="hero-card">
                <Image src="/images/dhvani.png" alt="Dhvani Dave" fill priority sizes="(max-width: 850px) 45vw, 18vw" className="portrait" />
              </div>
            </div>
            <div>
              <h1 className="hero-name">Dhvani <em>Dave</em></h1>
              <p className="hero-role">Software Engineer</p>
              <p className="availability identity-availability"><span /> Open to opportunities · MS CS @ UB</p>
              <p className="hero-build identity-build">Building Software, AI &amp; Tech Things</p>
            </div>
          </div>

        <div className="hero-copy">
          <div className="hero-stats" aria-label="Career highlights">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="hero-summary hero-reveal hero-reveal-4">Computer Science graduate student specializing in full stack development and AI powered applications. I enjoy taking an idea, figuring out how to make it work, solving problems along the way, and learning something new with every project.</p>
          <div className="hero-actions hero-reveal hero-reveal-5">
            <a className="primary-button" href="#projects">View my work <ArrowDownRight size={17} /></a>
            <a className="text-button" href={`mailto:${profile.email}`}>Let&apos;s connect <ArrowUpRight size={16} /></a>
          </div>
        </div>
        </div>

        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section id="about" className="section wrap split-section">
        <p className="eyebrow">01 / About me</p>
        <div><h2 className="about-title">A little about my <em>journey</em> so far</h2></div>
        <div className="about-copy">{about.paragraphs.map(p => <p key={p}>{renderHighlighted(p)}</p>)}<a className="text-button" href="#experience">My experience <ArrowDownRight size={16} /></a></div>
      </section>

      <section id="experience" className="section wrap experience-section">
        <div className="section-intro"><p className="eyebrow">02 / Professional experience</p><h2 className="experience-title">A few years of <em>building and learning</em></h2></div>
        <div className="timeline">{experience.map(job => <article key={job.company} className="timeline-item"><div className="timeline-date">{job.period}</div><div><p className="company">{job.company} <span>{job.location}</span></p><h3>{job.role}</h3><ul>{job.bullets.map(b => <li key={b}>{renderHighlighted(b)}</li>)}</ul><div className="tag-row">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section id="projects" className="section wrap work-section">
        <div className="section-intro"><p className="eyebrow">03 / Projects</p><h2 className="projects-title">Things that started as an <em>idea</em></h2><p className="projects-intro">Ideas are better when you build them. A few projects I’ve taken from a blank screen to something real.</p></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card project-${index + 1} ${selectedProject === project.title ? "is-selected" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setSelectedProject(project.title)}
              onMouseLeave={() => setSelectedProject(null)}
              onFocus={() => setSelectedProject(project.title)}
              onBlur={() => setSelectedProject(null)}
            >
              <div className="project-main"><p className="project-type">{project.subtitle} <span>{project.period}</span></p><h3>{project.title}</h3><ul className="project-highlights project-preview"><li>{renderHighlighted(project.highlights[0])}</li></ul>{selectedProject !== project.title && project.highlights.length > 1 && <p className="project-more">··· hover for more</p>}{selectedProject === project.title && <ul className="project-highlights project-expanded">{project.highlights.slice(1).map(item => <li key={item}>{renderHighlighted(item)}</li>)}</ul>}</div>
              <div className="project-footer"><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight size={20} /></a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section wrap education-section"><div className="section-intro"><p className="eyebrow">04 / Education</p><h2 className="education-title">The <em>foundation</em> behind my work</h2></div><div className="education-list">{education.map(item => <article key={item.school} className="education-card"><div className="education-heading"><span className="education-icon" aria-hidden="true"><GraduationCap size={24} strokeWidth={1.8} /></span><h3>{item.degree}</h3></div><div className="education-meta"><p className="education-period">{item.period}</p><strong>GPA {item.gpa}</strong></div><span className="education-school">{item.school}</span>{item.focus && item.coursework && <><p className="education-focus"><b>Focus Areas:</b> {item.focus}</p><div className="coursework"><b>Coursework:</b>{item.coursework.map(term => <div className="course-term" key={term.term}><span>{term.term}</span><ul>{term.courses.map(course => <li key={course}>{course}</li>)}</ul></div>)}</div></>}{item.capstone && item.courseworkList && item.activities && <div className="education-details"><p><b>Capstone:</b> {item.capstone}</p><div className="coursework"><b>Coursework:</b><ul className="course-list">{item.courseworkList.map(course => <li key={course}>{course}</li>)}</ul></div><p><b>Involvement:</b> {item.activities}</p></div>}<span className="education-location">{item.location}</span></article>)}</div></section>

      <section id="skills" className="section wrap skills-section"><div className="section-intro"><p className="eyebrow">05 / Technical skills</p><h2 className="skills-title">Tools I use to <em>build</em></h2></div><div className="skills-grid">{Object.entries(techStack).map(([category, skills]) => <div key={category}><h3>{category}</h3><div className="skill-pills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <section id="awards" className="section wrap awards-section"><div className="section-intro"><p className="eyebrow">06 / Certificates & awards</p><h2 className="awards-title">Always <em>building</em></h2></div><div className="awards-list">{certifications.map((item, index) => <article key={item.title} className="award-card"><span>0{index + 1}</span><div><p>{item.issuer} · {item.period}</p><h3>{item.title}</h3><p className="award-description">{renderHighlighted(item.description)}</p></div></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="wrap contact-stage"><div className="contact-panel"><p className="eyebrow">07 / Get in touch</p><h2 className="contact-title">Good ideas start with a <em>conversation</em></h2><p className="contact-intro">Have a problem worth solving? Let&apos;s build something around it.</p><div className="contact-links"><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20} /> {profile.email} <ArrowUpRight size={22} /></a><a className="contact-phone" href={`tel:${profile.phone}`}><Phone size={19} /> +1 716 553 7650</a></div></div><ContactNetwork email={profile.email} phone={profile.phone} /><div className="contact-bottom"><p>Open to Software Engineering and AI/ML Engineering roles starting in 2027, with flexibility to relocate.<br />Based in {profile.location}.</p><div><a href={profile.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={18} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a></div></div></div></section>

      <footer className="wrap footer"><span>© 2026 Dhvani Dave</span></footer>
      </div>
      <PortfolioChat />
    </main>
  );
}
