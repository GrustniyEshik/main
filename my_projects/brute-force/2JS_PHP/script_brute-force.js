text=document.getElementById("text");

function start() {
    console.log ("101010010010100100");
    text.innerText="101010010010100100";
    first();
    second();
}

function first() {
    n=8%3;
    console.log (n);
}

//Создание массивов с необходимыми символами
let nom = ['0','1','2','3','4','5','6','7','8','9'];
let ensy = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let rusy = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н'];
//Добавление их в один массив
let sy = nom.concat(ensy);

function second() {
    console.log (sy);
}