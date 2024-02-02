function go(id) {
    
    location.href = "D:\\Сайт_для_OST\\"+id+"\\"+id+".html";
}

function load(id) {
    block = document.getElementById("blockPopularGoods2");

    direction = document.getElementById("popularGoods"+id[id.length-1]);

    block.innerHTML = ` <div class="Goods" id="goods1.1"></div>
                        <div class="Goods" id="goods1.2"></div>
                        <div class="Goods" id="goods1.2"></div>
                        <div class="Goods" id="goods1.2"></div>
                        <div class="Goods" id="goods1.2"></div>`
}