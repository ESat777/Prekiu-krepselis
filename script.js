const input1 = document.querySelector('input')
const items1 = document.getElementById('items')
const form = document.querySelector('form')
const button1 = document.querySelector('button')
const quantity1 = document.getElementById('quantity')
let array1 = [];
items1.innerText = "Prekių krepšelis tuščias!";

function createItem(item, quan){
     for(i = 0; i<array1.length; i++){
        
        if(array1[i].item === item){
            array1[i].quan = array1[i].quan + quan;
            showCart();
            return;
        }
     }
    const itemObj = {item,quan};
    array1.push(itemObj);
    showCart();
    console.log(array1)
}
function showCart (){
    let cartElements = '';
    for(i = 0; i < array1.length; i++){
        const {item, quan} = array1[i];
        cartElements += `<div> ${item} <span> x </span> ${quan} <button class="remove btn btn-danger" data-name="${item}">Panaikinti</button></div>`
    }
    if(i === 6){
        items1.innerHTML = "Krepšelis pilnas";
        return;
    }
    items1.innerHTML = cartElements;
}
function removeElement(item,quan = 0){
    for(i = 0; i < array1.length; i++){
    if(array1[i].item === item){
        if(quan > 0){
            array1[i].quan--;
        }
        if(array1[i].quan < 1 || quan === 0){
            array1.splice(i, 1);
        }
        showCart();
        if(array1.length == 0){
            items1.innerText = "Prekių krepšelis tuščias!";            
        }
        return;
    }
    }
}

form.addEventListener('submit', (event) => {
    
    const item = input1.value;
    var quan1 = quantity1.value;
    var quan = parseInt(quan1, 10)
    if(input1.value != 0){
    createItem(item, quan);  
    }else{input1.placeholder = "Įveskite prekę"}

    quantity1.value = 1;
    input1.value = '';    
    event.preventDefault()   
})

  
items1.onclick = function(e) {
    if(e.target && e.target.classList.contains('remove')){
        const name = e.target.dataset.name;
        removeElement(name);
    }
} 
