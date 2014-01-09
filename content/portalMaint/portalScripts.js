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

    $("#dialog-form").dialog({
        autoOpen: false,
        height: 600,
        width: 800,
        modal: true,
        buttons: {
            "Some Action": function () {

            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            allFields.val("").removeClass("ui-state-error");
        }
    });

});

$("[class^=moveablePortlet]").click(function (event) {
    //alert("clicked" + event.type);
});

