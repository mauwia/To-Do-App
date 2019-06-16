var portion=document.getElementById("to-do-portion")
var list=document.getElementById('to-do-list')
var saved=document.getElementById('save')
var firstName1=document.getElementById('first_name1')
var add_save=document.getElementById('add_save')
var list_id=4
var added;
function addItem()
{
    added=firstName1.value 
    //added = added.trim()
    if(added !== "")
        {   
             list_id++;
            var un_or=document.getElementById("to-do-list")
            var u_list=document.createElement("li")
            var inputs=document.createElement('input')
            inputs.type='checkbox'
            var la_el=document.createElement('label')
            var but_on=document.createElement('button')
            var del_bu=document.createElement('i')
            var edit_a=document.createElement('a')
            var edi_bu=document.createElement('i')
            u_list.classList.add('collection-item')
            inputs.setAttribute('id','checkboxid'+list_id)
            inputs.classList.add('filled-in')
            la_el.setAttribute('for','checkboxid'+list_id)
            but_on.classList.add('btn-small','btn-floating','red','right','delete_b')
            del_bu.classList.add('material-icons')
            edit_a.classList.add('btn-small','btn-floating','blue','right','edit_b','modal-trigger')
            edit_a.setAttribute('href','#modal2')
            edi_bu.classList.add('material-icons')
            un_or.appendChild(u_list);
            u_list.appendChild(inputs);
            u_list.appendChild(la_el);
            u_list.appendChild(but_on);
            but_on.appendChild(del_bu);
            u_list.appendChild(edit_a);
            edit_a.appendChild(edi_bu);
            la_el.innerText=added
            del_bu.innerText='delete'
            edi_bu.innerText='edit'
            firstName1.value=""
            console.log('working')
            regulate_events()
        }
}
add_save.addEventListener('click',addItem)
// checkItem
function complete_check(){
    var labelItem=this.parentNode;
    labelItem.classList.toggle('checked_activity')
}
function deleting_activity(){
    var listItem = this.parentNode;
    list.removeChild(listItem)
}
function close_edit_task(upperDiv){
    portion.removeChild(upperDiv)
}
function save_edit_activity(last_task,upperDiv,textsp)
{
    inputs=upperDiv.querySelector('input[type=text]')
    if(inputs===""){
        close_edit_task(upperDiv)
        return true
    }
    textsp.innerText=inputs.value;
    portion.removeChild(upperDiv)
        
}
function edit_activity()    
{   
    var listItem=this.parentNode; //list
    var textsp=listItem.childNodes[2];console.log(textsp)//label
    var last_task=textsp.textContent;//last task(homework)
    
    var upperDiv=document.createElement('div');
    var upperDiv1=document.createElement('div');
    var h4=document.createElement('h4');
    var lowerDiv=document.createElement('div');
    var inputs=document.createElement('input');
    var la_bel=document.createElement('label');
    var lowerDiv1=document.createElement('div');
    var done_butt=document.createElement('a');
    var close_butt=document.createElement('a');
    
    upperDiv.setAttribute('id','modal2');
    upperDiv.classList.add('modal');
    upperDiv1.classList.add('modal-content');
    h4.classList.add('card-panel','blue','darken-2','white-text');
    lowerDiv.classList.add('input-field','col','s6','task_in')
    inputs.classList.add('validate')
    inputs.setAttribute('id','firstname2');
    inputs.setAttribute('placeholder','eg:Bill Payment');
    inputs.setAttribute('type','text');
    inputs.setAttribute('autofocus','autofocus');
    la_bel.setAttribute('for','firstname2');
    la_bel.classList.add('name_lab');
    lowerDiv1.setAttribute('class',"modal-footer")
    done_butt.href="JavaScript:void(0);";
    done_butt.classList.add('modal-action','modal-close','waves-effect','waves-green','btn-flat');
    idDone=done_butt.setAttribute('id','done_butt');    close_butt.href="JavaScript:void(0);";
    close_butt.classList.add('modal-action','modal-close','waves-effect','waves-green','btn-flat');
    close_butt.setAttribute('id','close_butt');
    upperDiv.appendChild(upperDiv1);
    upperDiv1.appendChild(h4);
    upperDiv1.appendChild(lowerDiv);
    lowerDiv.appendChild(la_bel);
    lowerDiv.appendChild(inputs);
    upperDiv.appendChild(lowerDiv1);
    lowerDiv1.appendChild(done_butt);
    lowerDiv1.appendChild(close_butt);
    portion.appendChild(upperDiv);
    h4.innerText='Edit Task';
    la_bel.innerText='Edit task to do'
    inputs.value=last_task
    done_butt.innerText='Done'
    close_butt.innerText='Cancel';
    done_butt.addEventListener('click',() =>{save_edit_activity(last_task,upperDiv,textsp)})
    close_butt.addEventListener('click',() =>{close_edit_task(upperDiv)})
    
    
}
function regulate_events()
{
    var delete_activity=list.querySelectorAll('button.delete_b')
    var check_activity=list.querySelectorAll('input[type=checkbox]')
    var nodes
    var edit_activit=list.querySelectorAll('a.edit_b')
    for(nodes of check_activity)
        {
            nodes.addEventListener('click',complete_check)
        }
    for(nodes of delete_activity)
        {
            nodes.addEventListener('click',deleting_activity)
        }
    for(nodes of edit_activit)
        {
            nodes.addEventListener("click",edit_activity)
        }
}
regulate_events();
function displayAll(){
    var checkbox = list.querySelectorAll('input[type=checkbox]');
    for(x of checkbox)
        {
            var hide_todo=x.parentNode
            hide_todo.classList.remove('hide')
        }
}
function incompleteTask(){
    displayAll()
    var checkbox = list.querySelectorAll('input[type=checkbox]');
    for(x of checkbox)
        {
            if(x.checked=== true)
            {
                var hide_todo=x.parentNode
                hide_todo.classList.toggle('hide')
            }
        }
}function completeTask(){
    displayAll()
    var checkbox = list.querySelectorAll('input[type=checkbox]');
    for(x of checkbox)
        {
            if(x.checked=== false)
            {
                var hide_todo=x.parentNode
                hide_todo.classList.toggle('hide')
            }
        }
}
var clrtask=document.getElementById('clrtask')
var comtask=document.getElementById('comtask')
var incomtask=document.getElementById('incomtask')
var alltask=document.getElementById('alltask')
alltask.addEventListener('click',displayAll)
incomtask.addEventListener('click',incompleteTask)
comtask.addEventListener('click',completeTask)
clrtask.addEventListener('click',()=>{list.innerHTML=""})