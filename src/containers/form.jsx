import React, {useState, useEffect} from 'react'
import FormAds from '../components/formAds'
import {Navigate} from 'react-router-dom'


const Form = (props)=>{
    
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [selectedFile, setFile] = useState(null)
    
    const saveAd = (datas) =>{
        
    }
    
    const handleSubmit = ()=>{
        let ad = {
            title: title,
            contents: contents,
            selectedFile: selectedFile
        }
        console.log(ad)
    }
    
    return (
        <section>
            <h1>Ajouter une annonce</h1>
            <FormAds
                title={title}
                contents={contents}
                onChangeTitle={(title)=>{
                    setTitle(title)
                }}
                onChangeContents={(contents)=>{
                    setContents(contents)
                }}
                onChangeFile={(file)=>{
                    setFile(file)
                }}
                handleSubmit={handleSubmit}
            />
            
        </section>
    )
}

export default Form