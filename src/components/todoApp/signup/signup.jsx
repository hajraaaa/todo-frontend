import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Container, FormText } from 'reactstrap'

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Credentials Submitted Successfully!", credentials);
        try {
            await axios.post("http://localhost:4000/api/user/register", { ...credentials })
            navigate("/login")
        } catch (error) {
            console.log("Failed to Login User:", error);
        }
    }

    const handleChange = (event) => {
        setCredentials((preValue) => ({ ...preValue, [event.target.name]: event.target.value }))
    }

    return (<>
        <Container className='vh-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>SignUp</h1>
            <div className='w-50 border border-2 border-dark rounded p-3'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleName">
                            Name
                        </Label>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="name placeholder"
                            type="text"
                            value={credentials.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
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
                            Already have a account?{" "}
                            <Link to="/login">Log In</Link>
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

export default SignUp;