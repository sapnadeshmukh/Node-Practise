var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000);
app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id+ ' and name: ' + req.params.name);
 });
//  app.listen(3000);