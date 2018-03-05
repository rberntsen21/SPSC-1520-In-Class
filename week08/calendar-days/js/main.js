// variable for the days of the week
var days = [
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat'
];

// indexer counter for traversing the array
var idx;

// variable for the table, which includes a row for day names
var cal = '<table><tr>';

	// add add day names
for (idx = 0; idx < days.length; idx += 1) {
	cal += '<th>' + days[idx] + '</th>';
}

// close the table and display
cal += '</tr></table>';

document.querySelector('.display').innerHTML = cal;