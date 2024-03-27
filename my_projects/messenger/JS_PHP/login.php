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

$db=mysqli_connect("localhost","d90996mp_giuk","ZAQwsx2005","d90996mp_giuk");
mysqli_select_db ($db,"d90996mp_giuk");
$query="select id, login, parole from users where login='".$_GET['login']."' and parole='".$_GET['parole']."'";
echo $query;

echo "<br>";
for ($n=0; $n<=5; $n++ ){
    echo $n;
}


echo "</body>
</html>";
?>