import React, { useState } from "react";

import axiosClient from "./axios-client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import Navbar from "../components/navbar";
import { useStateContext } from "../context/contextprovider";

function Login() {

    const {setUser, setToken} = useStateContext();


    const [username, usernameRef] = useState("");
    const [password, passwordRef] = useState("");

    const handleUsername = (e) => {
        e.preventDefault();
        usernameRef(e.target.value);
    };
    const handlePassword = (e) => {
        e.preventDefault();
        passwordRef(e.target.value);
    };

    const loginAccount = (e) => {
        e.preventDefault();

        const cred = {
            username,
            password,
        };

        // console.log(cred);

        axiosClient.post('/login', cred)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status === 422) {
                console.log(response.data.errors);
            }
        })
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="user-login">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            AdDUNET Username
                                            <span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={handleUsername}
                                            // placeholder="name@example.com"
                                        />

                                        <Form.Label htmlFor="inputPassword5">
                                            Password
                                            <span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="inputPassword5"
                                            onChange={handlePassword}
                                            aria-describedby="passwordHelpBlock"
                                        />
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        id="button-login"
                                        onClick={loginAccount}
                                        variant="primary"
                                    >
                                        Log in
                                    </Button>{" "}
                                </Form>
                            </div>
                        </Col>
                        <Col>
                            <div className="privacy-notice">
                                <h4>Privacy Notice</h4>
                                <p>
                                    Welcome to the Ateneo de Davao University!
                                    Your personal information as a student, or
                                    employee, may be processed manually or by
                                    automated means, upon your request or
                                    consent, or upon the lawful order of any
                                    competent authority, or by virtue of the
                                    mandate of the University, as an employer,
                                    and as an educational institution. Their
                                    disclosure and sharing shall only be upon
                                    your consent, or as required by law, with
                                    relevant private or public persons, offices,
                                    or entities. For the students, the privacy
                                    of academic and other relevant personal
                                    information, which forms part of their
                                    permanent records, is protected by the
                                    University from the moment of admission.
                                    Incumbent students may access their
                                    information via the secured portals
                                    dedicated for this particular purpose. On
                                    the other hand, the personal information of
                                    the employees, such as their employment
                                    records and credentials, may be kept by the
                                    University HRMDO from the moment of their
                                    submission, and during their engagement with
                                    the University, unless otherwise required by
                                    law. The University may likewise collect and
                                    process personal information of third
                                    parties who may enter its campuses and
                                    facilities, such as video recordings, and
                                    other basic information for records purposes
                                    and security. As our data subject, you may
                                    avail of the guarantees provided by Section
                                    16 of RA 10173, or the Data Privacy Act,
                                    which includes the rights to be informed, to
                                    object, access, rectify, erasure or
                                    blocking, data portability, file a
                                    complaint, and to the payment of damages.
                                    For more information, please visit: THE
                                    UNIVERSITY DATA PROTECTION OFFICER Ateneo de
                                    Davao University Lower ground floor, Finster
                                    Building, Jacinto Street, Davao City (082)
                                    221-2411, Local 8514
                                    dataprotection@addu.edu.ph
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;
