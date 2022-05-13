let show = document.getElementById('board');
let item = document.createElement('item');
let deleteItem = document.createElement('deleteItem');
let check = document.createElement('check');

function addItem(){//use form to create a task
    const itemFactory = (title, description, due) => {
        return {title, description, due};
    }
    let newItem = itemFactory(document.getElementById('title').value,
        document.getElementById('description').value, document.getElementById('due').value);

    createItem(newItem.title, newItem.description, newItem.due);
}

function createItem(title, description, due){//put an actual element on the html part
    item = document.createElement('div');
    item.setAttribute("class", "item");
    item.innerHTML = title + ' ' + description + ' ' + due;
    show.appendChild(item);

    addDeleteButton();
    addCheckButton();
}

function addDeleteButton(){//all the deleteItem code sticks on a button that deletes the current item
    deleteItem = document.createElement('button');
    deleteItem.setAttribute('class', 'deleteItem');
    deleteItem.innerHTML = 'remove item';
    item.appendChild(deleteItem);
    deleteItem.onclick = function(){
        this.parentElement.remove();
    };
}

function addCheckButton(){//adds strikethrough button
    check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', 'check')
    item.appendChild(check);
    check.onclick = function(){//strikethrough when box is checked
        if (this.checked == true){
            this.parentElement.style.textDecoration='line-through';
        } else {
            this.parentElement.style.textDecoration='none'
        }
    }
}