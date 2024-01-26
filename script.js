function go(id) {
    location.href = "D:\\Сайт_для_OST\\"+id+"\\"+id+".html";
}

function load(id) {
    block = document.getElementById("blockPopularGoods"+id[id.length-1]);
    block.innerHTML = "<div class="Goods" id="goods2.1"></div> <div class="Goods" id="goods2.2"></div>"
    
}