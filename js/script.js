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
    MetaLeft: 'Win',
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
    MetaLeft: 'Win',
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

const title = document.createElement('h1');
title.className = 'title';
title.innerHTML += 'RSS Virtual keyboard by Alisa Zhurova';
document.body.prepend(title);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

const infoContainer = document.createElement('div');
infoContainer.className = 'description';
document.body.append(infoContainer);

const desc = document.createElement('p');
desc.className = 'description__info';
desc.innerHTML += 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левые ctrl + alt';
infoContainer.prepend(desc);

let CapsLock = false;
let count = 0;

function init() {
  const keys = Object.keys(languages[lang]);
  const values = Object.values(languages[lang]);
  let out = '';
  for (let i = 0; i < keys.length; i += 1) {
    if (CapsLock === false) {
      out += `<button class="keyboard__button button_${keys[i]}" data="${keys[i]}" >${values[i]}</button>`;
    } else if (CapsLock === true) {
      if (i !== 13 && i !== 14 && i !== 28 && i !== 29 && i !== 41 && i !== 42 && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 59 && i !== 63) {
        out += `<button class="keyboard__button button_${keys[i]}" data="${keys[i]}" >${values[i].toString().toUpperCase()}</button>`;
      } else {
        out += `<button class="keyboard__button button_${keys[i]}" data="${keys[i]}" >${values[i]}</button>`;
      }
    }
  }
  document.querySelector('.keyboard').innerHTML = out;
  const buttons = document.querySelectorAll('button');
  function upper() {
    for (let i = 0; i < buttons.length; i += 1) {
      if (i !== 13 && i !== 14 && i !== 28 && i !== 29 && i !== 41 && i !== 42 && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 59 && i !== 63) {
        buttons[i].classList.toggle('upper');
      }
    }
  }
  document.querySelector('.button_CapsLock').addEventListener('mousedown', upper);

  document.querySelector('.button_ShiftLeft').addEventListener('mousedown', upper);
  document.querySelector('.button_ShiftLeft').addEventListener('mouseup', upper);

  document.querySelector('.button_ShiftRight').addEventListener('mousedown', upper);
  document.querySelector('.button_ShiftRight').addEventListener('mouseup', upper);  

  document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
    element.addEventListener('mousedown', () => {
      const code = element.getAttribute('data');
      element.classList.add('active');
      if (code !== 'Backspace' && code !== 'Tab' && code !== 'Delete' && code !== 'CapsLock' && code !== 'ShiftLeft' && code !== 'ShiftRight' && code !== 'ControlLeft' && code !== 'MetaLeft' && code !== 'AltLeft' && code !== 'AltRight' && code !== 'ControlRight' && code !== 'Enter') {
        textarea.focus();
        if (CapsLock === false) {
          textarea.innerHTML += `${languages[lang][code]}`;
        } else {
          textarea.innerHTML += `${languages[lang][code].toUpperCase()}`;
        }
      }
      if (code === 'Backspace') {
        textarea.focus();
        const pos = textarea.selectionStart;
        const posStr = textarea.innerHTML.substring(0, pos - 1);
        textarea.innerHTML = posStr + textarea.innerHTML.substring(pos);
        textarea.selectionStart = pos - 1;
        textarea.selectionEnd = pos - 1;
      }
      if (code === 'Delete') {
        textarea.focus();
        const posIndex = textarea.selectionStart;
        const posIndexStr = textarea.innerHTML.substring(0, posIndex);
        textarea.innerHTML = posIndexStr + textarea.innerHTML.substring(posIndex + 1);
        textarea.selectionStart = posIndex;
        textarea.selectionEnd = posIndex;
      }
      if (code === 'Enter') {
        textarea.innerHTML += '\n';
      }
      if (code === 'Tab') {
        textarea.innerHTML += '  ';
      }
      if (code === 'CapsLock') {
        document.querySelector('.button_CapsLock').classList.toggle('click');
        CapsLock = true;
        count += 1;
        if (count === 2) {
          CapsLock = false;
        }
      }
    });
  });
}
init();

document.addEventListener('keydown', (e) => {
  const keys = Object.keys(languages[lang]);
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelector(`.keyboard .keyboard__button[data=${e.code}]`).classList.add('active');
  }
  if (lang === 'en') {
    if (e.code === 'ControlLeft') {
      document.onkeyup = (event) => {
        if (event.code === 'AltLeft') {
          lang = 'ru';
          init();
        }
      };
    }
  } else if (lang === 'ru') {
    if (e.code === 'ControlLeft') {
      document.onkeyup = (event) => {
        if (event.code === 'AltLeft') {
          lang = 'en';
          init();
        }
      };
    }
  }
  const buttons = document.querySelectorAll('button');
  function upper() {
    for (let i = 0; i < buttons.length; i += 1) {
      if (i !== 13 && i !== 14 && i !== 28 && i !== 29 && i !== 41 && i !== 42 && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 59 && i !== 63) {
        buttons[i].classList.toggle('upper');
      }
    }
  }

  if (e.code !== 'Backspace' && e.code !== 'Tab' && e.code !== 'Delete' && e.code !== 'CapsLock' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight' && e.code !== 'ControlLeft' && e.code !== 'MetaLeft' && e.code !== 'AltLeft' && e.code !== 'AltRight' && e.code !== 'ControlRight' && e.code !== 'Enter') {
    if (CapsLock === false) {
      textarea.innerHTML += `${languages[lang][e.code]}`;
    } else {
      textarea.innerHTML += `${languages[lang][e.code].toUpperCase()}`;
    }
  }
  if (e.code === 'AltRight') {
    document.querySelector('.keyboard .keyboard__button_ControlLeft').classList.remove('active');
  }
  if (e.code === 'Enter') {
    textarea.innerHTML += '\n';
  }
  if (e.code === 'Tab') {
    textarea.innerHTML += '   ';
  }
  if (e.code === 'CapsLock') {
    upper();
    document.querySelector('.button_CapsLock').classList.toggle('click');
    count += 1;
    CapsLock = true;
    if (count === 2) {
      CapsLock = false;
    }
  }
  if (e.code === 'ShiftLeft') {
    upper();
  }
  if (e.code === 'ShiftRight') {
    upper();
  }
});
document.addEventListener('keyup', (e) => {
  const keys = Object.keys(languages[lang]);
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
      element.classList.remove('active');
    });
  }
  const buttons = document.querySelectorAll('button');
  function upper() {
    for (let i = 0; i < buttons.length; i += 1) {
      if (i !== 13 && i !== 14 && i !== 28 && i !== 29 && i !== 41 && i !== 42 && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 59 && i !== 63) {
        buttons[i].classList.toggle('upper');
      }
    }
  }
  if (e.code === 'ShiftLeft') {
    upper();
  }
  if (e.code === 'ShiftRight') {
    upper();
  }
});

document.addEventListener('mouseout', () => {
  const keys = Object.keys(languages[lang]);
  for (let i = 0; i < keys.length; i += 1) {
    document.querySelectorAll('.keyboard .keyboard__button').forEach((element) => {
      if (element.contains !== '.button_CapsLock') {
        element.classList.remove('active');
      }
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
