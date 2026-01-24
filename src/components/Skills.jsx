export default function Skills() {
  const skills = [
    "Python", "JavaScript", "React",
    "Machine Learning", "Blockchain",
    "MySQL", "Streamlit"
  ];

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <span key={i} className="skill-chip">{skill}</span>
        ))}
      </div>
    </section>
  );
}
