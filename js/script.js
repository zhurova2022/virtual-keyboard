const KeyCodes = {
  Backquote: '`',
  Digit1: 1,
  Digit2: 2,
  Digit3: 3,
  Digit4: 4,
  Digit5: 5,
  Digit6: 6,
  Digit7: 7,
  Digit8: 8,
  Digit9: 9,
  Digit0: 10,
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Delete: 'Delete',
  CapsLock: 'CapsLock',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: '\'',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  Win: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
  ControlRight: 'Ctrl',
};

const container = document.querySelector('body');
container.className = 'container';

const containerTextarea = document.createElement('div');
containerTextarea.className = 'text';
document.body.prepend(containerTextarea);

const textarea = document.createElement('textarea');
textarea.className = 'text__field';
containerTextarea.prepend(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

const keys = Object.keys(KeyCodes);
const values = Object.values(KeyCodes);

function init() {
  let out = '';
  for (let i = 0; i < keys.length; i += 1) {
    out += `<button class="keyboard__button button_${keys[i]}" data="${keys[i]}" >${values[i]}</button>`;
  }
  document.querySelector('.keyboard').innerHTML = out;
}
init();

document.addEventListener('keydown', (event) => {
  textarea.innerHTML += `${event.key}`;
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelector(`.keyboard .keyboard__button[data=${event.code}]`).classList.add('active');
  }
});

document.addEventListener('keyup', () => {
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
      element.classList.remove('active');
    });
  }
});

document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelectorAll('.keyboard .keyboard__button').forEach((el) => {
      el.classList.remove('active');
    });
    const code = element.getAttribute('data');
    element.classList.add('active');
    textarea.innerHTML += `${KeyCodes[code]}`;
  });
});
