'use strict';

import FrameCtrl from '../app/frame/frame.controller';
import NavCtrl from '../app/components/right/nav.controller';
import ListCtrl from '../app/container/list/list.controller.js';
import AttrCtrl from '../app/container/attr/attr.controller.js';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .controller('FrameCtrl', FrameCtrl)
    .controller('NavCtrl', NavCtrl)
	.controller('ListCtrl', ListCtrl)
	.controller('AttrCtrl', AttrCtrl)

	.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
			.state('root', {
				abstract: true,
				views: {
					'frame': {
						templateUrl: 'app/frame/frame.html',
						controller: 'FrameCtrl'
					},
					'nav': {
						templateUrl: 'app/components/right/nav.html',
						controller: 'NavCtrl'
					}
				}
			})

			.state('root.attr', {
				abstract: true
			})

			.state('root.attr.list', {
				url: '/attr/list',
				views: {
					'container@': {
						templateUrl: 'app/container/list/list.html',
						controller: 'ListCtrl'
					}
				}
			})

			.state('root.attr.add', {
				url: '/attr/add',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/add.html',
						controller: 'AttrCtrl'
					}
				}
			})

			.state('root.attr.edit', {
				url: '/attr/edit/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/add.html',
						controller: 'AttrCtrl'
					}
				}
			})

			.state('root.attr.remove', {
				url: '/attr/remove/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/remove.html',
						controller: 'AttrCtrl'
					}
				}
			});

        $urlRouterProvider.otherwise('/attr/list');
    })

	.directive('ngEnter', function () { // создаем свою директиву ng-enter
        return function (scope, element, attrs) {
            element.bind('keydown keypress', function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });
