app.controller('contCont', function($scope, $http) {
    $scope.showCont = false;
    $scope.contInfo = [{
        lbl: 'Location',
        data: 'Suite 2126, The Land Title Building, 100 S Broad St, Philadelphia, PA 19110'
    }, {
        lbl: 'Phone',
        data: '215-592-9400'
    }, {
        lbl: 'Fax',
        data: '215-574-0699'
    }, {
        lbl: 'E-Mail',
        data: 'ghnlawyer@yahoo.com',
        isEm:true
    }];
    $scope.apk = 'AIzaSyAH6FaHnJI3G1OcDsMjU3Kh9Roz5geJ-aA'; //is there ANY way to store this on the back-end, or on the host or something?
});

