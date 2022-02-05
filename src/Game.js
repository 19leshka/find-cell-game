class Game{
    startFSGame() {
        document.querySelector('.start__btn').hidden = true;
        let cellGame = new FindCell(4);
        cellGame.createCounter();
        cellGame.createTable();
        cellGame.createCloseBtn();
        cellGame.createCellEvent();
        cellGame.createCellNum();
        cellGame.chooseRandomCell();
    }
    
    startTicTacToe() {
        document.querySelector('.start__btn').hidden = true;
    }
}