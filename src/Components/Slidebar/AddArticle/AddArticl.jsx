import { Box, TextField, TextareaAutosize, IconButton, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageUploading from "react-images-uploading";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import { info } from '../../../redux/addArticle'

export default function AddArticl() {
    const dispatch = useDispatch()
    function sendInformation() {
        dispatch(info({payload:{information}}))
    }
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const [information, setInformation] = useState({ h1: 'لطفا تیتر را وارد کنید', imageSlide: '', textMain: '' })
    return (
        <Box component='div' className='flex flex-col h-full'>
            <TextField
                id="filled-required"
                label="تیتر"
                defaultValue="تیتر را وارد کنید"
                variant="filled"
                className='h-15'
                onChange={(e) => setInformation({ ...information, h1: e.target.value })}
            />
            <Box component='div' className='flex flex-row mx-4 justify-between h-full mt-2 '>
                <Box component='div' className='flex flex-col justify-around border-l-2 border-[#e1e1e1] pl-4'>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (
                            // write your building UI
                            <div className="upload__image-wrapper flex flex-col items-center">
                                <IconButton
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <UploadFileIcon />
                                </IconButton>
                                &nbsp;
                                <IconButton onClick={onImageRemoveAll}><DeleteIcon /></IconButton>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image.data_url} alt="" width="100" />
                                        <div className="image-item__btn-wrapper flex flex-col items-center">
                                            <button onClick={() => onImageUpdate(index)}>Update</button>
                                            <button onClick={() => onImageRemove(index)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </ImageUploading>
                    <TextField
                        id="filled-required"
                        label="لینک تصویر"
                        placeholder="لینک را کپی کنید"
                        variant="filled"
                        onChange={(e) => setInformation({ ...information, imageSlide: e.target.value })}

                    />
                </Box>

                <TextareaAutosize className='basis-11/12 px-2 h-4/5'
                    aria-label="empty textarea"
                    placeholder="مقاله را بنویسید"
                    onChange={(e) => setInformation({ ...information, textMain: e.target.value })}
                />
            </Box>
            <Button
                onClick={sendInformation}
                sx={{
                    backgroundColor: '#1976d2', color: 'white',
                    '&:hover': {
                        backgroundColor: '#008000		',
                    },
                }}>
                انتشار
            </Button>
        </Box>
    )
};

