let expenseArray=[];
const nameEl = document.getElementById('name-el')
const dateEl = document.getElementById('date-el')
const amountEl= document.getElementById('amount-el')
const btnAdd= document.getElementById('addExpense')
const tbodyEl=document.getElementById('tbody-el')
const btnDelete=document.getElementById('delete-btn');
let expLocalStorage=JSON.parse(localStorage.getItem('expense'))
//rendering stored expenselist
if (expLocalStorage) {
	expenseArray=expLocalStorage
	render(expenseArray)
}

btnAdd.addEventListener('click', function() {
	// body...
	let expense= {
	name:"",
	date:0, 
	amount:0
}
if (nameEl.value==="" || amountEl.value==="" || dateEl.value==="" ) {
	alert('fill out all input');
} else {
	expense.name = nameEl.value
	expense.date = dateEl.value
	expense.amount = amountEl.value
    expenseArray.push(expense)
	localStorage.setItem('expense', JSON.stringify(expenseArray))
	render(expenseArray)	
}
})

 btnDelete.addEventListener('click', function(){
 	//body...
 	localStorage.removeItem('expense');
 	expenseArray=[];
 	render(expenseArray); 
 })


function render(expenseArr) {
 	// body...
 	let tableInput ="";
 for (var i = 0; i < expenseArr.length; i++) {
  		tableInput +=
 		 `
 		 	<tr>
 		 		<th>${expenseArr[i].name}</th>
 		 		<th>${expenseArr[i].date}</th>
 		 		<th>${expenseArr[i].amount}</th>
 		 		<th><img src="delete.png" id=${i} onclick="reply_click(this.id)"></th>
 		 	</tr>
 		`
 	}
 	// console.log(tableInput)
  tbodyEl.innerHTML =tableInput
} 


function reply_click(clicked_id){
	let counter=[0,1,2]
	let index=clicked_id;
	var expLocalStorage=JSON.parse(localStorage.getItem('expense'));
	expLocalStorage.splice(index, 1)
	expense=expLocalStorage
	localStorage.setItem('expense', JSON.stringify(expense))
	render(expense)
}
