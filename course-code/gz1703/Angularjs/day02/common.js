// var baseUrl = 'http://localhost:81/';

var commonApp = angular.moudle('commonApp', ['ngSanitize']);

commonApp.value('baseurl', function(){
    return 'http://localhost:81/';
})

commonApp.factory('calcFactory', function(){
    return {
        sum: function(n1, n2){
            return n1 + n2;
        }
    }
})


commonApp.service('calcService', function(){
    this.sum = function(n1, n2){
        return n1 + n2;
    }
})

commonApp.provider('clacProvider', function(){
    this.symbol = "+";
    this.name = "Tom";
    
    this.$get = function(){
        return {
            operation: function(n1, n2){
                return n1 + n2;
                if(this.symbol == '+')
            }
        };
    }
})