import React from 'react';

function ImputDragAndDrop({children, accept, name, onDrop, onDragOver, ...rest}) {
    return (<>
        <label htmlFor={name} className='flex flex-col gap-5 text-2xl font-bold'>
            <span>{children}</span>
            <div id="drag-and-drop-zone" onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)} className='w-full h-40 border-2 border-dashed border-neutral-600 rounded-lg 
            flex flex-col gap-3 text-center items-center justify-center bg-neutral-300/20 hover:bg-neutral-300/40'>
                <img src='./assets/images/icon-upload.svg' alt='Upload Icon' 
                    className='p-2 w-16 aspect-square rounded-xl bg-neutral-300/20'/>
                <span className='text-xl text-neutral-400'>Drag and drop or click to upload</span>
                <input type="file" {...rest} className='hidden' accept={accept} id={name} name={name}/>
            </div>
        </label>
        <output className='text-neutral-600 text-sm font-bold flex items-center gap-2'>
            <img src="./assets/images/icon-info.svg" alt="Info Icon" className='inline-block w-5 h-5 mr-2'/>
            <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </output>
    </>);
}

export default ImputDragAndDrop;