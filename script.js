const inputField=document.querySelector("#input-field");
const addBtn=document.querySelector("#add-btn");
const unorderedList=document.querySelector("#todo-list");

addBtn.addEventListener("click",run);

function run(){
    const addnewList=document.createElement("li")
    addnewList.innerText=inputField.value;
    unorderedList.appendChild(addnewList);
    inputField.value=""
}