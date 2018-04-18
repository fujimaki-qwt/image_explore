<?php

use Cake\Core\Plugin;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

Router::defaultRouteClass(DashedRoute::class);

Router::scope('/', function (RouteBuilder $routes) {
    $routes->connect('/',             ['controller' => 'Top', 'action' => 'index']);
    $routes->connect('/result',       ['controller' => 'Result', 'action' => 'index']);
    $routes->connect('/image_upload', ['controller' => 'Image', 'action' => 'upload']);
    $routes->fallbacks(DashedRoute::class);
});

Plugin::routes();
