import React, { useState } from 'react';
import image from './constant';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

function App() {
  const [email, setEmail] = useState("")
  const [isShowError, setIsShowError] = useState(false)

  const handleSubmitForm = (e: any) => {
    e.preventDefault()
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
    !regex.test(email) ? setIsShowError(true) : setIsShowError(false)
  }

  const handleChangeInput = (e: any) => {
    setEmail(e.target.value)
  }

  return (
    <main className="wrapper">
      <header className="header">
        <img src={image.logo} alt="ping logo" className="header__logo" />
        <h1 className="mb-1" ><span className="bold-300 fs-xxl gray">We are launching</span> soon!</h1>
        <p>Subscribe and get notified</p>
      </header>
      <div className="main">
        <form className="form" onSubmit={handleSubmitForm}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your email address"
              onChange={handleChangeInput}
              value={email}
              aria-disabled={isShowError ? true : false}
            />
            {
              isShowError &&
              <p className="red fs-sm text-center mt-1 italic">Please provide a valid email address</p>
            }
          </div>
          <button type="submit" className="btn">
            Notify Me
          </button>
        </form>
        <img src={image.dashboard} alt="illustration dashboard" />
      </div>
      <footer className="footer">
        <div className="footer__socials">
          <FaFacebookF className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiOutlineInstagram className="icon" />
        </div>
        <p className="footer__copyright">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>

    </main>
  );
}

export default App;
