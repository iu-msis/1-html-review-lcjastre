<?php

$num = 2;
$foo = "to be";
$bar = "or not to be";
echo $foo .' '. $bar;

$arr = [
    "first"=>"Tom",
    "second" => "Bipin",
    "best"=>"DS"
    
];

$arr2 = [1,1,2,3,5,8];

if (true) {
    echo "\nTRUE\n";
}
while (true){
    break;
}
echo "<ul>";
foreach($arr as $key=>$val){
    echo "<li>".$key ." is ". $val."</li>";
}
echo"</ul>";
FUNCTION printAndEncode ( $val ) {
echo json_encode($arr, JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR);
}

//namin conventions
//JS and PHP: Camel Case
//PascalCase
//Snake_case
//Kebab-case