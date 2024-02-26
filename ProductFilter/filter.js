


async function Get(){

    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);


        const numberOfElements = Object.keys(data).length;
        console.log(numberOfElements)


    //    const Data = Array.from(data)
    //     console.log(Data)


            const home = document.querySelector('.hoho')
            home.style.backgroundColor = "black"
            
            const armor = document.querySelector('.major')
            armor.style.display = 'grid';
            armor.style.gridTemplateColumns = 'repeat(5, 1fr)';
            armor.style.gap = '10px';
                   
 for(let n = 0;n<=numberOfElements;n++){
    
            const child = document.createElement('div');
            child.style.backgroundColor = 'white'
            child.style.height = "600px"
            child.style.width = "25%"
            child.style.marginTop = "100px"
            
            armor.appendChild(child)
    
            const Image = document.createElement('img')
            Image.src = data[n].image;
            Image.style.height = "400px"
            Image.style.width = "100%"
    
            child.appendChild(Image)
    
            const content = document.createElement('h1')
            content.innerText = data[n].title
            content.style.fontSize ="20px"
            content.style.marginLeft = "12px"
            
            child.appendChild(content)
    
            const price = document.createElement('h1')
    
            price.innerHTML =data[n].price
            price.style.marginLeft ="12PX"
    
            child.appendChild(price)

  }
    
        // console.log(armor)
    


    }
    catch(error){
    }
 
}

Get();


console.log("oeee mill gya jo dekh rah he ")


