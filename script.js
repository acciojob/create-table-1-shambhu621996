function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");
  let newrow = table.insertRow(0);
	let cell1 = newrow.insertCell(0);
		let cell2 = newrow.insertCell(1);
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
}
