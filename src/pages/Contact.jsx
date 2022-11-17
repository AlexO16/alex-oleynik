import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sub, setSub] = useState('');
    const [msg, setMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'sub') {
            setSub(value);
        } else if (name === 'msg') {
            setMsg(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name || !sub || !msg) {
            setErrMsg('Please fill out the form correctly');

            return;
        }

        setName('');
        setEmail('');
        setSub('');
        setMsg('');
        setErrMsg('');
    };

    return (
        <>
            <div className="header">
                <h1>Contact Me</h1>
                <p>Text</p>
            </div>

            <form className="form">
                <div>Email
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                </div>
                <div>Name
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                </div>
                <div>Subject
                <input
                    value={sub}
                    name="sub"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Subject"
                />
                </div>
                <div>Message
                <input
                    value={msg}
                    name="msg"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                </div>

                <button type="button" onClick={handleFormSubmit}>Send</button>
            </form>

            {errMsg && (
                <div>
                    <p className="error-text">{errMsg}</p>
                </div>
            )}
        </>
    )
};

export default Contact