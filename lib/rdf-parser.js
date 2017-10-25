'use strict'

const
    fs = require('fs'),
    cheerio = require('cheerio');

    module.exports = function(filename, callback){
        fs.readFile(filename, function(err, data){
            if(err) { 
                return callback(err)
            }

            let
                $ = cheerio.load(data.toString()),
                collect = function(index, elem){
                    console.log('collect::: '+elem.html());
                    return $(elem).text();
                };
                
            callback(null, {
                _id: $('pgterms\\:ebook').attr('rdf:about').replace('ebooks/',''),
                title: $('dcterms\\:title').text(),
                authors: $('pgterms\\:agent pgterm\\:name').map(collect),
                subjects: $('[rdf\\:resource$="/LCSH"] ~ rdf\\:value').map(collect)
            });
        });
    };
