//var divTags = document.getElementsByTagName('div');
//console.log(document.getElementsByTagName('div')[1]);
//console.log(document.getElementsByClassName('vcard'));


var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');

//firstNameEl.addEventListener('click', function() { firstNameEl.innerHTML = 'Oliver Modified'; } );


var info = {
    firstName: "Jerome",
    lastName: "Coloma"
};


firstNameEl.innerHTML = info.firstName;
lastNameEl.innerHTML = info.lastName; 