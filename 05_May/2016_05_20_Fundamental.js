function multiplicationTable(row,col){
	var myTable = [];

	for(var i = 1; i <= row; i++) {
		var currentRow = [];

		for(var j = 1; j <= col; j++) {
			currentRow.push(i * j);
		}

		myTable.push(currentRow);
	}

	return myTable;
}

//console.log(multiplicationTable(2, 2));
//console.log([[1,2],[2,4]]);
//console.log(multiplicationTable(3, 3));
//console.log([[1,2,3],[2,4,6],[3,6,9]]);
//console.log(multiplicationTable(3, 4));
//console.log([[1,2,3,4],[2,4,6,8],[3,6,9,12]]);
//console.log(multiplicationTable(4, 4));
//console.log([[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]);
//console.log(multiplicationTable(2, 5));
//console.log([[1,2,3,4,5],[2,4,6,8,10]]);

/*
Test.assertSimilar(multiplicationTable(2,2), [[1,2],[2,4]])
Test.assertSimilar(multiplicationTable(3,3), [[1,2,3],[2,4,6],[3,6,9]])
Test.assertSimilar(multiplicationTable(3,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
Test.assertSimilar(multiplicationTable(4,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
Test.assertSimilar(multiplicationTable(2,5), [[1,2,3,4,5],[2,4,6,8,10]])
*/
