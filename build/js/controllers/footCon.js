app.controller('footCon', function($scope, $http) {
    $scope.chVw = function(v) {
        if (typeof v == 'string') v = JSON.parse(v);
        $('#main-view').fadeOut(300, function() {
            angular.element('body').scope().currState = '/views/' + v.state + '.html';
            angular.element('body').scope().$digest();
            $('#main-view').fadeIn(300);
        })
    }
});
