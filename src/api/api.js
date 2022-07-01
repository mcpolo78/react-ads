

 axios.get('http://marcchesnel.ide.3wa.io:9001/ads/all')
            .then((response)=>{
                
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })