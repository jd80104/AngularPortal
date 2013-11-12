/* 
    Written By: John D Sanders
    Last Update: 11/9/2013
    Description: Angular/Jquery portal template with drag and drop portlets.
*/
$(document).ready(function () {
    $("[class^=moveablePortlet]")
        .draggable({
            grid: [155, 155],
            containment: '#portalArea'
        })
        .mouseover(function (event) {
            console.log($(event.target).attr("data-portletName"));
        });
        //.resizable({
        //    grid: 155,
        //    containment: '#portalArea'
    //});
});

$("[class^=moveablePortlet]").click(function (event) {
    //alert("clicked" + event.type);
});