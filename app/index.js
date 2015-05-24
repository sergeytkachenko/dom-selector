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

			.state('root.list', {
				url: '/',
				views: {
					'container@': {
						templateUrl: 'app/container/list/list.html',
						controller: 'ListCtrl'
					}
				}
			})

			.state('root.attr', {
				url: '/attr',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/add.html',
						controller: 'AttrCtrl'
					}
				}
			})

			.state('root.attr.add', {
				url: '/add',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/add.html',
						controller: 'AttrCtrl'
					}
				}
			})

			.state('root.attr.edit', {
				url: '/edit/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/add.html',
						controller: 'AttrCtrl'
					}
				}
			})

			.state('root.attr.remove', {
				url: '/remove/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/remove.html',
						controller: 'AttrCtrl'
					}
				}
			});

        $urlRouterProvider.otherwise('/');
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
