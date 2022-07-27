window.addEventListener('load',()=>{
    const form= document.querySelector("#taskform");
    const input= document.querySelector("#taskinput");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const task = input.value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const taskContentEl =document.createElement('div');
        taskContentEl.classList.add('content');
        // taskContentEl.innerText=task;

        task_el.appendChild(taskContentEl);

        const taskInputEl=document.createElement('input');
        taskInputEl.classList.add('text');
        taskInputEl.type="text";
        taskInputEl.value=task;
        taskInputEl.setAttribute("readonly","readonly")

        taskContentEl.appendChild(taskInputEl);

        const taskActionEl =document.createElement('div');
        taskActionEl.classList.add('actions');

        const taskEditEl =document.createElement('button');
        taskEditEl.classList.add('edit');
        taskEditEl.innerHTML="Edit";

        const taskDeleteEl=document.createElement('button');
        taskDeleteEl.classList.add('delete');
        taskDeleteEl.innerHTML= "Delete";
        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDeleteEl);
        task_el.appendChild(taskActionEl);
        list.appendChild(task_el);

        input.value="";

        taskEditEl.addEventListener('click',()=>{
            if(taskEditEl.innerHTML.toLowerCase()=="edit"){
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEditEl.innerHTML="Save";
            }else{
                taskInputEl.setAttribute("readonly","readonly");
                taskEditEl.innerHTML ="Edit";
            }
        });
        taskDeleteEl.addEventListener('click',()=>{
            list.removeChild(task_el);
        });
    });
});