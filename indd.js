const inputBox= document.getElementById('input')
const listContainer= document.getElementById('list')

function addTask(){

    if(inputBox.value==='')
        alert("Please enter something :(")

    else{
        //we r creating /li where we write the todo
        //thn  storing it in innerHtml thn displaying 
        //it with help /listContainer(HTml)
        let li= document.createElement('li')
        li.innerHTML= inputBox.value
        listContainer.appendChild(li)

        let span= document.createElement('span')
        span.innerHTML= '\u00d7'
        //to display tht now
        li.appendChild(span)
    }

    inputBox.value= '';
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName=== 'LI'){   
        e.target.classList.toggle('checked')
        saveData()
    }   

    else if(e.target.tagName=== 'SPAN'){
        e.target.parentElement.remove()
        saveData();
    }

}, false)

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML= localStorage.getItem('data')
}

showList();
