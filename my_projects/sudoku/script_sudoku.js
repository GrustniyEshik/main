array_cells=document.querySelectorAll(".cell");
array_numbers=document.querySelectorAll(".number");

for (let i=0; i<array_cells.length; i++){                                               //Цикл i от 0 до array_cells.length (9)
    array_cells[i].addEventListener("click", click_on_cell);                            //Добавление событие "Нажатия" каждому элементу массива с ячейками и указание названия функции выполняющейся при нажатии
}

for (let i=0; i<array_numbers.length; i++){                                               //Цикл i от 0 до array_cells.length (9)
    array_numbers[i].addEventListener("click", select_nomber);                            //Добавление событие "Нажатия" каждому элементу массива с ячейками и указание названия функции выполняющейся при нажатии
}

function select_nomber() {
    number=this;
    console.log("Выдрана цифра", number.id);
}

function click_on_cell() {
    cell=this;
    cell.innerText=number.innerText;
    console.log("Вы поставили ", number.innerText, " в ячейку ",cell.id);
}