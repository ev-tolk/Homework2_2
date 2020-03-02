var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("menu-list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var tasks = document.getElementsByTagName('task');
var infBtn = document.getElementById('information');

//addEventListener - обработчик события с вызовом возвращающей значение функции

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation(); //перехват события
        })
    }
    for(let task of tasks){
        task.addEventListener('click', function(){
            task.style.textDecoration = "line-through";
            event.stopPropagation();
        })
    }
}


function loadTodo(){
    if(localStorage.getItem('TodoApp')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
}

dataInput.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        var newTask = document.createElement('task');
        newSpan.innerHTML = "Delete";

        var newItem = this.value; //полученіе данных із поля input
        this.value = "";
        if (newItem != ""){
            var now = new Date();
            var taskFormat = `${newItem} |Date:  ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} г. `;
            newTask.innerHTML = taskFormat;
            //ulSpisok.appendChild(newLi).append(newSpan, newItem, now.getDate(), now.getMonth() + 1, now.getFullYear());
            ulSpisok.appendChild(newLi).append(newSpan, newTask);
            
        }
        else alert("Пожалуйста, введите текст!");   
    }
    deleteTodo();
})


saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoApp', ulSpisok.innerHTML );
});

clearBtn.addEventListener('click',function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
});

infBtn.addEventListener('click',function(){
    alert("Разработал: Толкачёв Евгений Леонидович");
});

deleteTodo();
loadTodo();