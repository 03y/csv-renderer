// Can you help me with my homework?
// I need to create a website with HTML and JavaScript.
// The user should be able to upload a CSV file.
// The CSV file should then be parsed and the data should be displayed in a HTML table on the page.

function upload() {
    var fileUpload = document.getElementById("fileUpload");
    document.getElementById("name").innerHTML = fileUpload.files[0].name;
    var reader = new FileReader();
    reader.onload = function (e) {
        var table = document.createElement("table");
        var rows = e.target.result.split("\n");
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].split("\",");
            if (cells.length > 1) {
                var row = table.insertRow(-1);
                for (var j = 0; j < cells.length; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = cells[j].replace(/\"/g, "");   // learning vim has payed off :)
                }
            }
        }
        var dvCSV = document.getElementById("table");
        dvCSV.innerHTML = "";
        dvCSV.appendChild(table);
    }
    reader.readAsText(fileUpload.files[0]);
}