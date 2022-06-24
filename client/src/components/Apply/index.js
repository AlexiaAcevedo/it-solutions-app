import React from 'react';
import { useState } from 'react';
import {
    Container,
    FormWrap,
    Form,
    FormH1,
    FormSuccessMessage,
    FormErrorMessage,
    FormField,
    FormInput,
    FormButton
} from './ApplyElements';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Apply = () => {
    // params and navigate hooks
    let { id } = useParams();
    let navigate = useNavigate();
    
    // use states for form data and conditionals
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [hasError, setHasError] = useState(false);

    const submitForm = async () => {
        let formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            opening_id: id
        };
        await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/add`, formData)
        .then(() => {
            setSuccessful(true);
            setTimeout(() => navigate("/"), 3000);
        })
        .catch(() => {
            setHasError(true);
            setTimeout(() => navigate(`/apply/${id}`), 3000);
        });
    };

    return (
        <>
            <Navbar />
            <Container>
                <FormWrap>
                    <Form>
                        <FormH1>Apply Now</FormH1>
                        {
                            successful ? <FormSuccessMessage>Your application was successfully submitted!</FormSuccessMessage> : null
                        }
                        {
                            hasError ? <FormErrorMessage>There was a problem submitting your appliction. Please try again.</FormErrorMessage> : null
                        }
                        <FormField>
                            <FormInput type='text' name='first_name' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required></FormInput>
                        </FormField>
                        <FormField>
                            <FormInput type='text' name='last_name' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required></FormInput>
                        </FormField>
                        <FormField>
                            <FormInput type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></FormInput>
                        </FormField>
                        <FormButton type='submit' onClick={submitForm}>Submit</FormButton>
                    </Form>
                </FormWrap>
            </Container>
        </>
    )
}

export default Apply