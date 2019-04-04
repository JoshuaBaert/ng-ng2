(function () {
    'use strict';
    angular.module('app.components.people')
        .component('people', {
            templateUrl: '/app/components/people/people.html',
            controller: PeopleController,
            controllerAs: 'vm',
            bindToController: true,
        });

    PeopleController.$inject = ['dataservice', '$q'];

    function PeopleController(dataservice, $q) {
        var vm = this;
        vm.people = [];

        activate();

        function activate() {
            var promises = [getPeople()];
            return $q.all(promises).then(function () {
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
