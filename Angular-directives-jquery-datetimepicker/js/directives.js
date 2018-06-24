angular.module('myApp', [])
    .directive('datetimepicker', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {},
            controller: ['$scope', function($scope) {

            }],
            link: function(scope, element, attr) {
            	$.datetimepicker.setLocale('ch');  // 新版方法 $.datetimepicker.setLocale('ch');
                console.log(attr);
                var option = {
                    lang: "ch", //语言选择中文 注：旧版本 新版方法：$.datetimepicker.setLocale('ch');
                    format: attr.format || "Y-m-d", //格式化日期  Y-m-d H:i:s
                    timepicker: attr.timepicker || (attr.format && attr.format.indexOf("H") != -1) || false, //关闭时间选项
                    yearStart: attr.yearStart || 2000, //设置最小年份
                    yearEnd: attr.yearStart || 2050, //设置最大年份
                    todayButton:  attr.todayButton || true, //关闭选择今天按钮
                    step: attr.step || 60, 
                };
                console.log(option);
                element.datetimepicker(option);
            }
        }
    });