module.exports = function(app){

    // --- ROUTING
    app.get('/', function(request, response) {
        response.render('index.html');
    });

    app.get('/MindfulSelfPilot', function(request, response) {
        response.render('MindfulSelfPilot.html');
    });

    app.get('/MindfulSelfFull', function(request, response) {
        response.render('MindfulSelfFull.html');
    });

    app.get('/MindfulSelfPoly', function(request, response) {
        response.render('MindfulSelfPoly.html');
    });

    app.get('/finish', function(request, response) {
        response.render('finish.html');
    });

}