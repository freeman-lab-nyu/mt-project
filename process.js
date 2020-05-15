//get input from CSV file
const fs = require('fs') 

var mtdata;
var data; 
var bin_no;
var score;
var cond_solution;

//change file name here
fs.readFile('example.csv', (err, data) => { 
    if (err) throw err; 
    data = data.toString().split(',');
    console.log(data); 
});

//get MT data results from R api
if (data[1] == "mad"){
	//find bin number of MAD score
	bin_no = parseFloat(mtdata[0])%praseInt(data[5]);

	//divide bin number by total number of bins
	score = bin_no/parseInt(data[4]);

	//analyze condition codes here
	if (data[3] == "plus"){
		cond_solution = parseInt(mtdata[2]) + parseInt(mtdata[3]);

	}
	else if (data[3] == "minus"){
		cond_solution = parseInt(mtdata[2]) - parseInt(mtdata[3]);
	}
	else if (data[3] == "x"){
		cond_solution = parseInt(mtdata[2]) * parseInt(mtdata[3]);
	}

} 
else if (data[1] == "auc"){

	//find bin number of MAD score
	bin_no = parseFloat(mtdata[1])%praseInt(data[5]);

	//divide bin number by total number of bins
	score = bin_no/parseInt(data[4]);

}
else {
	//find bin number of MAD score
	bin_no = parseFloat(mtdata[2])%praseInt(data[5]);

	//divide bin number by total number of bins
	score = bin_no/parseInt(data[4]);

}