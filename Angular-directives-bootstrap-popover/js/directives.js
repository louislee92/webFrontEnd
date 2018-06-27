angular.module('myApp', [])
    .controller('ctrl', function($scope){
        $scope.code = '<a popover tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="hover" title="Dismissible popover" data-content="And here\'s some amazing content. It\'s very engaging. Right?">可消失的弹出框</a>';
        console.log($scope.code);
    })
    .directive('popover', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {},
            controller: ['$scope', function($scope) {
            }],
            link: function(scope, element, attr) {
                var options = {
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }
                element.popover(options);
            }
        }
    });