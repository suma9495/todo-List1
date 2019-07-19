/*add function*/
function onAddClick(event){
  event.preventDefault();
  if(!item.value) return; 
  var date = new Date().toLocaleDateString();
  itemList.push({Date:date, TodoTask:item.value, isMarked: false,});
  item.value="";
  item.focus();
  printList();
}


/*delete function*/
function onDeleteIconClick(event){
  var deleteThis = this.parentElement.id;
  itemList.splice(deleteThis,1);
  printList();
}


/*edit function*/
function onEditIconClick(){
  	/*to remove edit icon*/
  this.parentElement.removeChild(this.parentElement.childNodes[3]);	
  var editThis = this.parentElement.id;
  console.log(editThis);
	/*to add text field*/
	const editText = document.createElement("input");
  editText.setAttribute('id', 'editedValue');
  editText.setAttribute('index', editThis);
  editText.setAttribute('value',itemList[editThis].TodoTask); 
	editText.className = "edit-text-icon";
  this.parentElement.appendChild(editText);
  
	/*to add save button*/
	const saveButton = document.createElement("input");
  saveButton.className = "edit-button";
	saveButton.setAttribute('type','button'); 
	saveButton.setAttribute('value','Save'); 
  saveButton.addEventListener('click', onSaveButttonClick);/*ADD DELETE EVENTLISTENER*/
  this.parentElement.appendChild(saveButton);

}

/*star function*/
function onStarClick(event){
var starThis = this.parentElement.id;
console.log(starThis);
// console.log(itemList[starThis].isMarked = "true");
console.log(itemList);
 this.parentElement.style.color = 'green';
itemList[starThis].isMarked = true;
}

/*save function*/
function onSaveButttonClick(event){
  debugger;
  var index = this.parentElement.id;
  var date = new Date().toLocaleDateString();
  console.log(index);
  itemList[index]= {Date:date, TodoTask:editedValue[index].value};
  console.log(itemList[index].TodoTask);
	printList();	
}

/*printlist function*/

function printList(){
var index = 0;
while (ulList.firstChild) {
    ulList.removeChild(ulList.firstChild);
}
const header = document.createElement("HEADER");
header.classList.add("list-header");
const impHead = document.createElement("SPAN");
impHead.classList.add("list-impHead");
impHead.innerText = "MARK";
header.appendChild(impHead);
const dateHead = document.createElement("SPAN");
dateHead.classList.add("list-dateHead");
dateHead.innerText = "DATE";
header.appendChild(dateHead);
const taskHead = document.createElement("SPAN");
taskHead.classList.add("list-taskHead");
taskHead.innerText = "TASK";
header.appendChild(taskHead);
ul.appendChild(header);
console.log(header);
console.log(ul);
itemList.forEach(function(item, index){
const li = document.createElement("li");
li.setAttribute('id',index); 


/* add star to list */
const toDoStar = document.createElement("SPAN");
const stars = document.createTextNode("\u2730");
toDoStar.classList.add("list-star");
toDoStar.appendChild(stars);
toDoStar.addEventListener('click',onStarClick);
li.appendChild(toDoStar);
console.log(toDoStar);
console.log(li);


/* add date to list */
const toDoDate = document.createElement("SPAN");
toDoDate.classList.add("list-date");
toDoDate.innerText=item.Date;
li.appendChild(toDoDate);
console.log(toDoDate);
console.log(li);
  /* add toDoItem to list*/
  const toDoItem = document.createElement("SPAN");
  toDoItem.classList.add("list-item");
  toDoItem.innerText=item.TodoTask;
  li.appendChild(toDoItem);

  /* add Delete to list*/
  const deleteIcon = document.createElement("SPAN");
  const icons = document.createTextNode("\u00D7");
  deleteIcon.className = "close-icon";
  deleteIcon.appendChild(icons);
  deleteIcon.addEventListener('click', onDeleteIconClick);/*ADD DELETE EVENTLISTENER*/
  li.appendChild(deleteIcon);
  /* add edit to list*/  
  const editIcon = document.createElement("SPAN");
  const edit = document.createTextNode("\u270E");   
  editIcon.className = "edit-icon";
  editIcon.appendChild(edit);
  editIcon.addEventListener('click', onEditIconClick);/*ADD EDIT EVENTLISTENER*/
  li.appendChild(editIcon);
  ul.appendChild(li);
  index = index+1;
});
}

/*declarations*/
const ulList = document.getElementById("myUL");
const ul = document.querySelector('#myUL');
const btnAdd = document.querySelector("button.btn-add");
btnAdd.addEventListener('click', onAddClick);
const itemList = [];


