import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      emailjs
        .send(
          'service_48wtxge',
          'template_dn1sato',
          {
            from_name: form.name,
            to_name: 'Pulse Grow',
            from_email: form.email,
            to_email: 'pulsegroww@gmail.com',
            subject: form.subject,
            message: form.message,
          },
          'eomuFLsdpwSxvHZ2s'
        )
        .then(
          () => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert('Ahh, something went wrong. Please try again.');
          }
        );
    } else {
      setLoading(false);
      console.error('Form reference is null');
      alert('Form reference is null. Please check the formRef setup.');
    }
  };

  return (
    <section className="contact section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+919306515524">+91 9306515524</a>
                <a href="tel:+917508995151">+91 75089 95151</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Patiala, Punjab</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <a href='mailto:pulsegroww@gmail.com' >pulsegroww@gmail.com</a>
              </div>
              {/* <div className="social-icon-circle mt-50">
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
                <a href="#0"><i className="fab fa-behance"></i></a>
                <a href="#0"><i className="fab fa-instagram"></i></a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let's Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        value={form.message}
                        onChange={handleChange}
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-full butn-bord radius-30">
                        {loading ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
