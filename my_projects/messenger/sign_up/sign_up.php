<?php
echo "<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='UTF-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Кук</title>
</head>
<body align='center'>";

echo "Теперь вы тоже смешарик";
echo "<br>";
echo "С логином: ",$_GET["login"];
echo "<br>";
echo "Паролем: ",$_GET["parol"];
echo "<br>";
echo "И ником: ",$_GET["nickname"];

echo "</body>
</html>";
?>