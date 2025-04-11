import React, { useState, useCallback, useRef } from 'react';

import IconInfo from '../../public/assets/images/icon-info.svg?react';
import IconUpload from '../../public/assets/images/icon-upload.svg?react';
 
function InputDragAndDrop({children, accept, name, errorMessage, onFileUpdate, ...rest}) {
    const [isDragging, setIsDragging] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState(errorMessage);
    const fileInputRef = useRef(null);

    const MAX_FILE_SIZE = 500 * 1024; // 500KB in bytes
    const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    }, []);

    const handleFileInput = useCallback((e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    }, []);

    const triggerFileInput = useCallback(() => {
        fileInputRef.current.click();
    }, []);

    const handleFile = useCallback((file) => {
        setError(null);
        setPreviewUrl(null);
    
        if (!ACCEPTED_TYPES.includes(file.type)) {
          setError('Only JPG/PNG images are allowed.');
          return;
        }
    
        if (file.size > MAX_FILE_SIZE) {
          setError('File too large. Please upload a photo under 500KB.');
          return;
        }
    
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
    
        if (onFileUpdate) {
            onFileUpdate(file);
        }
      }, [onFileUpdate]);

    return (<>
        <label htmlFor={name} className='flex flex-col gap-5 text-2xl font-bold'>
            <span>{children}</span>
            <div id="drag-and-drop-zone" 
                className={`w-full h-50 border-2 border-dashed border-neutral-600 rounded-lg flex flex-col gap-3 text-center items-center justify-center bg-neutral-300/20 ${previewUrl ? '' : 'hover:bg-neutral-300/40'} ${isDragging ? 'bg-neutral-300/40' : ''}`}
                onDragEnter={handleDragEnter} 
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop} 
            >
                {
                    previewUrl ? 
                    <>
                        <img src={previewUrl} alt="Preview" className='w-20 aspect-square rounded-lg border-2 border-neutral-500 mb-5'/>
                        <div className='flex gap-5'>
                            <button onClick={() => setPreviewUrl(null)} className='bg-neutral-300/10 rounded-xl text-lg underline font-light px-3 py-1 hover:bg-neutral-300/40'>Remove Image</button>
                            <button onClick={triggerFileInput} className='bg-neutral-300/10 rounded-xl text-lg font-light px-3 py-1 hover:bg-neutral-300/40'>Change Image</button>
                        </div>
                    </>
                    :
                    <>
                        <IconUpload width={64} height={64} className='p-2 aspect-square rounded-xl bg-neutral-300/20'/>
                        <span className='text-xl text-neutral-400'>Drag and drop or click to upload</span>
                        <input type="file" className='hidden' id={name} name={name} ref={fileInputRef} onChange={handleFileInput} onClick={triggerFileInput} accept={accept} {...rest}/>
                    </>   
                }
            </div>
        </label>
        <output className='text-neutral-600 text-sm font-bold flex items-center gap-2'>
            {
                error ? 
                <>
                    <IconInfo className='inline-block w-5 h-5 mr-2 stroke-orange-500'/>
                    <span className='text-orange-500'>{error}</span>
                </> :
                <>
                    <IconInfo className='inline-block w-5 h-5 mr-2'/>
                    <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
                </>
            }
            
        </output>
    </>);
}

export default InputDragAndDrop;