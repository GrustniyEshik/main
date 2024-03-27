array_cells=document.querySelectorAll(".cell");                                         //Созлание массива со всеми ячейками класса .cell
array_mods=document.querySelectorAll(".mod");                                           //Создание массива со всеми ячейками класса .mod
restart=document.getElementById("restart");                                             //Создание переменной с элементов id = restart
game_active=true;                                                                       //Создание переменной активности игры
game_mod="m1";                                                                          //Создание переменной режима игры
turn="X";                                                                               //Создание переменной активного знака
opponent_turn="X"
num_turn=0;                                                                             //Создание переменной счётчика ходов
message="";                                                                             //Создание переменной сообщения
w_c=[                                                                                   //Создание массива вариантов побед
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i=0; i<array_cells.length; i++){                                               //Цикл i от 0 до array_cells.length (9)
    array_cells[i].addEventListener("click", click_on_cell);                            //Добавление событие "Нажатия" каждому элементу массива с ячейками и указание названия функции выполняющейся при нажатии
}
for (let i=0; i<array_mods.length; i++){                                                //Цикл i от 0 до array_cells.length (9)
    array_mods[i].addEventListener("click", selection_mod);                             //Добавление событие "Нажатия" каждому элементу массива с режимами и указание названия функции выполняющейся при нажатии
}
restart.addEventListener("click", restart_game);                                        //Добавление событие нажатия для переменной и указание названия функции выполняющейся при нажатии
document.getElementById("m1").style.backgroundColor = "rgba(255,255,255,0.25)";         //Изменение фонового цвета режима m1
console.log("Выбран режим", game_mod);                                                //Для отладки

function click_on_cell(){                                   //Функция нажатия на клетку
    if (game_active){
        cell=this;
        if (game_mod=="m1" && turn==opponent_turn){
            move(); 
        }

        if (game_mod=="m2" && turn==opponent_turn){
            move();
        }

        if (game_mod=="m3"){
            move();
        }
    }
}

function move(){
    if (cell.innerText==""){                                                //Если эта ячейка пуста
        cell.innerText=turn;                                                //Поставить в выбраную ячейку знак который сейчас активен
        num_turn++;                                                       //Для отладки
        console.log("Ход №", num_turn, "____________________");           //Для отладки
        console.log(turn, "сходили", cell.id, cell);                      //Для отладки
        check_win();                                                        //Вызов функции проверки победы
        if (game_active){                                                   //Если после проверки игра активна
            turn=turn=="X"?"0":"X";                                         //Меняется активный знак на противоположный
            message="Ceйчac xoд "+turn;                                     //Сообщение меняется на "Сейчас ходит" + активный знак
        }
        if (game_mod=="m1"){
            setTimeout(() =>{                               //Создание задержки
                computer_move();                            //Вызывается функция хода компьютер
            }, 300); 
        }

        if (game_mod=="m2"){
            setTimeout(()=>{
                omega_computer_move();                      //Вызывается функция хода амега компьютер
            }, 300);
        }
    }else{                                                                  //Если ячейка не пуста
        message="Эta ячeйкa зaняta";                                        //Сообщение меняется на "Эта ячейка занята"
    }
    game_status.innerText=message;                                          //Статус меняется на ранее изменёное сообщение
}

function computer_move(){                                                                   //Функция хода компьютера
    if (game_active){                                                                       //Если игра активна
        opponent_turn=turn=="X"?"0":"X";
        let empty_cells=[];                                                                 //Создаём локальный массив для пустых ячеек
        for (let i=0; i<array_cells.length; i++){                                           //Цикл i от 0 до array_cells.length (9)
            if (array_cells[i].innerText=="") empty_cells.push(array_cells[i]);             //Если пременная массива array_cells="" (пустая) добавляем эту переменную к пустому массиву
        }
        if (empty_cells.length > 0){                                                        //Если длина массив с пустыми ячейками > 0
            let r=Math.floor(Math.random()*empty_cells.length)                              //Добавление пременной со случайным значением от 0 до 1 умноженое на количество пустых ячеек и округлёное
            empty_cells[r].innerText=turn;                                                  //В случайную ячейку ставится активный знак
            console.log(turn, "сходили", empty_cells[r].id, empty_cells[r]);              //Для отладки
            check_win();                                                                    //Вызов функции проверки победы
        };
        turn=turn=="X"?"0":"X";                                                             //Меняет активный знак на противоположный
        if (game_active){                                                                   //Если игра активна
            message = "Сейчас ход "+turn;                                                   //Сообщение меняется на "Сейчас ходит" + активный знак
            game_status.innerText=message;                                                  //Статус меняется на ранее изменёное сообщение
        }
        if (game_mod=="m1auto"){                                                            //Если режим игры автоматический
            setTimeout(()=>{                                                                //Создание задержки выполнения следующих инструкций
                auto_move();                                                                //Вызов функции автоматичского хода
            }, 100);                                                                        //Время задержки в милисекундах
        }
    }
}

function omega_computer_move(){                                                                                                                                 //Функция хода амеги
    if (game_active){                                                                                                                                           //Если игра активна
        prev_turn=turn;                                                                                                                                         //Сохранение активного знака
        opponent_turn=turn=="X"?"0":"X";                                                                                                                        //Создание переменной противоположного знака

        let empty_cells=[];                                                                                                                                     //Создание массива для пустых ячеек
        for (let i = 0; i<array_cells.length; i++) {                                                                                                            //Цикл i от 0 до array_cells.length (9)
            if (array_cells[i].innerText=='') empty_cells.push(array_cells[i]);                                                                                 //Если пременная массива array_cells="" (пустая) добавляем эту переменную к пустому массиву
        }
        if (empty_cells.length==9) {
            let r = Math.floor(Math.random()*array_cells.length);
            array_cells[r].innerText=turn;
            console.log(turn, "сходили", array_cells[r].id, array_cells[r]);
            check_win();
            turn=turn=="X"?"0":"X";
        }
        let array_empty_corners=[];                                                                                                                             //Добавление массива с пустыми углами
        if (array_cells[0].innerText==''){                                                                                                                      //Если верхний левый угол свободен
            array_empty_corners.push(array_cells[0]);                                                                                                           //Этот угол добавляется в массив пустых углов
        }
        if (array_cells[2].innerText==''){                                                                                                                      //Если верхний правый угол свободен
            array_empty_corners.push(array_cells[2]);                                                                                                           //Этот угол добавляется в массив пустых углов
        }
        if (array_cells[6].innerText==''){                                                                                                                      //Если нижний левый угол свободен
            array_empty_corners.push(array_cells[6]);                                                                                                           //Этот угол добавляется в массив пустых углов
        }
        if (array_cells[8].innerText==''){                                                                                                                      //Если нижний правый угол свободен
            array_empty_corners.push(array_cells[8]);                                                                                                           //Этот угол добавляется в массив пустых углов
        }

        let array_empty_edges=[];                                                                                                                               //Добавление массива с пустыми рёбрами
        if (array_cells[1].innerText==''){                                                                                                                      //Если верхнее ребро свободно
            array_empty_edges.push(array_cells[1]);                                                                                                             //Это ребро дбавляется в массив пустых рёбер
        }
        if (array_cells[3].innerText==''){                                                                                                                      //Если левое ребро свободно
            array_empty_edges.push(array_cells[3]);                                                                                                             //Это ребро дбавляется в массив пустых рёбер
        }
        if (array_cells[5].innerText==''){                                                                                                                      //Если правое ребро свободно
            array_empty_edges.push(array_cells[5]);                                                                                                             //Это ребро дбавляется в массив пустых рёбер
        }
        if (array_cells[7].innerText==''){                                                                                                                      //Если нижнее ребро свободно
            array_empty_edges.push(array_cells[7]);                                                                                                             //Это ребро дбавляется в массив пустых рёбер
        }

        possibility_of_victory();                                                                                                                               //Вызов функции поиска возможности победы
        danger();                                                                                                                                               //Вызов функции поиска угрозы

        if (array_cells[1].innerText===opponent_turn && array_cells[3].innerText===opponent_turn && array_cells[0].innerText==="" && turn===prev_turn){         //Если 
            array_cells[0].innerText=turn;
            console.log(turn, "сходили", array_cells[0].id, array_cells[0]);
            check_win();
            turn=turn=="X"?"0":"X";
        }
        if (array_cells[1].innerText===opponent_turn && array_cells[5].innerText===opponent_turn && array_cells[2].innerText==="" && turn===prev_turn){         //
            array_cells[2].innerText=turn;
            console.log(turn, "сходили", array_cells[2].id, array_cells[2]);
            check_win();
            turn=turn=="X"?"0":"X";
        }
        if (array_cells[3].innerText===opponent_turn && array_cells[7].innerText===opponent_turn && array_cells[6].innerText==="" && turn===prev_turn){         //
            array_cells[6].innerText=turn;
            console.log(turn, "сходили", array_cells[6].id, array_cells[6]);
            check_win();
            turn=turn=="X"?"0":"X";
        }
        if (array_cells[5].innerText===opponent_turn && array_cells[7].innerText===opponent_turn && array_cells[8].innerText==="" && turn===prev_turn){         //
            array_cells[8].innerText=turn;
            console.log(turn, "сходили", array_cells[8].id, array_cells[8]);
            check_win();
            turn=turn=="X"?"0":"X";
        }

        if (array_cells[4].innerText==="" && turn===prev_turn){                                                                                                 //Если середина свободна и активный знак остался прежним
            array_cells[4].innerText =turn;                                                                                                                    //Ходит на середину
            console.log(turn, "сходили", array_cells[4].id, array_cells[4]);
            check_win();
            turn=turn=="X"?"0":"X";                                                                                                                     //Иенение знака на противоположный
        }
        if (array_cells[4].innerText === '0' && turn === prev_turn) {
            if (array_empty_edges.length != 0) {
                let r = Math.floor(Math.random() * array_empty_edges.length);
                array_empty_edges[r].innerText = turn;
                console.log(turn, "сходили", array_empty_edges[r].id, array_empty_edges[r]);
                check_win();
                turn = turn == "X" ? "0" : "X";
            }
        } else if (array_cells[4].innerText === 'X' && turn === prev_turn) {
            if (array_empty_corners.length != 0) {
                let r = Math.floor(Math.random() * array_empty_corners.length);
                array_empty_corners[r].innerText = turn;
                console.log(turn, "сходили", array_empty_corners[r].id, array_empty_corners[r]);
                check_win();
                turn = turn == "X" ? "0" : "X";
            }
        }
        if (array_empty_corners.length == 0 && turn == prev_turn || array_empty_edges.length == 0 && turn == prev_turn) {
            let r = Math.floor(Math.random() * empty_cells.length);
            empty_cells[r].innerText = turn;
            console.log(turn, "сходили", empty_cells[r].id, empty_cells[r]);
            check_win();
            turn = turn == "X" ? "0" : "X";
        }
        if (game_active) {                                                                                                                                      //Если игра активна
            message = "Сейчас ход " + turn;                                                                                                                     //Сообщение меняется на "Сейчас ходит" + активный знак
            game_status.innerText = message;                                                                                                                    //Статус меняется на ранее изменёное сообщение
        }
        if (game_mod == "m2auto") {
            setTimeout(() => {
                auto_move();
            }, 100);
        }
    }
}

function possibility_of_victory(){                                                         //Функция поска возможности победы
    if (turn==prev_turn){
        for (i=0; i<w_c.length; i++){
            let a=array_cells[w_c[i][0]];
            let b=array_cells[w_c[i][1]];
            let c=array_cells[w_c[i][2]];
            if (a.innerText=="" && b.innerText==turn && c.innerText==turn){
                a.innerText=turn;
                console.log(turn,"сходили",a.id,a);
                check_win();
                turn=turn=="X"?"0":"X";
                break;
            }
            if (a.innerText==turn && b.innerText=="" && c.innerText==turn){
                b.innerText=turn;
                console.log(turn,"сходили",b.id,b);
                check_win();
                turn=turn=="X"?"0":"X";
                break;
            }
            if (a.innerText==turn && b.innerText==turn && c.innerText==""){
                c.innerText=turn;
                console.log(turn,"сходили",c.id,c);
                check_win();
                turn=turn=="X"?"0":"X";
                break;
            }
            continue
        }
    }
}

function danger(){                                                                                         //Функция поиска угрозы
    if (turn==prev_turn){
        for (i=0; i<w_c.length; i++){
            let a=array_cells[w_c[i][0]];
            let b=array_cells[w_c[i][1]];
            let c=array_cells[w_c[i][2]];
            if (a.innerText=="" && b.innerText==opponent_turn && c.innerText==opponent_turn){
                a.innerText=turn;
                check_win();
                console.log(turn, "сходили", a.id, a);
                turn=turn=="X"?"0":"X";
                break;
            }
            if (a.innerText==opponent_turn && b.innerText=="" && c.innerText==opponent_turn){
                b.innerText=turn;
                console.log(turn, "сходили", b.id, b);
                check_win();
                turn=turn=="X"?"0":"X";
                break;
            }
            if (a.innerText==opponent_turn && b.innerText==opponent_turn && c.innerText==""){
                c.innerText=turn;
                console.log(turn, "сходили", c.id, c);
                check_win();
                turn=turn=="X"?"0":"X";
                break;
            }
            continue
        }
    }
}

function auto_move(){                               //Функция автомотического хода
    if (game_mod=="m1auto" && game_active){         //Если режим игры = m1auto и если игра активна
        computer_move();                            //Вызов функции ход компьютера
    }
    if (game_mod=="m2auto" && game_active){         //Если режим игры = m2auto и если игра активна
        omega_computer_move();                      //Вызов функции хода амеги
    }
}

function check_win() {                                                              //Проверка победы
    let empty_cells = [];                                                           //Создаём локальный массив для пустых ячеек
    for (let i = 0; i < array_cells.length; i++) {                                  //Цикл i от 0 до array_cells.length (9)
        if (array_cells[i].innerText == "") empty_cells.push(array_cells[i]);       //Если пременная массива array_cells="" (пустая) добавляем эту переменную к массиву пустых ячеек
    }
    for (i = 0; i < w_c.length; i++) {                                              //Цикл i от 0 до w_c.length (8)
        let a = array_cells[w_c[i][0]].innerText;                                   //Создание переменной a
        let b = array_cells[w_c[i][1]].innerText;                                   //Создание переменной b
        let c = array_cells[w_c[i][2]].innerText;                                   //Создание переменной c
        if (a==turn && b==turn && c==turn && game_active){                         //Если каждая из переменных ровна активному знаку
            message="Выиграли "+turn;                                               //Сообщение меняется на "Выиграли "+активный знак
            game_status.innerText=message;                                        //Статус меняется на ранее изменёное сообщение
            console.log(message);                                                   //Для отладки
            game_active=false;                                                      //Изменение активности игры на false "Не активна"
        }
        if (empty_cells.length==0 && game_active) {                                 //Если не одна проврека не оказалась true и если постой массив = 0
            message="Ничья";                                                        //Сообщение меняется на "Ничья"
            game_status.innerText=message;                                          //Статус меняется на ранее изменёное сообщение
            console.log(message);                                                   //Для отладки
            game_active = false;                                                    //Изменение активности игры на не активна
        }
    }
}

function selection_mod(){                                                                   //Функция выбора режива
    prev_mod=game_mod;
    game_mod=this.id;                                                                       //Режим игры равен id выбраного div (m1, m2, m3)
    restart_game();                                                                         //Вызов функции рестарта игры
    restart_color();                                                                        //Вызов функции сброса цвета
    document.getElementById(game_mod).style.backgroundColor="rgba(255,255,255,0.25)";       //Изменение цвета кнопки выбраного режима

    if (prev_mod==game_mod){                                                                //Если редим игры совпадает с ранее сохранёным
        game_mod=game_mod+"auto";                                                           //То к его окончанию добавляется auto
        console.log("Выбран режим ",game_mod);                                            //Для отладки
        auto_move();                                                                        //И вызывается функция автоматического ходы
    }
}

function restart_game(){                                //Функция рестарта игры
    game_active=true;                                   //Режим игры меняется на true "Активна"
    for (let i=0; i<array_cells.length; i++){           //Цикл i от 0 до array_cells.length (9)
        array_cells[i].innerText="";                    //Изменение каждой ячейки на ""
    }
    turn="X";                                           //Изменение активного знака на "X"
    opponent_turn="X";
    num_turn=0;                                         //Сброс количества ходов
    game_mod=game_mod.slice(0, 2);                      //Отсечение от режима игры окончания auto
    message="Сейчас ход "+turn;                         //Изменение сообщения на "Сейчас ход " + авктивный знак
    game_status.innerText=message;                      //Статус меняется на ранее изменёное сообщение
    console.clear();                                    //Очищение консоли
    console.log("Выбран режим",game_mod);             //Для отладки
}

function restart_color() {                                                          //Функция сброса цвета
    document.getElementById("m1").style.backgroundColor = "rgb(0, 0, 0, 0)";        //Изменение цвета кнопки m1
    document.getElementById("m2").style.backgroundColor = "rgb(0, 0, 0, 0)";        //Изменение цвета кнопки m2
    document.getElementById("m3").style.backgroundColor = "rgb(0, 0, 0, 0)";        //Изменение цвета кнопки m3
}