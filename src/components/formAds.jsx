import React, {useState, useEffect, createRef} from 'react'
import axios from 'axios'

const Form = (props) =>{
    
    const fileInput = createRef()
    
   return (
            <form
                onSubmit={(e)=>{
                  e.preventDefault()
                  props.handleSubmit()
                }}
            >
            
            <input type ="text"
                placeholder="titre"
                
                value={props.title}
                
                onChange={(e)=>{
                    props.onChangeTitle(e.currentTarget.value)  
                }}
                
            />
            
            <textarea
            placeholder="description..."
            value={props.contents}
            
             onChange={(e)=>{
                    props.onChangeContents(e.currentTarget.value)  
                }}
            >
            {props.contents}
            </textarea>
            
            <input type="file"
                ref={fileInput}
                onChange={(e)=>{
                    console.log(fileInput.current.files[0])
                    props.onChangeFile(fileInput.current.files[0])        
                }}
            />
            
            <button>
                envoyer
            </button>
            
            </form>
    )
}

export default Form