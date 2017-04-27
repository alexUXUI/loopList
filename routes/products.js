var express = require('express');
var router = express.Router();
var inspect = require('eyes').inspector({styles: {all: 'magenta'}});
var request = require('request');
var cheerio = require('cheerio');
var config = require('../config/config.json')

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  parser(id).then(data => res.json(data));
});

const getDescription = (start, end, html) => {
  const HTMLregex = /(<([^>]+)>)/ig;
  var result = html.replace(HTMLregex, "");
  try {
    var description = result.match(`${start}(.*)${end}`)[1];
    if(description) {
      return description;
    } else {
      return ''
    }
  } catch (error) {
    console.log(error);
  }
}

const parser = (id) => {
  return new Promise((res, rej) => {
    request(`${ config.DEV.loopListPage }${ id }`, (err, resp, html) => {
      if(err) res.statusCode(404)

      if (!err) {
        $ = cheerio.load(html);
        let node = $('*');

        let jsonPayload = {};
        jsonPayload.title = $("title").text();
        jsonPayload.name = $(".container .card .product-name").text();
        jsonPayload.image = $('.card .product-image-group .product-image-main').attr('src');
        jsonPayload.description = getDescription('Description:', 'earth.', html);

        inspect(jsonPayload)
        res(jsonPayload)
      }
    });
  });
}

module.exports = router;
