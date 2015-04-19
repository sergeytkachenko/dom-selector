<?php

try {
    $url = $_GET['url'];
    echo @file_get_contents($url);
} catch (Exception $e) {
    echo $e->getMassage();
}
