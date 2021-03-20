import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

// styled components
const Form = styled.form`
    max-width: 75vw;
    
    @media only screen and (min-width: 768px) {
        max-width: 30em;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;  
`;
const Heading = styled.h2`
    margin: 0;
`;
const Label = styled.label`
    margin-bottom: 0.25em;
`;
const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem;
    line-height: 1.25;
    border-width: 1px;
    border-radius: 0.25rem;
    border-color: #4a5568;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border-color: #4a5568;
`;
const Textarea = styled.textarea`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border-color: #4a5568;
`;
const Button = styled.button`
    diplay: block;
    padding: 0.5rem;
`;
const ErrorText = styled.p``;
const SuccessText = styled.p``;

// markup
const Contact = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        topic: '',
        subject: '',
        message: '',
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const recaptchaRef = useRef();

    // update input on change
    const handleChange = ev => {
        ev.persist();
        setErrorMessage('');
        setFormValues(currentValues => ({
            ...currentValues,
            [ev.target.name]: ev.target.value,
        }));
    };

    // error check & submit form w/ lambda function
    const handleSubmit = async ev => {
        ev.preventDefault();
        const token = await recaptchaRef.current.getValue();
        const { name, email, topic, subject, message } = formValues;

        try {
            if (token.length !== 0) {
                setIsProcessing(true);

                // make lambda function call
            }
        } catch (error) {
            setIsProcessing(false);
            setIsSuccess(false);
            setErrorMessage(`Failed to send message: ${error.message}`)
        }
    };

    // handle recaptcha change
    const handleRecaptcha = (value) => {
        console.log(`Captcha value: ${value}`);
    };
 
    return (
        <Form id="contact-form">
            <Row>
                <Heading>Send me a message</Heading>
                <p>Tell me about your project aspirations or we can meet over coffee <span role='img' aria-label='Coffee emoji'>
                ☕️
                </span></p>
                
            </Row>
            <Row>
                <Label htmlFor='name-input'>Your name</Label>
                <Input type="text" id="name-input" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} required />
            </Row>
            <Row>
                <Label htmlFor='email-input'>Your email (so I can reply to you) </Label>
                <Input type="text" id="email-input" name="email" placeholder="jon.appleseed@gmail.com" value={formValues.email} onChange={handleChange} required />
            </Row>
            <Row>
                <Label htmlFor="topic-input">Topic</Label>
                <Select>
                    <option value="">Please select an option</option>
                    <option value="static">Static website</option>
                    <option value="dynamic">Dynamic website</option>
                    <option value="mobile">Mobile app</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                </Select>
            </Row>
            <Row>
                <Label htmlFor='subject-input'>Subject</Label>
                <Input type="text" id="subject-input" name="subject" placeholder="Let me know how I can help you" value={formValues.subject} onChange={handleChange} required />
            </Row>
            <Row>
                <Label htmlFor='message'>Message</Label>
                <Textarea type="text" id="message-input" name="message" placeholder="Provide as many details as you can about your project" rows="8" value={formValues.message} onChange={handleChange} required />
            </Row>
            <Row>
                <Button>
                    {isProcessing ? 'Processing...' : 'Send Message'}
                </Button>
            </Row>
            {/* <Row>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.GATSBY_SITE_KEY}
                    onChange={handleRecaptcha}
                    size="normal"
                />
            </Row> */}
            {!!isSuccess && (
              <Row>
                  <SuccessText>Message sent!</SuccessText>
              </Row>
            )}
            {!!errorMessage && (
              <Row>
                  <ErrorText>Error: {errorMessage}</ErrorText>
              </Row>
            )}
        </Form>
    );
};

export default Contact;