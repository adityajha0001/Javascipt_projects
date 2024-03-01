const Body = document.querySelector('.body')
// console.log(Body)
Body.style.backgroundColor = "black"



const url = "https://api.openai.com/v1/images/generations";

const apiKey = "yMHw4UidZM1Hha82AZtMjI50bYCfC3sdX7vvB";

const headers = new Headers();
headers.append('Content-type','application/json' );
headers.append('Authorization',`Bearer${apiKey}`);

async function AI (){
  let response = await fetch(url,{method:'POST',headers: headers});
  const data = response.json();
  console.log(data)
}

AI()





















const div = document.createElement('div')
// console.log(div)
const textField = document.createElement('input')
textField.style.backgroundColor = "red"
textField.style.height = "70px"
textField.style.width = "800px"
textField.style.margin= "200px"
textField.style.fontSize = "25px"

div.appendChild(textField)

Body.append(div)
