document.addEventListener('DOMContentLoaded',function()
{
    const menu_icon = document.getElementById('menu-icon')
    const menu_items = document.getElementById('menu-items')
    const close_icon = document.getElementById('close')
    const UserInput_button = document.getElementById('to_do_button')
    const Tasks_container = document.getElementById('task_container')
    const completed_tasks_container = document.getElementById('completed_tasks_container_main')
    const schedule_tasks_div = document.getElementById('schedule_tasks');
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
    
        const main_div = document.createElement('div')
        main_div.classList.add("main_container")
        Tasks_container.appendChild(main_div)
    
        const New_to_do = document.createElement('li');   
        New_to_do.innerText = input_box.value;
        New_to_do.classList.add("tasks_list");
        main_div.appendChild(New_to_do);
        input_box.value ="";
    
    
        const completed_button = document.createElement('button')
        completed_button.innerHTML = '&#10003;';
        completed_button.classList.add('completed')
        main_div.appendChild(completed_button)
    
        const trash_button = document.createElement('button')
        trash_button.innerHTML='<i class="fa fa-trash"></i>'
        trash_button.classList.add('trashed')
        main_div.appendChild(trash_button)

        const completed_task_schedule=document.createElement('button')
        completed_task_schedule.innerHTML ='<i class="fa fa-clock"></i>'
        completed_task_schedule.classList.add('schedule')
        main_div.appendChild(completed_task_schedule)

        completed_button.addEventListener('click',()=>
        {  

            const completed_task_div = document.createElement('div')
            completed_tasks_container.appendChild(completed_task_div)

            

            const completed_tasks = document.createElement('li')
            completed_tasks.innerText=New_to_do.innerText;
            completed_tasks.classList.add('completed_tasks_list')
            completed_task_div.appendChild(completed_tasks)
            
            
        })


    Tasks_container.addEventListener('click' , delete_task)
    function delete_task(e)
    {

       const item = e.target
       console.log(item)
       if((item.classList.contains('fa-trash') ||  item.parentElement.classList.contains('trashed')))
        {
            item.closest('.main_container').remove()

        };

        if((item.classList.contains('fa-clock')) || item.parentElement.classList.contains('schedule'))
        {

            if ( item.closest('.main_container').dataset.scheduled) return; // If already scheduled, ignore
            item.closest('.main_container').dataset.scheduled = true; 
        
            const schedule_div = document.createElement('div')
            schedule_tasks_div.appendChild(schedule_div)
                

            const schedule_tasks_li = document.createElement('li')
            schedule_tasks_li.innerText = item.closest('.main_container').querySelector('.tasks_list').innerText;
            schedule_tasks_li.classList.add('schedule_tasks_list')
            schedule_div.appendChild(schedule_tasks_li)
            item.closest('.main_container').remove()
           
           
            


        }

    }


    
    
    })

    
   

})



