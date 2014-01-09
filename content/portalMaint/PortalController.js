'use strict'
/* 
    Written By: John D Sanders
    Last Update: 11/9/2013
    Description: Angular/Jquery portal template with drag and drop portlets.
*/
var Portal = angular.module("Portal", []);
var objPortlet = [];

Portal.controller('MainController', ['$scope', function ($scope) {
    $scope.objUser = [
        {
            userId: 1,
            userName: 'John D Sanders',
            IsAdmin: true,
            IsValid: true
        }
    ];
    $scope.objPortlet = [
        {
            portletName: "EPIC",
            portletTop: 0,
            portletLeft: 0,
            portletType: "Small",
            portletUrl: 'http://production.lacoemis.org',
            portletImage: 'http://www.placehold.it/144x85&text=graphic',
            portletMessage: 'Epic SIS'
        },
        {
            portletName: "SPED4",
            portletTop: -155,
            portletLeft: 465,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x85&text=graphic',
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
            portletImage: 'http://www.placehold.it/144x85&text=graphic',
            portletMessage: ''
        },
        {
            portletName: "FRM",
            portletTop: -465,
            portletLeft: 0,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x85&text=graphic',
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
            portletUrl: 'content/portlet1/portlet1.html',
            portletImage: '',
            portletMessage: ''
        },
        {
            portletName: "ANY 2",
            portletTop: -775,
            portletLeft: 465,
            portletType: "Small",
            portletUrl: 'http://www.seitmc.com',
            portletImage: 'http://www.placehold.it/144x85&text=graphic',
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


function openPortlet(url, portletName) {
    if (portletName === "ANY 2") {
        $("#dialog-form").dialog("open");
    }
    else {
        if (url.indexOf('http://') != -1)
            window.open(url, '_blank', "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=1000, height=800");
        else
            window.open(url, '_blank', "toolbar=no, scrollbars=no, resizable=yes, top=0, left=0, width=1000, height=800");
    }
};
