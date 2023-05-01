let lang = 'en';
const languages = {
  en: {
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
    Digit0: 0,
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
  },
  ru: {
    Backquote: 'ё',
    Digit1: 1,
    Digit2: 2,
    Digit3: 3,
    Digit4: 4,
    Digit5: 5,
    Digit6: 6,
    Digit7: 7,
    Digit8: 8,
    Digit9: 9,
    Digit0: 0,
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'й',
    KeyW: 'ц',
    KeyE: 'у',
    KeyR: 'к',
    KeyT: 'е',
    KeyY: 'н',
    KeyU: 'г',
    KeyI: 'ш',
    KeyO: 'щ',
    KeyP: 'з',
    BracketLeft: 'х',
    BracketRight: 'ъ',
    Backslash: '\\',
    Delete: 'Delete',
    CapsLock: 'CapsLock',
    KeyA: 'ф',
    KeyS: 'ы',
    KeyD: 'в',
    KeyF: 'а',
    KeyG: 'п',
    KeyH: 'р',
    KeyJ: 'о',
    KeyK: 'л',
    KeyL: 'д',
    Semicolon: 'ж',
    Quote: 'э',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'я',
    KeyX: 'ч',
    KeyC: 'с',
    KeyV: 'м',
    KeyB: 'и',
    KeyN: 'т',
    KeyM: 'ь',
    Comma: 'б',
    Period: 'ю',
    Slash: '.',
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
  },
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

function init() {
  const keys = Object.keys(languages[lang]);
  const values = Object.values(languages[lang]);
  let out = '';
  for (let i = 0; i < keys.length; i += 1) {
    out += `<button class="keyboard__button button_${keys[i]}" data="${keys[i]}" >${values[i]}</button>`;
  }
  document.querySelector('.keyboard').innerHTML = out;

  document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
    element.addEventListener('click', () => {
      const code = element.getAttribute('data');
      element.classList.add('active');
      textarea.innerHTML += `${languages[lang][code]}`;
    });
  });
}
init();

document.addEventListener('keydown', (event) => {
  const keys = Object.keys(languages[lang]);
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelector(`.keyboard .keyboard__button[data=${event.code}]`).classList.add('active');
  }
  if (lang === 'en') {
    if (event.code === 'ControlLeft') {
      document.onkeyup = (e) => {
        if (e.code === 'AltLeft') {
          lang = 'ru';
          init();
        }
      };
    }
  } else if (lang === 'ru') {
    if (event.code === 'ControlLeft') {
      document.onkeyup = (e) => {
        if (e.code === 'AltLeft') {
          lang = 'en';
          init();
        }
      };
    }
  }
  textarea.innerHTML += `${languages[lang][event.code]}`;
});

document.addEventListener('keyup', () => {
  const keys = Object.keys(languages[lang]);
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
      element.classList.remove('active');
    });
  }
});

document.addEventListener('mouseout', () => {
  const keys = Object.keys(languages[lang]);
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
      element.classList.remove('active');
    });
  }
});

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    init();
  }
}
window.addEventListener('load', getLocalStorage);
