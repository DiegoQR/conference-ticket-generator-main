import React from 'react';

import IconInfo from '../../public/assets/images/icon-info.svg?react';

function Input({ children, name, error, ...rest }) {


    return (<>
        <label htmlFor={name} className='flex flex-col gap-3 text-2xl font-bold'>
                <span>{children}</span>
                <input 
                    id={name} 
                    name={name} 
                    className={`autofill-input w-full border-1 ${error ? 'border-orange-500' : 'border-neutral-300'} rounded-lg p-2 bg-neutral-300/20 hover:bg-neutral-300/40`} 
                    {...rest}
                    />
                <output>
                    {error && 
                        <>
                            <IconInfo className='inline-block w-5 h-5 mr-2 stroke-orange-500'/>
                            <span className='text-orange-500 text-sm '>{error}</span>
                        </>
                    }
                    
                </output>
        </label>
        
    </>);
}

export default Input;