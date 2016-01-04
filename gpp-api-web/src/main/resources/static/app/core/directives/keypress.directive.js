/**
 * Created by visagan on 1/1/16.
 */
angular
    .module('app.core.directives')
    .directive('tgtKeyPress', TgtKeyPress);

function TgtKeyPress() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            $element.bind("keypress", function(event) {
                var keyCode = event.which || event.keyCode;

                if (keyCode == $attrs.tgtKeyCode) {
                    $scope.$apply(function() {
                        $scope.$eval($attrs.tgtKeyPress, {$event: event});
                    });
                }
            });
        }
    };
}