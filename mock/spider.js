var cheerio = require('cheerio')
var http = require('http')
var fs = require('fs')

function spider(url, route) {
    http.get(url + route, function (res) {
  
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
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title:title.text().trim(),
                    url:url + title.attr('href'),
                    desc: abstract.text().trim(),
                    time: time.attr('data-shared-at'),
                })
            })

            fs.writeFile('static/blog.json', JSON.stringify(objs), function (err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        })
    })
}

spider('http://www.jianshu.com','/u/64467c788eb7')
