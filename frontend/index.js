const tarefas = document.querySelectorAll(".tarefas");
const botao = document.getElementById('botaoConfirma');
const input = document.getElementById('tarefaNova');
const lista = document.getElementById('listaDeTarefas')

tarefas.forEach(function(tarefa){
    tarefa.addEventListener('click', function(){
        tarefa.classList.toggle('feito')
    })
})

botao.addEventListener('click', function(){
    const textoDoItem = input.value;

    if(textoDoItem.trim() === ''){
        return;
    }
    
    const novoItem = document.createElement('li');

    novoItem.textContent = textoDoItem;

    novoItem.addEventListener('click', function(){
        novoItem.classList.toggle('feito')
    });

    lista.appendChild(novoItem);
    input.value = '';
})