var cheerio = require('cheerio')
var http = require('http')
var fs = require('fs')

function spider(url) {
    http.get(url, function (res) {
  
        var objs = []
        var html = ''
        res.setEncoding('utf-8')
        res.on('data', function (chunk) {
            html += chunk
        })
        res.on('end', function () {
            var $ = cheerio.load(html)
            $('ul .content').each(function (i, e) {
                var title = $(e).find('.title')
                var abstract = $(e).find('.abstract')
                var time = $(e).find('.time')
                
                objs.push({
                    id: i,
                    title:title.text().trim(),
                    link:url + title.attr('href'),
                    abstract: abstract.text().trim(),
                    time: time.attr('data-shared-at'),
                })
            })

            fs.writeFile('mock/message.json', JSON.stringify(objs), function (err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        })
    })
}

spider('http://www.jianshu.com/u/64467c788eb7')
