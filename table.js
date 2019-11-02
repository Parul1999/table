var a = document.getElementById("add");
a.addEventListener('click', function() {
    var table = document.getElementById("tableClass");
    var row = document.createElement("tr");
    var nameVal = document.getElementById("name").value;
    var nameNode = document.createTextNode(nameVal);
    var nameData = document.createElement("td");
    nameData.appendChild(nameNode);
    row.appendChild(nameData);


    var EMAIL = document.getElementById("email").value;
    var textNode = document.createTextNode(EMAIL);
    var EMAILtd = document.createElement("td");
    EMAILtd.appendChild(textNode);
    row.appendChild(EMAILtd);

    var PHONE = document.getElementById("phone").value;
    var textNode = document.createTextNode(PHONE);
    var PHONEtd = document.createElement("td");
    PHONEtd.appendChild(textNode);
    row.appendChild(PHONEtd);

    var ADDRESS = document.getElementById("address").value;
    var textNode = document.createTextNode(ADDRESS);
    var ADDRESStd = document.createElement("td");
    ADDRESStd.appendChild(textNode);
    row.appendChild(ADDRESStd);

    var button = document.createElement("button");
    var textNode = document.createTextNode("DELETE");
    var buttontd = document.createElement("td");
    button.appendChild(textNode);
    buttontd.appendChild(button);
    row.appendChild(buttontd);
    table.appendChild(row);

    button.addEventListener('click', function() {
        table.removeChild(row);
    });
});