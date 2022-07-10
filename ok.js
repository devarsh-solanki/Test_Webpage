'use script';

const form_todo = document.querySelector(".form_todo");
const inputText = document.querySelector(".form_todo input[type='text']");

const todo_list = document.querySelector(".todo_list");

form_todo.addEventListener("submit",(e) => {
    e.preventDefault(); 
    const newTodo_Text = inputText.value;
    const newLi = document.createElement("li");
    if(newTodo_Text.length !== 0){
        newLi.innerHTML = `<span class="text"> ${newTodo_Text} </span>
        <div class="todo_buttons">
            <button class="todo_btn Done">Done</button>
            <button class="todo_btn Remove">Remove</button>
        </div>`
    }
    else{
        todo_list.remove.beforeend(newLi);
    }

    inputText.value = "";
    todo_list.append(newLi); 
});

todo_list.addEventListener("click",(e) => {
    if(e.target.classList.contains("Done")){
        const currentParentSibling = e.target.parentNode.previousElementSibling;
        currentParentSibling.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("Remove")){
        const currentParentParent = e.target.parentNode.parentNode;
        currentParentParent.remove();
    }
});