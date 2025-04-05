import React, { useState, useEffect, use } from 'react';
import Input from './Input';
import Button from './Button';
import InuptDragAndDrop from './InputDragAndDrop';

function Form() {
    const [dataform, setDataFrom] = useState({
        fullName: '',
        emailAddress: '',
        githubUsername: '',
        avatar: null
    });

    function onDrop(e) {
        console.log("File dropped!")
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.match('image.jpg, image.png')) {
            setDataFrom({...dataform, avatar: URL.createObjectURL(file)});
        }
    }
    return (<>
        <form className='flex flex-col gap-5'>
            <InuptDragAndDrop 
                name="drag-and-drop-input" 
                accept="image/png, image/jpg"
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
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