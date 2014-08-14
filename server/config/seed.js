/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Beer = require('../api/beer/beer.model')
var Brewer = require('../api/brewer/brewer.model')

//BREWERS SEED DATA
Brewer.find({}).remove(function(){
  Brewer.create(
      {
         name: "Lowertown Brewery",
         Address: {
          StreeNo: "73",
          StreetName: "York St.",
          City: "Ottawa",
          Provice: "ON",
          Country: "CA",
          Postal: "K1N 5T2"
         },
         Contact: {
          Phone: "613-722-1454",
          email: "",
          url: "",
          twitter: "",
          facebook: "",
         },
         Logo: ""
      },
      {
         name: "Waller St. Brewing",
         Address: {
          StreeNo: "14",
          StreetName: "Waller St.",
          City: "Ottawa",
          Provice: "ON",
          Country: "CA",
          Postal: "K1N 9C4"
         },
         Contact: {
          Phone: "",
          email: "",
          url: "",
          twitter: "",
          facebook: "",
         },
         Logo: ""
      },
      {
         name: "Dominion City Brewing Co.",
         Address: {
          StreeNo: "5510",
          StreetName: "Canotek Rd.",
          City: "Ottawa",
          Provice: "ON",
          Country: "CA",
          Postal: "K1J 9J4"
         },
          Contact: {
          Phone: "613-688-6207",
          email: "",
          url: "",
          twitter: "",
          facebook: "",
         },
         Logo: ""
      })
})
//BEERS SEED DATA
Beer.find({}).remove(function(){
  Beer.create(
        {
        name: "Town & Country Blonde Ale",
        description: "citrusy, rustic, bright.  With Town & Country, we set out to brew a refreshing, easy-drinking blonde ale with a little something extra. Like its namesake, this beer is about contrast, combining soft malty sweetness and biscuit notes with midly spicy and citrusy hop crispness.",
        specs: {
          ABV: "5.5",
          IBU: "15",
          OG: "1.054",
          FG: "1.013"
        }
      },

      {
        name: "Earl Grey Marmalade Saison",
        description: "tangy, floral, tart.  This is our reimagining of a rustic agrarian beer style from the French-speaking Wallonian region of southern Belgium. Brewed with fresh zested oranges and Bridgehead organic Earl Grey tea, Dominion City Earl Grey Marmalade Saison pours a distinctive rusty copper colour with a delicious bergamot aroma . Flavours include contrasting fruity, spicy and tart notes with phenolic and fruity esters complementing a dry, moderately bitter finish. It all adds up to one deliciously unique and refreshing pint!",
        specs: {
          ABV: "5.5",
          IBU: "21",
          OG: "1.053",
          FG: "1.011"
        }
      })
})
//THING DATA SEED
Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


//USER DATA SEED
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});