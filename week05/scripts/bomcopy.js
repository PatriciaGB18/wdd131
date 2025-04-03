// Seleciona os elementos da página
const input = document.querySelector('#favchap'); 
const button = document.querySelector('#addBtn');  
const list = document.querySelector('#list');  
const errorMsg = document.querySelector('#error-msg'); 

// Obtém a lista salva ou inicializa um array vazio
let chaptersArray = getChapterList() || [];

// Exibe os capítulos salvos ao carregar a página
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Adiciona um capítulo ao clicar no botão
button.addEventListener('click', function() {
    const chapterName = input.value.trim(); // Remove espaços extras

    if (chapterName !== '') { 
        errorMsg.textContent = ''; // Limpa a mensagem de erro

        displayList(chapterName); // Adiciona o capítulo na tela
        chaptersArray.push(chapterName);  // Adiciona ao array
        setChapterList(); // Atualiza o localStorage

        input.value = ''; // Limpa o campo de entrada
        input.focus(); // Mantém o foco no input
    } else {
        errorMsg.textContent = 'Please enter a favorite chapter!';
        input.focus();
    }
});

// Função para exibir um capítulo na tela
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item; 
    deleteButton.textContent = '❌'; 
    deleteButton.classList.add('delete'); 

    li.append(deleteButton);
    list.append(li);

    // Evento para remover item ao clicar no botão
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); 
        deleteChapter(li.textContent); // Remove do localStorage e do array
        input.focus();
    });
}

// Função para salvar os capítulos no localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Função para obter os capítulos salvos no localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

// Função para excluir um capítulo do array e do localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove o "❌" do final
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove do array
    setChapterList(); // Atualiza o localStorage
}
