const tarefas = document.querySelectorAll(".tarefas");

tarefas.forEach(function(tarefa){
    tarefa.addEventListener('click', function(){
        tarefa.classList.toggle('feito')
    })
})

