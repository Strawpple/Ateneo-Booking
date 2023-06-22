import {useRef, React} from "react";

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        console.log(payload)

    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input ref={usernameRef}/>
                    <input ref={passwordRef} />
                    
                    <Button variant="primary">Primary</Button>{" "}
                </form>
            </div>
        </>
    );
}

export default Login;
