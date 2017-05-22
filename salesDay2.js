var table = document.getElementById('tablething');

//Constructor function for our store
function Store (name, max, min, avgCookies) {
  this.name=name;
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
  this.salesCalc = []; //array we will push our data from avg cookies * people into
  this.totalSales = 0;
}

//method for getting random customers
Store.prototype.avgCust = function () {
  var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
  return customers;
};

//Let's make the stores
var pike = new Store ('First and Pike', 65, 23, 6.3);
var seaTac = new Store ('SeaTac Airport', 24, 3, 1.2);
var seattleCenter = new Store ('Seattle Center', 38, 11, 3.7);
var capHill = new Store ('Capitol Hill', 38, 20, 2.3);
var alki = new Store ('Alki', 16, 2, 4.6);

//Now let's put the stores in one array - so we can loop through them later
var stores = [pike, seaTac, seattleCenter, capHill, alki];

//Let's list all the times that the stores are open
var times = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//For each time at each store, tell me the random # of people and the random # * avg cookies per hour
Store.prototype.cookiesAtTime = function () {
  for (var i = 0; i < times.length; i++){ //loop through the times
    this.salesCalc.push(Math.floor(this.avgCust() * this.avgCookies)); //push avg cust * avg cookies into salesCalc blank array
  }
  return this.salesCalc;
};

// Create total sales information
Store.prototype.generateSalesTotals = function () {
  for (var i = 0; i < this.salesCalc.length; i++) { //loop through the salesCalc (#s at time)
    this.totalSales += this.salesCalc[i]; //at each hour, add the total to totalSales
  }
  return this.totalSales; //outside the loop, return the #
};

//Creating a table
Store.prototype.renderTable = function() {
  //select the table element

  //Grab stuff
  var table = document.getElementById('tablething'); //grab the table
  var headerPlaces = document.getElementById('table_header'); //grab the table headers

  //Set variables
  var timesForCookies = this.cookiesAtTime(); //timesForCookies is going to be the # people/# cookies/per hour
  var timesData = []; //blank array we can push stuff into
  var headersForTable = ['Store location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total']; //array with our headers data
  var blankArr = []; //blank array we can push the headers into

  for (var q = 0; q < headersForTable.length; q++) { //cycle through the headers, push each one into the blank array
    blankArr.push('<td>' + headersForTable[q] + '</td>');
  }

  timesData.push('<td>' + this.name + '</td>' );

  for (var k = 0; k < timesForCookies.length; k++) {
    timesData.push('<td>' + timesForCookies[k] +'</td>');
  }
  timesData.push('<td>' + this.generateSalesTotals() + '</td>' );

  var header_row;//row for the headersForTable
  var new_row; //we have to put the tds in a row

//Put in the headers
  header_row = document.createElement('tr');
  var headerInfo = blankArr.join('');
  header_row.innerHTML = headerInfo;
  table.appendChild(header_row);

//Put in the row with the times data
  new_row = document.createElement('tr'); //the new row is a row
  new_row.innerHTML = timesData.join(''); //inside the new row, put the data array stuff
  table.appendChild(new_row); //put all that in the table in the DOM
};

//Run the table generator function
for (var i = 0; i < stores.length; i++) {
  stores[i].renderTable();
}
