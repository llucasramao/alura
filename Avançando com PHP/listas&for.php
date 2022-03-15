<?php 

$idadeList = [18, 19, 23, 13, 20, 40, 56, 2, 8];
$nome = ['Lucas', 'Tatiana', 'Tânia', 'Pável'];
$e = count($idadeList);

for ($i = 0; $i < count($nome); $i++){
    echo $idadeList[$i] . "\n";
    echo $nome[$i] . "\n";
}