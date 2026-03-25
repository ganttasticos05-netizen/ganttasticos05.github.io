<?php

require_once __DIR__ . "/lib/manejaErrores.php";
require_once __DIR__ . "/lib/devuelveJson.php";

$lista = [
 [
  "nombre" => "Uriel",
  "chiste" => "¿Cuál es el pez mas triste? El pes-ame"
 ],
 [
  "nombre" => "Hector",
"chiste" => "¿Comó se llama las botas que se pueden \n comer? las bota-nas"
 ],
 [
  "nombre" => "Itati",
  "chiste" => "¿Comó se despiden los limones? Acido un placer"
 ],
 [
  "nombre" => "Roberto",
  "chiste" => "¿Por qué le dio un paro cardiaco a la \n impresora? Porque tuvo una impresion muy fuerte"
 ],
 [
  "nombre" => "Vanessa",
  "chiste" => "¿Qué le dijo un jardinero a otro jardinero? \n Seamos felices mientras podamos"
 ],
 [
  "nombre" => "Angel",
  "chiste" => "¿Por qué las velas no se duermen tarde? Porque \n se desvelan"
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