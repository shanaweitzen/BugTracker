'use strict';

/**
 * @ngdoc function
 * @name bugtrackerApp.controller:BugboardCtrl
 * @description
 * # BugboardCtrl
 * Controller of the bugtrackerApp
 */
angular.module('bugtrackerApp')
  .controller('BugboardCtrl', function($log, $scope) {


  	$scope.editedBug = {};
  	$scope.currentBug = null;

    this.detailsVisible = true;
    this.currentBugId = null;
    this.currentBug = null;//We store a reference to the currently selected story
    this.editedBug = {}; //store a ref to a copy of the currently selected story 
    										//so that we can edit it without affecting the original.
    
  this.statuses = [
     	{name: 'Backlog'},
     	{name: 'In Progress'},
     	{name: 'QA'},
     	{name: 'Complete'}
    ];

    this.bugs = [
            {
                title: 'First story',
                description: 'Our first story.',
                status: 'Backlog',
                id: '1'
            },
            {
                title: 'Second story',
                description: 'Dosequies something.',
                status: 'In Progress',
                id: '2',
            },
            {
                title: 'Third story',
                description: 'Third on the rise.',
                status: 'Complete',
                id: '3',

            },
            {
                title: 'Fourth story',
                description: 'Lucky numba fo',
                criteria: 'Criteria pending.',
                status: 'QA',
                id: '4',

            }
        ];



 	this.newBug = {
				title: '',
				description: '',
				status: 'Backlog',
				id: ''
	};

	this.createBug = function(){
			this.bugs.$add(this.newBug).then(function(){
				this.newBug = {
					title: '',
					description: '',
					status: 'Backlog',
					id: ''
				};
			});
		};

		//This method gets called when a bug is selected in the view.
 		this.setCurrentBug = function (bug) {
            $log.debug(bug);
            this.currentBugId = bug.id;
            this.currentBug = bug;//bug param gets assigned to the currentStory property
            this.editedBug = angular.copy(this.currentBug);//use angular.copy to store a copy of currentBug as editedBug.
            //$log.debug("this.currentBug", this.currentBug);

        };

    this.isSelectedBug = function(bug) {
    	//$log.debug("isSelected", bug);
   		return this.selected === bug;

   	};
		//The updateBug method gets called when a bug is currently selected and the Update button is clicked.
		this.updateBug = function() {
				var fields = ['title', 'description'];
				fields.forEach(function(field) {
					this.currentBug[field] = this.editedBug[field];
				});

				this.resetForm();
		};




  });