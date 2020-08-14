// --- LOADING MODULES
var express = require('express'),
    body_parser = require('body-parser'),
    utils = require('./scripts/mymods.js');
var saveDropbox = utils.saveDropbox;
var JSON2CSV = utils.JSON2CSV;

// --- INSTANTIATE THE APP
var app = express();

// --- ROUTING
require('./scripts/routes')(app);

// --- STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + "/js"));
app.use('/shared', express.static(__dirname + '/shared'));
app.use(body_parser.json({limit: "50mb"}));
app.use(body_parser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// --- VIEW LOCATION, SET UP SERVING STATIC HTML
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.post('/experiment-data', function(request, response) {
    console.log("Posting data")
    // Convert to CSV
    DATA_CSV = JSON2CSV(request.body);

    // Get ID_DATE
    var rows = DATA_CSV.split('\n');
    ID_DATE_index = rows[0].split(',').indexOf('"ID_DATE"');
    ID_DATE = rows[1].split(',')[ID_DATE_index];
    ID_DATE = ID_DATE.replace(/"/g, "");

    DAYNUMBER_index = rows[0].split(',').indexOf('"daynumber"');
    DAYNUMBER = rows[1].split(',')[DAYNUMBER_index];
    DAYNUMBER = DAYNUMBER.replace(/"/g, "");
    filename = "mindfulSelf_main/" + ID_DATE + "_day_" + DAYNUMBER + ".csv";

    saveDropbox(DATA_CSV, filename);
    response.end();
});


app.post('/pilot-experiment-data', function(request, response) {
    console.log("Posting pilot data")
    // Convert to CSV
    DATA_CSV = JSON2CSV(request.body);

    // Get ID_DATE
    var rows = DATA_CSV.split('\n');
    ID_DATE_index = rows[0].split(',').indexOf('"ID_DATE"');
    ID_DATE = rows[1].split(',')[ID_DATE_index];
    ID_DATE = ID_DATE.replace(/"/g, "");

    DAYNUMBER_index = rows[0].split(',').indexOf('"daynumber"');
    DAYNUMBER = rows[1].split(',')[DAYNUMBER_index];
    DAYNUMBER = DAYNUMBER.replace(/"/g, "");
    filename = "mindfulSelf_pilot/" + ID_DATE + "_pilotday_" + DAYNUMBER + ".csv";

    saveDropbox(DATA_CSV, filename);
    response.end();
});



app.post('/polysub-experiment-data', function(request, response) {
    console.log("Posting data")
    // Convert to CSV
    DATA_CSV = JSON2CSV(request.body);

    // Get ID_DATE
    var rows = DATA_CSV.split('\n');
    ID_DATE_index = rows[0].split(',').indexOf('"ID_DATE"');
    ID_DATE = rows[1].split(',')[ID_DATE_index];
    ID_DATE = ID_DATE.replace(/"/g, "");

    DAYNUMBER_index = rows[0].split(',').indexOf('"daynumber"');
    DAYNUMBER = rows[1].split(',')[DAYNUMBER_index];
    DAYNUMBER = DAYNUMBER.replace(/"/g, "");
    filename = "mindfulSelf_polysub/" + ID_DATE + "_day_" + DAYNUMBER + ".csv";
    saveDropbox(DATA_CSV, filename);
    response.end();
});


// --- START THE SERVER
var server = app.listen(process.env.PORT, function(){
    console.log("Listening on port %d", server.address().port);
});