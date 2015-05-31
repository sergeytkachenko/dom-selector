'use strict';

import FrameCtrl from '../app/frame/frame.controller';
import NavCtrl from '../app/components/right/nav.controller';

import ProjectListCtrl from '../app/container/project/list.controller.js';
import ProjectCtrl from '../app/container/project/add.controller.js';

import SiteListCtrl from '../app/container/site/list.controller.js';
import SiteCtrl from '../app/container/site/add.controller.js';

import CategoryListCtrl from '../app/container/category/list.controller.js';
import CategoryCtrl from '../app/container/category/add.controller.js';

import AttrListCtrl from '../app/container/attr/list.controller.js';
import AttrCtrl from '../app/container/attr/attr.controller.js';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .controller('FrameCtrl', FrameCtrl)
    .controller('NavCtrl', NavCtrl)

	.controller('ProjectListCtrl', ProjectListCtrl)
	.controller('ProjectCtrl', ProjectCtrl)

	.controller('SiteListCtrl', SiteListCtrl)
	.controller('SiteCtrl', SiteCtrl)

	.controller('CategoryListCtrl', CategoryListCtrl)
	.controller('CategoryCtrl', CategoryCtrl)

	.controller('AttrListCtrl', AttrListCtrl)
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

			.state('root.project', {
				abstract: true
			})

			.state('root.category', {
				abstract: true
			})

			.state('root.site', {
				abstract: true
			})

			.state('root.project.list', {
				url: '/project/list',
				views: {
					'container@': {
						templateUrl: 'app/container/project/list.html',
						controller: 'ProjectListCtrl'
					}
				}
			})
			.state('root.project.add', {
				url: '/project/add',
				views: {
					'container@': {
						templateUrl: 'app/container/project/add.html',
						controller: 'ProjectCtrl'
					}
				}
			})
			.state('root.project.edit', {
				url: '/project/edit/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/project/add.html',
						controller: 'ProjectCtrl'
					}
				}
			})
			.state('root.project.remove', {
				url: '/project/remove/:id',
				views: {
					'container@': {
						controller: 'ProjectCtrl'
					}
				}
			})

			.state('root.site.list', {
				url: '/site/list',
				views: {
					'container@': {
						templateUrl: 'app/container/site/list.html',
						controller: 'SiteListCtrl'
					}
				}
			})
			.state('root.site.add', {
				url: '/site/add',
				views: {
					'container@': {
						templateUrl: 'app/container/site/add.html',
						controller: 'SiteCtrl'
					}
				}
			})
			.state('root.site.edit', {
				url: '/site/edit/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/site/add.html',
						controller: 'SiteCtrl'
					}
				}
			})
			.state('root.site.remove', {
				url: '/site/remove/:id',
				views: {
					'container@': {
						controller: 'SiteCtrl'
					}
				}
			})

			.state('root.category.list', {
				url: '/category/list',
				views: {
					'container@': {
						templateUrl: 'app/container/category/list.html',
						controller: 'CategoryListCtrl'
					}
				}
			})
			.state('root.category.add', {
				url: '/category/add',
				views: {
					'container@': {
						templateUrl: 'app/container/category/add.html',
						controller: 'CategoryCtrl'
					}
				}
			})
			.state('root.category.edit', {
				url: '/category/edit/:id',
				views: {
					'container@': {
						templateUrl: 'app/container/category/add.html',
						controller: 'CategoryCtrl'
					}
				}
			})
			.state('root.category.remove', {
				url: '/attr/category/:id',
				views: {
					'container@': {
						controller: 'CategoryCtrl'
					}
				}
			})

			.state('root.attr.list', {
				url: '/attr/list',
				views: {
					'container@': {
						templateUrl: 'app/container/attr/list.html',
						controller: 'AttrListCtrl'
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
						controller: 'AttrCtrl'
					}
				}
			})


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
