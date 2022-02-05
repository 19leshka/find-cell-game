let game = new Game();
let startBtn = document.querySelector('.start__game-btn');
startBtn.addEventListener('click', game.startFSGame);

// const priceModal = $.modal({
//     title: 'Цена на Товар',
//     closable: true,
//     width: '400px',
//     footerButtons: [
//       {text: 'Закрыть', type: 'primary', handler() {
//         priceModal.close()
//       }}
//     ]
// });