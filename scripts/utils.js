require('dotenv').config();
var Dropbox = require('dropbox').Dropbox;
const fetch = require("node-fetch");

const dbx = new Dropbox({
    accessToken: process.env.DBX_ACCESS_TOKEN,
    fetch
});

saveDropbox = function(contents, filename) {
    dbx.filesUpload({path: '/' + filename, contents: contents})
        .then(function(response) {
            alert("File saved!!");
        })
        .catch(function(error) {
            console.error("Error");
        });
};

function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var line = '';
    var result = '';
    var columns = [];

    var i = 0;
    for (var j = 0; j < array.length; j++) {
        for (var key in array[j]) {
            var keyString = key + "";
            keyString = '"' + keyString.replace(/"/g, '""') + '",';
            if (!columns.includes(key)) {
                columns[i] = key;
                line += keyString;
                i++;
            }
        }
    }

    line = line.slice(0, -1);
    result += line + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var j = 0; j < columns.length; j++) {
            var value = (typeof array[i][columns[j]] === 'undefined') ? '' : array[i][columns[j]];
            var valueString = value + "";
            line += '"' + valueString.replace(/"/g, '""') + '",';
        }

        line = line.slice(0, -1);
        result += line + '\r\n';
    }

    return result;
};

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
};

module.exports.saveDropbox = saveDropbox;
module.exports.JSON2CSV = JSON2CSV;
module.exports.downloadCSV = downloadCSV;