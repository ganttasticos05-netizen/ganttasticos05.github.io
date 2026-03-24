<?php

require_once __DIR__ . "/lib/recibeTexto.php";
require_once __DIR__ . "/lib/devuelveJson.php";

$integrante = recibeTexto("integrante");

$chistes = [
 "balta" => "¿Cuál es el pez mas triste? El pes-ame",
 "hector" => "¿Comó se llama las botas que se pueden comer? las bota-nas",
 "itati" => "¿Comó se despiden los limones? Acido un placer",
 "roberto" => "¿Por qué le dio un paro cardiaco a la impresora? Porque tuvo una impresion muy fuerte.",
 "vane" => "¿Qué le dijo un jardinero a otro jardinero? Seamos felices mientras podamos",
 "angel" => "¿Por qué las velas no se duermen tarde? Porque se desvelan"
];

$resultado = [
 "integrante" => $integrante,
 "chiste" => $chistes[$integrante] ?? "No hay chiste disponible"
];

devuelveJson($resultado);