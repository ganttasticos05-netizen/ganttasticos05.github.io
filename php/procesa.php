<?php

require_once __DIR__ . "/lib/recibeTexto.php";
require_once __DIR__ . "/lib/devuelveJson.php";

$integrante = recibeTexto("integrante");

$chistes = [
 "Uriel" => "¿Cuál es el pez mas triste? El pes-ame",
 "Hector" => "¿Comó se llama las botas que se pueden \n comer? las bota-nas",
 "Itati" => "¿Comó se despiden los limones? Acido un placer",
 "Roberto" => "¿Por qué le dio un paro cardiaco a la \n impresora? Porque tuvo una impresion muy fuerte.",
 "Vanessa" => "¿Qué le dijo un jardinero a otro jardinero? \n Seamos felices mientras podamos",
 "Angel" => "¿Por qué las velas no se duermen tarde? Porque \n se desvelan"
];

$resultado = [
 "integrante" => $integrante,
 "chiste" => $chistes[$integrante] ?? "No hay chiste disponible"
];

devuelveJson($resultado);