const menu_icon = document.getElementById('menu-icon')
const menu_items = document.getElementById('menu-items')
const close_icon = document.getElementById('close')
const UserInput = document.getElementById('to_do_button')
const Tasks_container = document.getElementById('task_container')

menu_icon.addEventListener('click',function()
{
    console.log('logged')
    menu_items.classList.toggle("active");
})
close_icon.addEventListener('click',function()
{
    menu_items.classList.remove('active')
    
})

UserInput.addEventListener('click',function(event)
{
    event.preventDefault();
    console.log('clicked')

    const New_to_do = document.createElement('li');
    New_to_do.innerText = 'hello';
    New_to_do.classList.add("tasks");
    Tasks_container.appendChild(New_to_do);


    const Add_Task_button = document.createElement('button')
    Add_Task_button.innerHTML='+'
    Add_Task_button.classList.add('Add_button')
    New_to_do.append(Add_Task_button)

    const Remove_Task_button = document.createElement('button')
    Remove_Task_button.innerHTML='-'
    Remove_Task_button.classList.add('Remove_button')
    New_to_do.append(Remove_Task_button)
    


})

