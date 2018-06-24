angular.module('myApp', [])
    .directive('daterangepicker', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {},
            controller: ['$scope', function($scope) {

                console.log('aaaaaaaaa');
            }],
            link: function(scope, element, attr) {
                var option = {
                    showDropdowns: true,
                    singleDatePicker: true,
                    timePicker: true,
                    timePicker24Hour: true,
                    locale: {
                        format: "YYYY-MM-DD HH:mm:ss",
                        applyLabel: "确定",
                        cancelLabel: "取消",
                        daysOfWeek: [
                            "日",
                            "一",
                            "二",
                            "三",
                            "四",
                            "五",
                            "六"
                        ],
                        monthNames: [
                            "一月",
                            "二月",
                            "三月",
                            "四月",
                            "五月",
                            "六月",
                            "七月",
                            "八月",
                            "九月",
                            "十月",
                            "十一月",
                            "十二月"
                        ],
                    }
                };
                element.daterangepicker(option, function(start, end, label) {});
            }
        }
    });