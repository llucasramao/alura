<?php

$nome = "Lucas";
echo "Bem vindo ao programa $nome\n\r";

$idade = 18;
// and ou &&, or ou ||,
if ($idade > 18 and $nome == "Lucas"){
    echo "Legal, você é maior de idade! E seu nome é Lucas!\r\n";
} else if ($idade < 18 and $nome == "Lucas"){
    echo "Triste, você é menor de idade mas seu nome é Lucas!\r\n";
} else if ($idade = 18 or $name == "Lucas"){
    echo "Nenhuma alternativa correta!";
}