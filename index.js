'use strict';

const cheerio = require('cheerio');
const rp = require('request-promise');

module.exports = {

	scrapePage : function(url, selector, context){
		
		return rp(url)
			.then(function(html){				
				var $ = cheerio.load(html);
				var target = !context ? $(selector).first() : $(selector, context).first();

				return target;
			})
			.catch(function(err){
				console.log("EGAD! Something when wrong while scraping");
				console.log(err.message);
				
				return;
			});	
	}	
		
};
