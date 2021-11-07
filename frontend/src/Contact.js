import React, { useRef, useState } from "react";
import { ArrowRight, Reddit } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Checkmark } from "react-checkmark";

const Contact = () => {
  const form = useRef();

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isFailed, setisFailed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSending(true);
    setIsDisabled(true);
    emailjs
      .sendForm(
        "service_8shico7",
        "template_e9yq7c9",
        form.current,
        "user_14Adg2wdRXHSoBLbvlPeZ"
      )
      .then(
        (result) => {
          setIsSuccessful(true);
          setIsSending(false);
          reset();
        },
        (error) => {
          setIsSuccessful(false);
          setIsSending(false);
          setisFailed(true);
        }
      );
  };

  return (
    <div className="wrapper">
      <div className="contact-container">
        <p className="contact-sub-title">
          <span style={{ paddingRight: 10 }}>Contact</span>
          <ArrowRight size={15} />
        </p>
        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
          <div className="name-input-container">
            <div className="input-container fname-input">
              <label>First Name</label>
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                {...register("fName", { required: true })}
              />
              <p className="error-message">
                {errors.fName && "* required field"}
              </p>
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                {...register("lName", { required: true })}
              />
              <p className="error-message">
                {errors.lName && "* required field"}
              </p>
            </div>
          </div>
          <div className="input-container">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            <p className="error-message">
              {errors.phone && "* required field"}
            </p>
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <p className="error-message">
              {errors.email && "* required field"}
            </p>
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              {...register("message", { required: true })}
            />
            <p className="error-message">
              {errors.message && "* required field"}
            </p>
          </div>
          <div className="status-button-container">
            <button
              disabled={isDisabled}
              type="submit"
              className={isSuccessful ? "is-successful" : ""}
            >
              {isSuccessful ? (
                <Checkmark size={30} color="#3ccf3c" />
              ) : isSending ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                "Send Message"
              )}
            </button>
            <p
              className="email-status"
              style={
                isSuccessful && isDisabled
                  ? { opacity: 1, zIndex: 1 }
                  : isFailed && isDisabled
                  ? { opacity: 1, zIndex: 1, paddingLeft: 30 }
                  : { opacity: 0, zIndex: 0 }
              }
            >
              {isSuccessful ? "Your message has been sent" : "Failed to send"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
