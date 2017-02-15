<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding = "UTF-8" standalone="yes" ?>';

echo '<response>';
    $console = $_GET['console'];
    $consoleArray = array('Playstation 4', 'PC');
    if(in_array($console,$consoleArray))
        echo 'We do have '.$console.'!';
    elseif($console=='')
        echo 'Please enter your favorite console';
    else
        echo 'Sorry we don\'t have '.$console.' in stock';

echo '</response>';
?>