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
            <div className="contactMe">
                <h1>Contact Me</h1>
            </div>

            <form className="form">
                <div className="form-group">
                    <div>Email
                        <br>
                        </br>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <br>
                    </br>
                    <div>Name
                        <br>
                        </br>
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <br>
                    </br>
                    <div>Subject
                        <br>
                        </br>
                        <input
                            value={sub}
                            name="sub"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Subject"
                        />
                    </div>
                    <br>
                    </br>
                    <div>Message
                        <br>
                        </br>
                        <textarea
                            value={msg}
                            name="msg"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Message"
                        />
                    </div>
                    <br>
                    </br>
                    <button type="button" onClick={handleFormSubmit}>Send</button>
                    {errMsg && (
                        <div>
                            <p className="error-text">{errMsg}</p>
                        </div>
                    )}
                </div>
            </form>

        </>
    )
};

export default Contact