// --- LOADING MODULES
var express = require('express'),
    body_parser = require('body-parser'),
    utils = require('./scripts/mymods.js');
var saveDropbox = utils.saveDropbox;
var JSON2CSV = utils.JSON2CSV;

// --- INSTANTIATE THE APP
var app = express();

// --- STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + "/js"));
app.use('/shared', express.static(__dirname + '/shared'));
app.use(body_parser.json());

// --- VIEW LOCATION, SET UP SERVING STATIC HTML
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// --- ROUTING
app.get('/', function(request, response) {
    response.render('index.html');
});

app.get('/finish', function(request, response) {
    response.render('finish.html');
});

app.post('/experiment-data', function(request, response) {
    // Convert to CSV
    DATA_CSV = JSON2CSV(request.body);

    // Get ID_DATe
    var rows = DATA_CSV.split('\n');
    ID_DATE_index = rows[0].split(',').indexOf('"ID_DATE"');
    ID_DATE = rows[1].split(',')[ID_DATE_index];
    ID_DATE = ID_DATE.replace(/"/g, "");
    filename = ID_DATE + ".csv";
    saveDropbox(DATA_CSV, filename);
    response.end();
});


// --- START THE SERVER
var server = app.listen(process.env.PORT, function(){
    console.log("Listening on port %d", server.address().port);
});