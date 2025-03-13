const input = document.querySelector('#favchap'); 
const button = document.querySelector('#addBtn');  
const list = document.querySelector('#list');  
const errorMsg = document.querySelector('#error-msg'); 

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 
        errorMsg.textContent = ''; 

        const li = document.createElement('li'); 
        li.textContent = input.value; 

        const deleteButton = document.createElement('button');  
        deleteButton.textContent = '❌';

        
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); 
            input.focus(); 
        });

        li.appendChild(deleteButton); 
        list.appendChild(li); 

        input.value = ''; 
        input.focus(); 
    } else {
        errorMsg.textContent = 'Please enter a favorite chapter!'; 
        input.focus(); 
    }
});
