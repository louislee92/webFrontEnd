angular.module('myApp', [])
    .directive('myForm', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div>当前选择时间：{{myTime}}<br><input ng-model="myTime" datetimepicker /></div>',
            controller: ['$scope', function($scope){
            }],
            link: function(scope, element, attr){
            }
        };
    })
    .directive('datetimepicker', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {},
            controller: ['$scope', function($scope) {

            }],
            link: function(scope, element, attr) {
            	$.datetimepicker.setLocale('ch');  // 新版方法 $.datetimepicker.setLocale('ch');
                element.datetimepicker({
                    lang: "ch", //语言选择中文 注：旧版本 新版方法：$.datetimepicker.setLocale('ch');
                    format: "Y-m-d H:i:s", //格式化日期
                    timepicker: true, //关闭时间选项
                    yearStart: 2000, //设置最小年份
                    yearEnd: 2050, //设置最大年份
                    todayButton: true, //关闭选择今天按钮
                    step: 30, 
                });
            }
        }
    });