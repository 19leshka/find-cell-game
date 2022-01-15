class Game{
    startGame() {
        document.querySelector('.start__btn').hidden = true;
        let cellGame = new FindCell(4);
        cellGame.createTable();
        cellGame.createCloseBtn();
        cellGame.createCellEvent();
        cellGame.createCellNum();
        cellGame.chooseRandomCell();
    }
    
    
}