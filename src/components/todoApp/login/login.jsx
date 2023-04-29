import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, FormText, Label, Input, Button, Container } from 'reactstrap'

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Credentials Submitted Successfully!", credentials);
        try {
            const { data: { user, token } } = await axios.post("http://localhost:4000/api/user/login", { ...credentials })
            localStorage.setItem("userData", JSON.stringify(user))
            localStorage.setItem("auth_token", token)
            navigate("/")
        } catch (error) {
            alert(error.response.data.message)
            console.log("Failed to Login User:", error);
        }
    }

    const handleChange = (event) => {
        setCredentials((preValue) => ({ ...preValue, [event.target.name]: event.target.value }))
    }

    return (<>
        <Container className='vh-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>Login</h1>
            <div className='w-50 border border-2 border-dark rounded p-3'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="email placeholder"
                            type="email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormText>
                            Don't have a account?{" "}
                            <Link to="/signup">Sign Up</Link>
                        </FormText>
                    </FormGroup>
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    </>);
}

export default Login;