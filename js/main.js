(function(){
    // Elements
    var list = document.getElementById("list"),
        taskInput = document.getElementById("task-input"),
        btnSubmit = document.getElementById("submit-button")

    // Funtions
    var deleteTask = function(){
        var confirm = window.confirm("Estas seguro de querer eliminar esta tares?");
        if (confirm) {
            this.parentNode.removeChild(this)
        } else {
            return false
        }
    }

    var addDeleteEvent = function(el){
        for (var i = 0; i <= el.children.length -1; i++){
            el.children[i].addEventListener('click', deleteTask);
        }
    }

    var addTask = function(){
        var task = taskInput.value,
            link = document.createElement("a"),
            content = document.createTextNode(task);

        if (task == "") {
            taskInput.setAttribute("placeholder", "Agrega una tarea valida");
            taskInput.className = taskInput.className + " input-error"
            return false;
        }
        
        link.appendChild(content);
        link.setAttribute("href", "#");
        link.className = "list-group-item list-group-item-action"
        list.appendChild(link)

        taskInput.value = "";

        addDeleteEvent(list)
        
    };
    var checkImput = function(){
        taskInput.className = "form-control"
    };

    // Events
    // add task
    btnSubmit.addEventListener("click", addTask);

    // Check if Input is empty
    taskInput.addEventListener("click", checkImput);

    // Add events to elements of the list
    addDeleteEvent(list)
}());