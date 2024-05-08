import React, { useEffect, useState } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/ComponentIndex";

const Contactus = () => {
  const [state, handleSubmit] = useForm("xvoellqj"); 
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state.succeeded]);

  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🌏 Address</h3>
              <p>
                Milky way, earth, asia, india, meghalaya, shillong, St. Anthony's
                college, room 46.
              </p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>📩 Email</h3>
              <p>abc.example@example.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>📞 Phone</h3>
              <p>000-123-456-789</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🤵 Socials</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
            </div>
          </div>
          <div className={formStyle.contactus_box_box_right}>
            <form onSubmit={handleSubmit}>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Username</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className={formStyle.Form_box_input_userName}
                />
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" name="email" placeholder="Email*" />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Something about yourself in few words"
                ></textarea>
              </div>

              {submitted ? <p>Thanks for reaching out!</p> : <Button
                btnName="Send Message"
                handleClick={() => { }}
                classStyle={Style.button}
              />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
