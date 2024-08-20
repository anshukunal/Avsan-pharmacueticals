import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import Swal from "sweetalert2";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const [formValue, setFormValue] = useState({ name: "", email: "" });
  const [formError, setFormError] = useState({});
  const [issubmit, setSubmit] = useState(false);

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

    formData.append("access_key", "9fa68217-7282-4229-b384-224193723822");

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
    <div>
      <NavBar />
      <div className={styles.container}>
        <header className={styles.contactHeader}>
          <h1>Contact Us</h1>
          <p>
            Thank you for your interest in Avsan Pharmaceuticals. We value your
            feedback and inquiries. Please use the form below to get in touch
            with us, and we will respond to you as soon as possible.
          </p>
        </header>

        <section className={styles.contactForm}>
          <h2 className={styles.heading}>Contact Form</h2>
          <form onSubmit={onSubmit}>
            <label for="name">Full Name:</label>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formValue.name}
                onChange={handlevalidation}
                required
              />
              <span className="text-danger">{formError.name} </span>
            </div>

            <label for="email">Email Address:</label>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handlevalidation}
                required
              />
              <span className="text-danger">{formError.email} </span>
            </div>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <input type="submit" value="Send" />
          </form>
        </section>

        <section className={styles.contactInfo}>
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
              <AiFillFacebook />
            </li>
            <li>
              <AiFillTwitterSquare />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
            <li>
              <AiFillInstagram />
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
