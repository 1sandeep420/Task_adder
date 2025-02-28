document.addEventListener('DOMContentLoaded',function()
{
    const input_box = document.getElementById('input_box'); 
    const menu_icon = document.getElementById('menu-icon')
    const menu_items = document.getElementById('menu-items')
    const close_icon = document.getElementById('close')
    const UserInput_button = document.getElementById('to_do_button')
    const Tasks_container = document.getElementById('task_container')
    const Filter_opton = document.getElementById('filter-todo')
    menu_icon.addEventListener('click',function()
    {
        console.log('logged')
        menu_items.classList.toggle("active");
    })
    close_icon.addEventListener('click',function()
    {
        menu_items.classList.remove('active')
        
    })
    
    UserInput_button.addEventListener('click',function(event)
    {
        event.preventDefault();
        console.log('clicked')
    
       
    
        const New_to_do = document.createElement('li');
        if(input_box.value.trim()==="")
            {
                alert("enter the value : ")
                return;
               
            }   
       else
       {

        const main_div = document.createElement('div')
        main_div.classList.add("main_container")
        Tasks_container.appendChild(main_div)

//creates Li tag
        New_to_do.innerText = input_box.value
        New_to_do.classList.add('tasks_list');
        main_div.appendChild(New_to_do);
        input_box.value ="";
    
    
        const completed_button = document.createElement('button')
        completed_button.innerHTML = '<i class="fa fa-check"></i>';
        completed_button.classList.add('completed_button')
        main_div.appendChild(completed_button)


    
        const trash_button = document.createElement('button')
        trash_button.innerHTML='<i class="fa fa-trash"></i>'
        trash_button.classList.add('trashed')
        main_div.appendChild(trash_button)

        const completed_task_schedule=document.createElement('button')
        completed_task_schedule.innerHTML ='<i class="fa fa-clock"></i>'
        completed_task_schedule.classList.add('schedule')
        main_div.appendChild(completed_task_schedule)

       }
       
    })

    Tasks_container.addEventListener('click' , delete_task)
    function delete_task(e)
    {

       const item = e.target
       
       if((item.classList.contains('fa-trash') ||  item.parentElement.classList.contains('trashed')))
        {     
            item.closest('.main_container').remove()  //removes parent element

        };

        if(item.classList.contains('fa-check') || item.parentElement.classList.contains('completed_button'))
        {
            
          // New_to_do.classList.toggle('completed_tasks_list')
           
        item.closest('.main_container').classList.toggle('Completed')
        console.log('checked')
   
        }

        if (item.classList.contains("fa-clock") || item.parentElement.classList.contains('schedule'))
        {

            console.log("clock")
            let Task_item= item.closest('.main_container') //fnds the parent element
            Task_item.classList.toggle('Pending');  //this appends css class (pending)
            
            //storing in Task_item 

            
            let taskText = Task_item.querySelector('.tasks_list');//this searches the tasks_list and stores if finds holds or null           if(taskText)
            {
                let Existingsymbol =  taskText.querySelector('.pending-symbol');

                if(Task_item.classList.contains('Pending'))
                {
                    if(!Existingsymbol)
                    {
                        let pending_symbol = document.createElement('span');
                        pending_symbol.innerHTML = " 🕒";
                        pending_symbol.classList.add('pending-symbol');
                        taskText.appendChild(pending_symbol);
                    }
                    else
                    {
                        if(Existingsymbol)
                        {
                        Existingsymbol.remove();
                        }
                    }
                }

                
        
            }
            
        }


    }

Filter_opton.addEventListener('change',function(e)
{

    const todos = Tasks_container.children;
    console.log(todos)

    Array.from(todos).forEach(function(todo)
{
     
    switch(e.target.value)
    {
        case "All":
            todo.style.display = "flex";
            break;
        case "Completed":
            if(todo.classList.contains("Completed"))
            {
                todo.style.display="flex";
            }
            else
            {
                todo.style.display = "none";
            }
            break;
        case "Pending":
            if(todo.classList.contains("Pending"))
            {
                todo.style.display="flex";
            }
            else
            {
                todo.style.display = "none";
            }
            break;
    }
});

})
    
    

    
   





})