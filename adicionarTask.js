var botaoNovoItem = document.querySelector(".form-button");
botaoNovoItem.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Fui clicado")

    criarLi();
    resetForm();    
});

var listaTarefas = document.querySelector(".list");
listaTarefas.addEventListener("click", function(event){
    var alvoEvento = event.target;
    var contentAlvoEvento = alvoEvento.textContent;
    console.log(alvoEvento);
    console.log(contentAlvoEvento);
    if(contentAlvoEvento == "Concluir"){
        var tarefaCompleta = alvoEvento.parentElement;
        console.log(tarefaCompleta)
        tarefaCompleta.classList.toggle("done");
    }
    if(contentAlvoEvento == "Deletar"){
        var tarefaDeletada = alvoEvento.parentElement;
        console.log(tarefaDeletada);
        tarefaDeletada.classList.replace("task", "fadeOut");
        setTimeout(function() {
            tarefaDeletada.remove();
        }, 500);
    }
});

function criarLi(){
    var novaLi = document.createElement("li");
    novaLi.classList.add("task")

    var textoDigitado =  document.querySelector(".form-input").value;
    const conteudo = `<p class="content">${textoDigitado}</p>`
    novaLi.innerHTML = conteudo;
    
    var ul = document.querySelector(".list");
    ul.appendChild(novaLi);
    console.log(novaLi.innerHTML);

    var botaoConcluir = document.createElement("button");
    botaoConcluir.classList.add('check-button')
    console.log("O botão concluir foi criado");
    botaoConcluir.textContent = "Concluir";

    var botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("delete-button");
    botaoDeletar.textContent = "Deletar"
    
    novaLi.appendChild(botaoConcluir);
    novaLi.appendChild(botaoDeletar);
};

function resetForm(){
    var form = document.querySelector(".form")
    form.reset(); 
};