'use strict'
/* 
    Written By: John D Sanders
    Last Update: 11/9/2013
    Description: Angular/Jquery portal template with drag and drop portlets.
*/
var lacoePortal = angular.module("lacoePortal", []);
var objPortlet = [];

lacoePortal.controller('MainController', ['$scope', function ($scope) {
    $scope.objPortlet = [
        {
            portletName: "EPIC",
            portletTop: 0,
            portletLeft: 0,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x100&text=graphic',
            portletMessage: 'Epic SIS'
        },
        {
            portletName: "SPED4",
            portletTop: -155,
            portletLeft: 465,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x100&text=graphic',
            portletMessage: ''
        },
        {
            portletName: "PR Tool",
            portletTop: -155,
            portletLeft: 155,
            portletType: "Large",
            portletUrl: 'http://www.seitmc.com',
            portletImage: '',
            portletMessage: 'This is the PR Tool. Click anywhere on the portlet to access the tool.'
        },
        {
            portletName: "ILP",
            portletTop: -310,
            portletLeft: 465,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x100&text=graphic',
            portletMessage: ''
        },
        {
            portletName: "FRM",
            portletTop: -465,
            portletLeft: 0,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x100&text=graphic',
            portletMessage: 'Free and Reduced Meals'
        },
        {
            portletName: "HRIS",
            portletTop: -465,
            portletLeft: 155,
            portletType: "Large",
            portletUrl: 'http://www.seitmc.com',
            portletImage: '',
            portletMessage: 'Human Resources System'
        },
        {
            portletName: "ANY 1",
            portletTop: -620,
            portletLeft: 0,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x100&text=graphic',
            portletMessage: ''
        },
        {
            portletName: "ANY 2",
            portletTop: -775,
            portletLeft: 465,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x100&text=graphic',
            portletMessage: ''
        },
        {
            portletName: "ANY 3",
            portletTop: -1240,
            portletLeft: 155,
            portletType: "Large",
            portletUrl: 'http://www.seitmc.com',
            portletImage: '',
            portletMessage: ''
        },
    ];
}]);
