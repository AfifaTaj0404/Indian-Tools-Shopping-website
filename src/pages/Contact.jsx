function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>

      <p className="page-subtitle">
        Have questions or need help? Our team at Indian Tools is always ready to assist you.
      </p>

      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> ayaz@indiantools.com</p>
          <p><strong>Phone:</strong> +91 9945143635</p>
          <p><strong>Address:</strong> Chitradurga, Bangalore, India</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-card">
          <h2>Send Us a Message</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;


