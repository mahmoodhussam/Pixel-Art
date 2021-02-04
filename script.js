let row = document.querySelector('#row');
let col = document.querySelector('#col');
let color = document.querySelector('#color');
let submit = document.querySelector('#submit');
let table = document.querySelector('.table');
let rows;
let cols;
let colors;

submit.addEventListener('click',function(event){
	table.innerHTML = '';
	rows = row.value;
	cols = col.value;
	for(let r=0;r<rows;r++){
		let table_row = document.createElement('tr');
		for(let c=0;c<cols;c++){
			table_row.appendChild(document.createElement('td'));
		}
		table.appendChild(table_row);
	}
	console.log("Done");
});

table.addEventListener('click',function(event){
	console.log(event);
	event.target.style.background = color.value;
})