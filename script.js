function getFormValue() {
	let fname = document.getElementById('fname').value
	let lname = document.getElementById('lname').value

	document.getElementById('firstLast').innerHTML ='hello ' + fname +' '+ lname;
}