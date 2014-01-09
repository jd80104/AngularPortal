
var myApp = angular.module('myApp', ['ngGrid', 'ui.bootstrap']);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.titleText = 'IEP Form Lock Monitoring Service';
}]);

myApp.controller('FormsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.radioModel = 'Production';
    $scope.resultText = '';
    $scope.Forms = {};

    $scope.myFormList = {
        data: 'Forms.details',
        columnDefs: [
            { field: 'FormId', displayName: 'FormId', width: '85px'},  //cellTemplate: hdnTemplate( 'FormId' ) },
            { field: 'FormName', displayName: 'Form', width: '33%' },
            { field: 'LockedBy', displayName: 'User' },
            { field: 'LockedSince', displayName: 'Locked Since', width: '200px'},
            { field: '', cellTemplate: template('doSelect', 'Unlock'), width: '100px' },
        ],
        multiSelect: false,
        showGroupPanel: true,
        showSelectionCheckbox: false,
        jqueryUIDraggable: true,
        jqueryUITheme: true,
        selectedItems: [],
    };

    $scope.doSelect = function () {
        var formId = this.row.entity.FormId;
        var formName = this.row.entity.FormName;
        var formIndex = this.row.rowIndex;
        var formRow = this.row.entity;
        if (formId !== undefined && formId > 0) {
            $http({
                method: 'POST',
                url: '/Content/WebServices/FormLockingMonitorService.asmx/UnlockFormById',
                data: '{"formId": "' + this.row.entity.FormId.toString() + '", "whichEnvironment": "' + $scope.radioModel.toString() + '"}',
                headers: { "Content-Type": "application/json" },
            })
                .success(function (data, status) {
                    toastr.success("Unlocked Form " + formId.toString() + " " + formName.toString());
                    $scope.remove($scope.Forms.details, 'FormId', formId);
                })
                .error(function (data, status) {
                    toastr.error("Get method errored");
                });
        }
    };

    $scope.remove = function remove(array, property, value) {
        $.each(array, function (index, result) {
            if (result[property] == value) {
                array.splice(index, 1);
            }
        });
    };

    $scope.$watch('radioModel', function () {
        toastr.info("Attempting connection to " + $scope.radioModel);
        $scope.statusMessage = "You are connecting to ";
        $('#divProgressBar').show();
        GetLockedForms();
    });

    // Functions
    function GetLockedForms() {
        $scope.Forms.details = {};
        $('#connectionMessage').hide();
        $http({
            method: 'POST',
            url: '/Content/WebServices/FormLockingMonitorService.asmx/GetLockedForms',
            data: '{"whichEnvironment": "' + $scope.radioModel.toString() + '"}',
            headers: { "Content-Type": "application/json" },
        })
        .success(function (data, status) {
            $('#divProgressBar').hide();
            $scope.Forms.details = JSON.parse(data.d);
            $scope.statusMessage = "You are connected to ";
            if (JSON.parse(data.d) == "fail") {
                $('#connectionMessage').show();
                $scope.resultText = "Could not connect to " + $scope.radioModel.toString();
                $scope.statusMessage = "Could not connect to ";
            }
        })
        .error(function (data, status) {
            $('#divProgressBar').hide();
            $('#connectionMessage').show();
            $scope.statusMessage = "You are not connected to "
            $scope.resultText = " Error retrieving data from " + $scope.radioModel.toString();
        });
    }
}]);

myApp.provider('FormService', function () {
    return {
        $get: function () {

        },

        $set: function () {

        },

        getLockedForms: function () {

        },

        unlockForm: function () {

        }
    }

});

var template = function (c, n) {
    return '<button data-ng-click="' + c + '()">' + n + '</button>';
}

var hdnTemplate = function (val) {
    return '<label style="display: none;">' + val + '</label>'; 
}