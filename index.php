<?php
// replace src of <script>
// replace href of <link rel="stylesheet">
// replace href of <a>
try {
    $url = $_GET['url'];
    $html = @file_get_contents($url);

    echo $html;
} catch (Exception $e) {
    echo $e->getMassage();
}
