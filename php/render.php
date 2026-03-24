<?php

require_once __DIR__ . "/lib/manejaErrores.php";
require_once __DIR__ . "/lib/devuelveJson.php";

$lista = [
 [
  "nombre" => "balta",
  "chiste" => "¿Cuál es el pez mas triste? El pes-ame"
 ],
 [
  "nombre" => "hector",
"chiste" => "¿Comó se llama las botas que se pueden comer? las bota-nas"
 ],
 [
  "nombre" => "itati",
  "chiste" => "¿Comó se despiden los limones? Acido un placer"
 ],
 [
  "nombre" => "roberto",
  "chiste" => "¿Por qué le dio un paro cardiaco a la impresora? Porque tuvo una impresion muy fuerte"
 ],
 [
  "nombre" => "vane",
  "chiste" => "¿Qué le dijo un jardinero a otro jardinero? Seamos felices mientras podamos"
 ],
 [
  "nombre" => "angel",
  "chiste" => "¿Por qué las velas no se duermen tarde? Porque se desvelan"
 ]
];

$render = "";

foreach ($lista as $item) {

 $nombre = htmlentities($item["nombre"]);
 $chiste = htmlentities($item["chiste"]);

 $render .= "
  <li class='md-two-line'>
    <span class='headline'>$nombre</span>
    <span class='supporting'>$chiste</span>
  </li>
 ";
}

devuelveJson([
 "lista" => [
  "innerHTML" => $render
 ]
]);