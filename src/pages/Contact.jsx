import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import Swal from "sweetalert2";
// import { AiFillFacebook } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formError, setFormError] = useState({});
  const [issubmit, setSubmit] = useState(false);
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const { clientX, clientY, target } = event;
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormError(validationform(formValue));

    const formData = new FormData(event.target);

    formData.append("access_key", "3b75fc45-b3da-4710-bb2c-988de664386e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
    setFormValue.name("");
    setFormValue.email("");
  };

  const validationform = (value) => {
    const errors = {};

    if (!value.name) {
      errors.name = "Please Enter Name";
    }

    if (!value.email) {
      errors.email = "Please Enter Email";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Enter Valid Email";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && issubmit) {
      console.log(formValue);
    }
  }, [formError, formValue, issubmit]);

  return (
    <div className={styles.contact}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.contactImgBox}></div>
        <div className={styles.contactContent}>
          <header className={styles.contactHeader}>
            <h1>Contact Us</h1>
          </header>

          <section className={styles.contactForm}>
            <form onSubmit={onSubmit}>
              <div className={styles.nameContactBox}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formValue.name}
                    onChange={handlevalidation}
                    required
                  />
                  <span className="text-danger">{formError.name} </span>
                </div>

                <div className={styles.marginLeft}>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Contact Number"
                    value={formValue.phone}
                    onChange={handlevalidation}
                    required
                  />
                  <span className="text-danger">{formError.phone} </span>
                </div>
              </div>

              <div className={styles.Email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formValue.email}
                  onChange={handlevalidation}
                  required
                />
                <span className="text-danger">{formError.email} </span>
              </div>

              <div className={styles.messageBox}>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className={styles.sendButtonBox}>
                <button className={styles.sendButton} onClick={createRipple}>
                  Send
                  {ripples.map(({ x, y, id }) => (
                    <span
                      key={id}
                      className={styles.ripple}
                      style={{ left: x, top: y }}
                    ></span>
                  ))}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

{
  /* <section className={styles.contactInfo}>
          <h2 className={styles.heading}>Contact Information</h2>
          <p>
            <strong>Avsan Pharmaceuticals</strong>
          </p>
          <p>
            Address: 10th Floor, Roots Tower, 1016, Nirman Vihar, Delhi - 110092
          </p>
          <p>Phone: 011-35679982</p>
          <p>
            Email: <a href="avsanpharma@gmail.com">avsanpharma@gmail.com</a>
          </p>
        </section>

        <section className={styles.socialMedia}>
          <h2 className={styles.heading}>Follow Us</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61550048401900"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/av-pharma/" target="_blank">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/avsanpharmaceuticals?utm_source=qr&igsh=cmNkNDhsd2k0cTRi"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </section> */
}
