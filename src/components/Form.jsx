import React from 'react';
import Input from './Input';
import Button from './Button';
import InuptDragAndDrop from './InputDragAndDrop';

function Form() {
    return (<>
        <form className='flex flex-col gap-5'>
            <InuptDragAndDrop accept="image/png, image/jpg">Upload Avatar</InuptDragAndDrop>
            <Input name='full-name' type="text" autocomplete="name" enterkeyhint="next">Full Name</Input>
            <Input name='email-address' type="email" placeholder="example@email.com" autocomplete="email" enterkeyhint="next">Email Address</Input>
            <Input name='github-username' type="text" placeholder="@yourusername" autocomplete="username" enterkeyhint="next">GitHub Username</Input>
            <Button type="submit">Generate My Ticket</Button>
        </form>
    </>);
}

export default Form;