app.controller('navCont', function($scope) {
    $scope.navs = [{
        state: 'home',
        desc: 'Home'
    }, {
        state: 'pract',
        desc: 'Practice Areas'
    }, {
        state: 'cases',
        desc: 'Noteworthy Cases'
    }, {
        state: 'pub',
        desc: 'Publications/Lectures'
    }, {
        state: 'contact',
        desc: 'Contact'
    }];
    $scope.chVw = function(v) {
        console.log('v',v)
        $('#main-view').fadeOut(300, function() {
            angular.element('body').scope().currState = '/views/' + v.state + '.html';
            angular.element('body').scope().$digest();
            $('#main-view').fadeIn(300);
        })
    };
})
