export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <p>Email: patilkartik890@gmail.com</p>
      <a className="github" href="https://github.com/Cygnys">GitHub</a>
      <p >LinkedIn: linkedin.com/in/kartik-p-428534203</p>

      <a
        href="./public/Kartik Patil Resume2 (4).pdf"
        download
        className="btn"
      >
        Download Resume
      </a>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>

    
  );
}
