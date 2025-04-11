import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Input from './Input';
import Button from './Button';
import InputDragAndDrop from './InputDragAndDrop';

function Form() {
    const navigate = useNavigate();
    const [dataform, setDataFrom] = useState({
        fullName: '',
        emailAddress: '',
        githubUsername: '',
        avatar: null
    });
    const [errors, setErrors] = useState({
        fullName: null,
        emailAddress: null,
        githubUsername: null,
        avatar: null
    });

    const isFormValid = () => {
        const newErrors = {
            fullName: '',
            emailAddress: '',
            githubUsername: '',
            avatar: null
        };

        let isValid = true;

        // Validate full name
        if (dataform.fullName === '')  {
            newErrors.fullName = 'Full name is required';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(dataform.emailAddress)) {
            newErrors.emailAddress = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate GitHub username
        if (dataform.githubUsername === '') {
            newErrors.githubUsername = 'GitHub username is required';
            isValid = false;
        }

        // Validate avatar
        if (!dataform.avatar) {
            newErrors.avatar = 'Please upload an avatar';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = isFormValid();

        if (isValid) {
            navigate('/ticket', { state: dataform });
        }
        
    }

    return (<>
        <form className='flex flex-col gap-5 md:mx-40' onSubmit={onSubmit}>
            <InputDragAndDrop 
                name="drag-and-drop-input" 
                accept="image/png, image/jpg"
                onFileUpdate={(file) => setDataFrom({...dataform, avatar: file})}
                errorMessage={errors.avatar}
            >
                Upload Avatar
            </InputDragAndDrop>
            <Input 
                name='full-name' 
                type="text" 
                autoComplete="name" 
                enterKeyHint="next"
                value={dataform.fullName}
                onChange={(e) => setDataFrom({...dataform, fullName: e.target.value})}
                error={errors.fullName}
            >
                Full Name
            </Input>
            <Input 
                name='email-address' 
                type="text" 
                placeholder="example@email.com" 
                autoComplete="email" 
                enterKeyHint="next"
                value={dataform.emailAddress}
                onChange={(e) => setDataFrom({...dataform, emailAddress: e.target.value})}
                error={errors.emailAddress}
            >
                Email Address
            </Input>
            <Input 
                name='github-username' 
                type="text" 
                placeholder="@yourusername" 
                autoComplete="username" 
                enterKeyHint="next"
                value={dataform.githubUsername}
                onChange={(e) => setDataFrom({...dataform, githubUsername: e.target.value})}
                error={errors.githubUsername}
            >
                GitHub Username
            </Input>
            <Button type="submit">Generate My Ticket</Button>
        </form>
    </>);
}

export default Form;