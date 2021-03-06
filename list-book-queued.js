'use strict'

const
    async = require('async'),
    file = require('file'),
    rdfParser = require('./lib/rdf-parser.js'),

    work = async.queue(function(path, done){
        rdfParser(path, function(err, doc){
            console.log(doc);
            done();
        });
    }, 1000);

console.log('beginning directory walk');
file.walk(__dirname + '/project/cache', function(err, dirPath, dirs, files){
    files.forEach(function(path) {
        if(path.indexOf('.DS_Store')<0){
            work.push(path);
        } 
    });
});