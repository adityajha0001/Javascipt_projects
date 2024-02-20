// const input = document.getElementById('write');

// const { combineConsoleFeatures } = require("vscode-languageserver");

// // console.log(input)
// // console.log(Image)
// function Click(inputValue){
//   function Onclick(event,inputValue){
//     const Image = document.getElementsByClassName('image')
//     console.log(inputValue)

//   }
//   Image.addEventListener('click',Onclick,false)


// };

// function EventDataDriven(event){
//   const inputValue = event.target.value;
//    console.log(inputValue)
//  return inputValue;
// };

// // // function onclick(event){
   
// // // }
// const input = document.getElementById('write');

// const data = input.addEventListener('input',EventDataDriven,false);

// console.log(data);

// const newPromise = new Promise(function(resolve,reject){
//   document.getElementById('write').addEventListener('input',EventDataDriven,false);

//     function EventDataDriven(event){
//       const inputValue = event.target.value;
//        //console.log(inputValue)
//       resolve(inputValue)
//     };
    


// });

// newPromise.then(function(inputValue){
//   console.log(inputValue)

// }).catch()

// function getInputValue() {
//   return new Promise((resolve, reject) => {
//     let inputData = [];
//       document.getElementById('write').addEventListener('input', function(event) {
//              event.preventDefault();
//          let inputValue = event.target.value;
//          inputData.push(inputValue)
        

//          resolve(inputData)
//         });

//   });
// }
//  getInputValue().then((inputValue) => {
//   console.log('Input value:', inputValue);
//   // You can use the value here or perform further processing
// });




// // // let inputValue;

// //  const add = document.getElementById('write');
// // //  console.log(add);
 
// // add.addEventListener('input',function(event) {
// //          event.preventDefault(); 
// //          let inputValue = [];
// //          inputValue.push(event.target.value)
// //         // console.log(inputValue)
// //           return inputValue;
// //           });

// // console.log(inputValue)


// const apiKey = "d98b7390b860f1631fea0d0267bd5fff";
// // const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=";
// var cityName = delhi


const searchVoid = document.querySelector('.Enter');
console.log(searchVoid)
const searchPress = document.querySelector('.press');
searchPress.addEventListener("click",()=>{
    const name = searchVoid.value;
    // console.log(name)
    Weather(name);
})

async function Weather(city){
    try{
        console.log(city)
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=179b1a25cf6248fbace134412241702'+'&q=' + city );
   var data = await response.json();
   console.log(data);
    
 document.querySelector('.water').innerHTML= data.current.humidity +'%';
 document.querySelector('.wind').innerHTML =data.current.wind_kph +'Km/h';
 document.querySelector('.gotham').innerHTML =data.location.name;
 document.querySelector('.hot').innerHTML = Math.round(data.current.temp_f)+' c';

 


   
   

}
    catch(error){
        console.log(error)
    }
};

// Weather();



