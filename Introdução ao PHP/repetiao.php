<?php


$numero = 0;


function repeticao1 (){
    while ($numero <= 15){
        echo ("Numero $numero\n\r");
        $numero += 1;
    }
}

function repeticao2(){
    for ($contador = 1; $contador <= 15; $contador++){
        if ($contador != 13){
            echo "Numero $contador\n\r";
        }
    }
}

repeticao2();