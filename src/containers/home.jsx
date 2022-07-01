import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = (props) =>{
    
    const [ads, SetAds] = useState([])
    const img = "https://react-annonces.herokuapp.com/public/images/"
    
    useEffect(()=>{
        
        axios.get('https://react-annonces.herokuapp.com/ads/all')
            .then((response)=>{
                
                console.log(response.data.res)
                SetAds(response.data.res)
                
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    
    return (
        <section>
            <h1>HOME</h1>
            
             {ads.length > 0 && <div>
                 {ads.map((element)=>{
                 
                    return (
                        <div key={element.Id}>
                            <h3>{element.Title}</h3>
                            <img src={`https://react-annonces.herokuapp.com/public/images/${element.Url}`} />
                        </div>
                    )
                       
                 })}
                 </div>
             }
             
        </section>
    )
}

export default Home