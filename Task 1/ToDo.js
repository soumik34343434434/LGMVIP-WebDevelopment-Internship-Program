function add(){
    var box=document.getElementById('box');
    var inp=document.getElementById('inp');

    if(inp.value!='')
    {
        var boxTitle=document.getElementById('box-title');
        if(boxTitle){
            boxTitle.remove();
        }
        var divs=document.createElement('div');
        divs.setAttribute('id','item');

        //checkbox
        var btnd=document.createElement('button');
        btnd.setAttribute('id','done');
        divs.appendChild(btnd);

        var parent=document.createElement('div');
        parent.setAttribute('id','parent');
        parent.setAttribute('onclick','done(this)');
        var todo=document.createElement('p');
        todo.setAttribute('id','todoList');

        var content=document.createTextNode(inp.value);
        todo.appendChild(content);
        parent.appendChild(todo);
        divs.appendChild(parent);

        var btn=document.createElement('button');
        btn.setAttribute('id','del');
        var cancel=document.createElement('i');
        cancel.classList.add('fa','fa-minus-circle');
        btn.appendChild(cancel);
        btn.setAttribute('onclick','remove(this)');
        divs.appendChild(btn);

        //adding to box
        box.appendChild(divs);
        inp.value='';
    }
    else{
        alert("Please enter your ToDo");
    }

}

//remove function
function remove(event){
    event.parentNode.parentNode.removeChild(event.parentNode);

}

//refresh function
function refresh(){
    location.reload();
}

//done

function done(e){
    if(e.classList!='line')
    {
        e.classList.add('line');
        e.parentNode.style.background='lightgrey';
        var child=e.previousSibling;
        var node=document.createElement('i');
        node.classList.add('fa','fa-check','check');
        child.appendChild(node);
    }
    else{
        e.classList.remove('line');
        var rem=e.previousSibling;
        rem.removeChild(rem.firstChild);
        e.parentNode.style.background='rgba(255,255,255,0.85)';
    }
}