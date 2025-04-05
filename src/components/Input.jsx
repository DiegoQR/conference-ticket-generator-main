import React from 'react';

function Input(props) {
    const { children, name, ...rest } = props;
    return (<>
        <label htmlFor={name} className='flex flex-col gap-3 text-2xl font-bold'>
                <span>{children}</span>
                <input id={name} name={name} 
                    className='w-full border-1 border-neutral-300 rounded-lg p-2 bg-neutral-300/20 hover:bg-neutral-300/40' 
                    {...rest}
                    />
        </label>
    </>);
}

export default Input;