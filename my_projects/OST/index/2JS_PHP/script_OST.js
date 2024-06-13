
function start() {
    x = document.getElementById("scrollPopularGoods");

    for (let i = 1; i <= 10; i++) {
        x.innerHTML = x.innerHTML + `<button class="Goods" id="goods1.${i}"><img src="3IMG/Goods/Good_${i}.png"></button>`
        console.log (i);
    }
}
start();

function go(id) {
    location.href = `https://grustniyeshik.github.io/main/my_projects/OST/`+id+`/`+id+`.html`;
}

function load(id) {
    x = document.getElementById("scrollPopularGoods");

    x.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        x.innerHTML = x.innerHTML + `<button class="Goods" id="goods2.${i}"><img src="3IMG/Goods/${id}/Good_${i}.png"></button>`
        console.log (i);
    }
}



/*x = 0;
function theme() {
    if (x == 0) {
        dark_theme();
        x = 1;
    } else {
        light_theme();
        x = 0;
    }

}
function dark_theme() {
    logo1 = document.getElementById("logoImg1");
    logo2 = document.getElementById("logoImg2");
    logo1.src = "IMG/LogoWhite.png";
    logo2.src = "IMG/LogoWhite.png";

    document.head.innerHTML =
    `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="desktop.css">
    <link rel="stylesheet" href="mobile.css">
    <link rel="stylesheet" href="dark.css">
    <link rel="stylesheet" href="FONTS/fonts.css">
    <title>Ky</title>`;
}
function light_theme() {
    logo1 = document.getElementById("logoImg1");
    logo2 = document.getElementById("logoImg2");
    logo1.src = "IMG/LogoBlack.png";
    logo2.src = "IMG/LogoBlack.png";

    document.head.innerHTML =
    `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="desktop.css">
    <link rel="stylesheet" href="mobile.css">
    <link rel="stylesheet" href="FONTS/fonts.css">
    <title>Ky</title>`;
}*/
