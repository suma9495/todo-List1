/*add function*/
function onAddClick(event){
  event.preventDefault();
  if(!item.value) return;  
  itemList.push(item.value);
  item.value="";
  item.focus();
  printList();
}


/*delete function*/
function onDeleteIconClick(){
  var index = this.parentElement.childNodes[0].id;
  console.log(index);
	itemList.splice(index,1);
	printList();
}


/*edit function*/
function onEditIconClick(){
	var index = this.parentElement.childNodes[0].id;	
	
	/*to add text field*/
	const editText = document.createElement("input");
  	editText.setAttribute('id', 'editedValue');
  editText.setAttribute('value',itemList[index]);   
	editText.className = "edit-text-icon";
	this.parentElement.appendChild(editText);

	/*to add save button*/
	const saveButton = document.createElement("input");
  	saveButton.className = "edit-button";
	saveButton.setAttribute('type','button'); 
	saveButton.setAttribute('value','Save'); 
  	saveButton.addEventListener('click', onSaveButttonClick);/*ADD DELETE EVENTLISTENER*/
	this.parentElement.appendChild(saveButton);


	/*to remove edit icon*/
	this.parentElement.removeChild(this.parentElement.childNodes[2]);
}

/*save function*/
function onSaveButttonClick(event){
  
	var index = this.parentElement.childNodes[0].id;
  itemList[index] = editedValue.value;
  console.log(editedValue);
	printList();
	
}

function printList(){
 var index = 0;
  while (ulList.firstChild) {
    ulList.removeChild(ulList.firstChild);
}
//console.log(ulList.firstChild);
itemList.forEach(function(item, index){

const li = document.createElement("li"); 

  /* add toDoItem to list*/
  const toDoItem = document.createElement("SPAN");
  toDoItem.classList.add("list-item");
  toDoItem.setAttribute('id',index); 
  toDoItem.innerText=item;
  li.appendChild(toDoItem);
  console.log(toDoItem);

  /* add Delete to list*/
  const deleteIcon = document.createElement("SPAN");
  const icons = document.createTextNode("\u00D7");
  deleteIcon.className = "close-icon";
  deleteIcon.setAttribute('id',index);
  deleteIcon.appendChild(icons);
  deleteIcon.addEventListener('click', onDeleteIconClick);/*ADD DELETE EVENTLISTENER*/
  li.appendChild(deleteIcon);

  /* add edit to list*/  
  const editIcon = document.createElement("SPAN");
  const edit = document.createTextNode("\u270E");
  editIcon.setAttribute('id',index);   
  editIcon.className = "edit-icon";
  editIcon.appendChild(edit);
  editIcon.addEventListener('click', onEditIconClick);/*ADD EDIT EVENTLISTENER*/
  li.appendChild(editIcon);

    /*append list to ul, set item value to null after onClick, set item focus after onClick */
  ul.appendChild(li);
  index = index+1;
});
}

/*declarations*/
const ulList = document.getElementById("myUL");
const ul = document.querySelector('#myUL');
const btnAdd = document.querySelector("button.btn-add");
btnAdd.addEventListener('click', onAddClick);
var itemList = [];
console.log(itemList);

















