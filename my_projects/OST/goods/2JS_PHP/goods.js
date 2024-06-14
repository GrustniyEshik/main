function start () {
    //Добавление в переменую x окно в котором будет список товаров
    x = document.getElementById("scrollGoods1");
    //Делаем это окно пустым
    x.innerHTML = "";

    //Через цикл добавляем в окно кнопки с изображением товаров
    for (let i = 1; i <= 10; i++) {
        x.innerHTML = x.innerHTML + 
        `<button class="Goods" id="goods${i}"><img src="3IMG/Goods/Good_${i}.png">
        </button>`
        console.log (i);
    }
}

start ();

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