var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike= {
  name: 'First And Pike',
  min: 23,
  max: 65,
  regCookieSales: 6.3,
  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    return customers;
  },
  cookiesArray: [],
  cookiesAtTime: function () {
    for (var i = 0; i < times.length; i++){ //loop through the times
      var cookiesNow = Math.floor(this.randomCrowd() * this.regCookieSales);
      this.cookiesArray.push(cookiesNow);
    }
  },
  //this one works!! update the rest of them//
  domForCookies: function () {
    this.cookiesAtTime();
    var ul = document.createElement('ul');
    var container = document.getElementById('cookieEstimates');
    var title = document.createElement('p');
    title.innerHTML = this.name;
    container.appendChild(title);
    container.appendChild(ul);

    for (var i = 0; i < this.cookiesArray.length; i++) {
      var liElement = document.createElement('li');
      var time = times[i];
      liElement.innerHTML = time + ' : ' + this.cookiesArray[i] + ' cookies';
      ul.appendChild(liElement);
    }
  }
};

var seatac= {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  regCookieSales: 1.2,
  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    return customers;
  },
  cookiesArray: [],
  cookiesAtTime: function () {
    for (var i = 0; i < times.length; i++){ //loop through the times
      var cookiesNow = Math.floor(this.randomCrowd() * this.regCookieSales);
      this.cookiesArray.push(cookiesNow);
    }
  },
  domForCookies: function () {
    this.cookiesAtTime();
    var ul = document.createElement('ul');
    var container = document.getElementById('cookieEstimates');
    var title = document.createElement('p');
    title.innerHTML = this.name;
    container.appendChild(title);
    container.appendChild(ul);

    for (var i = 0; i < this.cookiesArray.length; i++) {
      var liElement = document.createElement('li');
      var time = times[i];
      liElement.innerHTML = time + ' : ' + this.cookiesArray[i] + ' cookies';
      ul.appendChild(liElement);
    }
  }
};


var seacenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  regCookieSales: 3.7,
  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    return customers;
  },
  cookiesArray: [],
  cookiesAtTime: function () {
    for (var i = 0; i < times.length; i++){ //loop through the times
      var cookiesNow = Math.floor(this.randomCrowd() * this.regCookieSales);
      this.cookiesArray.push(cookiesNow);
    }
  },
  domForCookies: function () {
    this.cookiesAtTime();
    var ul = document.createElement('ul');
    var container = document.getElementById('cookieEstimates');
    var title = document.createElement('p');
    title.innerHTML = this.name;
    container.appendChild(title);
    container.appendChild(ul);

    for (var i = 0; i < this.cookiesArray.length; i++) {
      var liElement = document.createElement('li');
      var time = times[i];
      liElement.innerHTML = time + ' : ' + this.cookiesArray[i] + ' cookies';
      ul.appendChild(liElement);
    }
  }
};


var caphill= {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  regCookieSales: 2.3,
  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    return customers;
  },
  cookiesArray: [],
  cookiesAtTime: function () {
    for (var i = 0; i < times.length; i++){ //loop through the times
      var cookiesNow = Math.floor(this.randomCrowd() * this.regCookieSales);
      this.cookiesArray.push(cookiesNow);
    }
  },
  domForCookies: function () {
    this.cookiesAtTime();
    var ul = document.createElement('ul');
    var container = document.getElementById('cookieEstimates');
    var title = document.createElement('p');
    title.innerHTML = this.name;
    container.appendChild(title);
    container.appendChild(ul);

    for (var i = 0; i < this.cookiesArray.length; i++) {
      var liElement = document.createElement('li');
      var time = times[i];
      liElement.innerHTML = time + ' : ' + this.cookiesArray[i] + ' cookies';
      ul.appendChild(liElement);
    }
  }
};


var alki= {
  name: 'Alki',
  min: 2,
  max: 4.6,
  regCookieSales: 1.2,
  //random number of people who show up at an hour
  randomCrowd: function () {
    var customers = parseInt(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    return customers;
  },
  cookiesArray: [],
  cookiesAtTime: function () {
    for (var i = 0; i < times.length; i++){ //loop through the times
      var cookiesNow = Math.floor(this.randomCrowd() * this.regCookieSales);
      this.cookiesArray.push(cookiesNow);
    }
  },
  domForCookies: function () {
    this.cookiesAtTime();
    var ul = document.createElement('ul');
    var container = document.getElementById('cookieEstimates');
    var title = document.createElement('p');
    title.innerHTML = this.name;
    container.appendChild(title);
    container.appendChild(ul);

    for (var i = 0; i < this.cookiesArray.length; i++) {
      var liElement = document.createElement('li');
      var time = times[i];
      liElement.innerHTML = time + ' : ' + this.cookiesArray[i] + ' cookies';
      ul.appendChild(liElement);
    }
  }
};

var stores =[pike, seatac, seacenter, alki, caphill];
for (var i = 0; i < stores.length; i++) {
  stores[i].domForCookies();
}
