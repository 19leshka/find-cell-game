class FindCell{    
    constructor(a){
        this._a = +a;
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

    createCloseBtn() {
        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close__btn");
        closeBtn.innerHTML = '<div class="close__game-btn">CLOSE GAME</div>';
        document.querySelector(".table").after(closeBtn);
        document.querySelector(".close__game-btn").addEventListener("click", this.closeGame);
    }

    closeGame() {
        document.querySelector(".close__btn").remove();
        document.querySelector(".table").remove();
        document.querySelector('.start__btn').hidden = false;
    }

    winGame() {
        // this.removeCellEvent();
        setTimeout(() => {
            alert("You win!!!");
            this.closeGame();
        }, 1000);
    }

    createCellNum() {
        let cellNum = 1;
        document.querySelectorAll("td").forEach((elem) => {
            elem.classList.add(`cell__${cellNum}`);
            cellNum++;
        })
    }

    createCellEvent() {
        let table = document.querySelectorAll("td");
        table.forEach( (elem) => {
            elem.addEventListener("click", () => {
                let cellNum = elem.className.split("__")[1];
                this.findCellX(cellNum);
                this.findCellY(cellNum);
                if(this.getX() == this.getHiddenCellX() && this.getY() == this.getHiddenCellY()){
                    elem.style.backgroundColor = "green";
                    this.winGame(elem);
                }
                else{
                    elem.style.backgroundColor = "red";
                    this.clearBgColor(elem);
                }
            });
        })
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
        console.table(randCellX, randCellY);
    }
}