


// function AddCategory (name){
//    const CategoryBox =  document.querySelector('.various');
// //    console.log(CategoryBox)

//   const NewCategory = document.createElement('div');
//   NewCategory.innerHTML = name;
//   CategoryBox.appendChild(NewCategory);
   

// };

// AddCategory("adity");

function EnterData (response){

 console.log(response);
 const element = response[0];

 const mainElement = document.querySelector('.MAIN')
  const Element = document.createElement('div');
  Element.innerHTML = element;
  Element.style.backgroundColor ="white"
  Element.style.height ="50px"
  Element.style.width ="500px"
  Element.style.marginLeft ="80px"
  Element.style.marginTop ="20px"
  Element.style.fontSize="28px"
  

  mainElement.appendChild(Element);
};

// EnterData();

const response = [];

const searchBox = document.querySelector('.abc');
const addButton = document.querySelector('.put').addEventListener('click',()=>{
  response.unshift(String(searchBox.value));
  EnterData(response);
});

function clearInput() {
  // Get the input element by its ID
  let inputElement = document.querySelector(".abc");

  // Clear the value of the input field
  inputElement.value = "";
}


