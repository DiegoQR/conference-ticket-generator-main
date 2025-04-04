import React from 'react';

function Button({children, ...rest}) {
    return (<>
        <button className='bg-orange-500 text-neutral-900 font-extrabold text-2xl py-4 px-4 rounded-xl w-full mb-30' {...rest}>
            {children}
        </button>
    </>);
}

export default Button;