import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Input from './Input';
import Button from './Button';
import InuptDragAndDrop from './InputDragAndDrop';

function Form() {
    const navigate = useNavigate();
    const [dataform, setDataFrom] = useState({
        fullName: '',
        emailAddress: '',
        githubUsername: '',
        avatar: null
    });

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/ticket', { state: dataform });
    }

    return (<>
        <form className='flex flex-col gap-5' onSubmit={onSubmit}>
            <InuptDragAndDrop 
                name="drag-and-drop-input" 
                accept="image/png, image/jpg"
                onFileUpdate={(file) => setDataFrom({...dataform, avatar: file})}
            >
                Upload Avatar
            </InuptDragAndDrop>
            <Input 
                name='full-name' 
                type="text" 
                autoComplete="name" 
                enterKeyHint="next"
                value={dataform.fullName}
                onChange={(e) => setDataFrom({...dataform, fullName: e.target.value})}
            >
                Full Name
            </Input>
            <Input 
                name='email-address' 
                type="email" 
                placeholder="example@email.com" 
                autoComplete="email" 
                enterKeyHint="next"
                value={dataform.emailAddress}
                onChange={(e) => setDataFrom({...dataform, emailAddress: e.target.value})}
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
            >
                GitHub Username
            </Input>
            <Button type="submit">Generate My Ticket</Button>
        </form>
    </>);
}

export default Form;