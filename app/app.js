require('angular');
var MainController = require('./controllers/MainController');
var CatService = require('./services/CatService');

var app = angular.module('app', []);

app.controller('MainController', ['$scope', MainController]);
app.service('CatService', [CatService]);