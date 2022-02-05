class GameWindow {
    createCloseBtn() {
        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close__btn");
        closeBtn.innerHTML = '<div class="close__game-btn">CLOSE GAME</div>';
        document.querySelector(".table").after(closeBtn);
        document.querySelector(".close__game-btn").addEventListener("click", this.closeGameBtn);
    }
}