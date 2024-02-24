


async function Get(){

    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // console.log(data[0].image)
    

        data.forEach((id)=>{

            const home = document.querySelector('.hoho')
            home.style.backgroundColor = "black"
    
            const armor = document.querySelector('.major')
    
            const child = document.createElement('div');
            child.style.backgroundColor = 'white'
            child.style.height = "600px"
            child.style.width = "25%"
            child.style.marginTop = "100px"
            
            armor.appendChild(child)
    
            const Image = document.createElement('img')
            Image.src = data[id].image;
            Image.style.height = "400px"
            Image.style.width = "100%"
    
            child.appendChild(Image)
    
            const content = document.createElement('h1')
            content.innerText = data[item].title
            content.style.fontSize ="20px"
            content.style.marginLeft = "12px"
            
            child.appendChild(content)
    
            const price = document.createElement('h1')
    
            price.innerHTML =data[item].price
            price.style.marginLeft ="12PX"
    
            child.appendChild(price)


        })
        // console.log(armor)
    


    }
    catch(error){
    }
 
}

Get();


