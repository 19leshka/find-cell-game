class FindCell extends GameWindow{    
    constructor(a){
        super();
        this._a = +a;
    }

    clickEvent = (event) => {
        event.stopPropagation();
        if(event.target.className.split("__")[0] == 'cell'){
            let num = document.querySelector(".click__counter").innerHTML;
            document.querySelector(".click__counter").innerHTML = `${+num + 1}`;
            let cellNum = event.target.className.split("__")[1];
            this.findCellX(cellNum);
            this.findCellY(cellNum);
            if(this.getX() == this.getHiddenCellX() && this.getY() == this.getHiddenCellY()){
                event.target.style.backgroundColor = "green";
                this.winGame();
            }
            else{
                event.target.style.backgroundColor = "red";
                this.clearBgColor(event.target);
            }
        }
    } 

    getA() {
        return +this._a;
    }

    setX(x) {
        this._x = x;
    }

    getX() {
        return +this._x;
    }

    setY(y) {
        this._y = y;
    }

    getY() {
        return +this._y;
    }

    setHiddenCellXY(x, y) {
        this._hiddenCellX = x;
        this._hiddenCellY = y;
    }

    getHiddenCellX() {
        return this._hiddenCellX;
    
    }
    getHiddenCellY() {
        return this._hiddenCellY;
    }

    clearHiddenCell() {
        this._hiddenCellX = null;
        this._hiddenCellY = null;
    }

    findCellNumFromXY(x, y) {
        return ((y * (this.getA() - 1)) + x);
    }

    getRandomNum() {
        let min = 1;
        let max = this.getA()**2 + 1;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createTable() {
        const td = "<td></td>";
        let table = document.createElement("table");
        table.classList.add("table");
        table.innerHTML = (`<tr>${td.repeat(this.getA())}</tr>`).repeat(this.getA());
        document.querySelector(".table__container").appendChild(table);
        
    }
    
    createCounter() {
        let counter = document.createElement("div");
        counter.classList.add("click__counter");
        counter.innerHTML = "0";
        document.querySelector(".table__container").appendChild(counter);
    }

    closeGameBtn = () => {
        this.removeCellEvent();
        this.closeGame();
    }

    closeGame() {
        document.querySelector(".close__btn").remove();
        document.querySelector(".click__counter").remove();
        document.querySelector(".table").remove();
        document.querySelector('.start__btn').hidden = false;
    }

    winGame() {
        let moves = +document.querySelector(".click__counter").innerHTML;
        this.removeCellEvent();
        const winModal = $.modal({
            title: 'You win!',
            closable: true,
<<<<<<< HEAD
            width: `${window.outerWidth/2}px`,
            content: `You found the cell in ${moves} moves.`,
            footerButtons: [
              {text: 'Close', type: 'primary', handler() {
=======
            width: '500px',
            content: `You found the cage in ${moves} moves`,
            footerButtons: [
              {text: 'Закрыть', type: 'primary', handler() {
>>>>>>> 7b35597a83cf57dd83b43ea93675e87f4d9aff34
                winModal.close();
              }}
            ]
        });
        setTimeout(() => {
            winModal.open();
            this.closeGame();
        }, 500);
    }

    createCellNum() {
        let cellNum = 1;
        document.querySelectorAll("td").forEach((elem) => {
            elem.classList.add(`cell__${cellNum}`);
            cellNum++;
        })
    }
    
    createCellEvent() {
        document.addEventListener("click", this.clickEvent);
    }

    removeCellEvent() {
        document.removeEventListener("click", this.clickEvent);
    }

    clearBgColor(elem) {
        let element = elem;
        setTimeout(() => {
            element.style.backgroundColor = "transparent";
        }, 500);
    }

    findCellX(num) {
        let cellNum = num;
        let x;
        for (let i = 0; i < num; i++) {
            if(cellNum - this.getA() < 1){
                x = cellNum;
                break;
            }else{
                cellNum -= this.getA();
            }
        }
        this.setX(x);
        return x;
    }

    findCellY(num) {
        let y = (num - +this.getX()) / +this.getA() + 1;
        this.setY(y);
        return y;
    }

    showXY() {
        console.table("x: " + this.getX(),"y: " + this.getY())
    }

    chooseRandomCell() {
        let table = document.querySelectorAll("td");
        let randCell = table[this.getRandomNum()-1];
        let randCellNum = randCell.className.split("__")[1];
        let randCellX = this.findCellX(randCellNum);
        let randCellY = this.findCellY(randCellNum);
        this.setHiddenCellXY(randCellX, randCellY);
        // console.table("x: " + randCellX,"y: " + randCellY);
    }
}