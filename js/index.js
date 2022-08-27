const cards = [];
class Cartas {
  constructor(name, url, audio, color) {
    this.name = name;
    this.url = url;
    this.audio = audio;
    this.color = color;
  }
}


//Colores
const amarillo = '#fffe1a';
const azul = '../img/fondoAzul.jpg';
const rosa = '../img/fondoRosa.jpg';
const azulCeleste = '../img/fondoAzul_celeste.jpg';
const white = '#FFFDFF';

const elGallo = new Cartas('EL GALLO', '../img/1.webp','../audios/francisco/1.mp3', `${azulCeleste}`);
const elDiablito = new Cartas('EL DIABLITO', '../img/2.webp','../audios/francisco/2.mp3',`${amarillo}`);
const laDama = new Cartas('LA DAMA', '../img/3.webp','../audios/francisco/3.mp3', `${azulCeleste}`);
const elCatrin = new Cartas('EL CATRIN', '../img/4.webp','../audios/francisco/4.mp3' ,`${amarillo}`);
const elParaguas = new Cartas('EL PARAGUAS', '../img/5.webp','../audios/francisco/5.mp3', `${azul}`);
const laSirena = new Cartas('LA SIRENA', '../img/6.webp','../audios/francisco/6.mp3' , `${azulCeleste}`);
const laEscalera = new Cartas('LA ESCALERA', '../img/7.webp','../audios/francisco/7.mp3', `${azulCeleste}`);
const laBotella = new Cartas('LA BOTELLA', '../img/8.webp','../audios/francisco/8.mp3', `${rosa}`);
const elBarril = new Cartas('EL BARRIL', '../img/9.webp','../audios/francisco/9.mp3',`${amarillo}`);
const elArbol = new Cartas('EL ARBOL', '../img/10.webp','../audios/francisco/10.mp3', `${azulCeleste}`);
const elMelon = new Cartas('EL MELON', '../img/11.webp','../audios/francisco/11.mp3', `${azulCeleste}`);
const elValiente = new Cartas('EL VALIENTE', '../img/12.webp','../audios/francisco/12.mp3', `${azulCeleste}`);
const elGorrito = new Cartas('EL GORRITO', '../img/13.webp','../audios/francisco/13.mp3', `${amarillo}`);
const laMuerte = new Cartas('LA MUERTE', '../img/14.webp','../audios/francisco/14.mp3', `${rosa}`);
const laPera = new Cartas('LA PERA', '../img/15.webp','../audios/francisco/15.mp3', `${azulCeleste}`);
const laBandera = new Cartas('LA BANDERA', '../img/16.webp','../audios/francisco/16.mp3', `${amarillo}`);
const elBandolon = new Cartas('EL BANDOLON', '../img/17.webp','../audios/francisco/17.mp3', `${azul}`);
const elVioloncello = new Cartas('EL VIOLONCELLO', '../img/18.webp','../audios/francisco/18.mp3', `${white}`);
const laGarza = new Cartas('LA GARZA', '../img/19.webp','../audios/francisco/19.mp3', `${azulCeleste}`);
const elPajaro = new Cartas('EL PAJARO', '../img/20.webp','../audios/francisco/20.mp3', `${azulCeleste}`);
const laMano = new Cartas('LA MANO', '../img/21.webp','../audios/francisco/21.mp3', `${azulCeleste}`);
const laBota = new Cartas('LA BOTA', '../img/22.webp','../audios/francisco/22.mp3',`${amarillo}`);
const laLuna = new Cartas('LA LUNA', '../img/23.webp','../audios/francisco/23.mp3', `${azul}`);
const elCotorro = new Cartas('EL COTORRO', '../img/24.webp','../audios/francisco/24.mp3', `${azul}`);
const elBorracho = new Cartas('EL BORRACHO', '../img/25.webp','../audios/francisco/25.mp3' , `${rosa}`);
const elNegrito = new Cartas('EL NEGRITO', '../img/26.webp','../audios/francisco/26.mp3' , `${amarillo}`);
const elCorazon = new Cartas('EL CORAZON', '../img/27.webp','../audios/francisco/27.mp3', `${amarillo}`);
const laSandia = new Cartas('LA SANDIA', '../img/28.webp','../audios/francisco/28.mp3', `${amarillo}`);
const elTambor = new Cartas('EL TAMBOR', '../img/29.webp','../audios/francisco/29.mp3', `${azul}`);
const elCamaron = new Cartas('EL CAMARON', '../img/30.webp','../audios/francisco/30.mp3', `${amarillo}`);
const lasJaras = new Cartas('LAS JARAS', '../img/31.webp','../audios/francisco/31.mp3', `${azulCeleste}`);
const elMusico = new Cartas('EL MUSICO', '../img/32.webp','../audios/francisco/32.mp3', `${azulCeleste}`);
const laArana = new Cartas('LA ARAÑA', '../img/33.webp','../audios/francisco/33.mp3', `${azulCeleste}`);
const elSoldado = new Cartas('EL SOLDADO', '../img/34.webp','../audios/francisco/34.mp3' , `${amarillo}`);
const laEstrella = new Cartas('LA ESTRELLA', '../img/35.webp','../audios/francisco/35.mp3', `${azul}`);
const elCazo = new Cartas('EL CAZO', '../img/36.webp','../audios/francisco/36.mp3', `${azulCeleste}`);
const elMundo = new Cartas('EL MUNDO', '../img/37.webp','../audios/francisco/37.mp3', `${azulCeleste}`);
const elApache = new Cartas('EL APACHE', '../img/38.webp','../audios/francisco/38.mp3', `${azulCeleste}`);
const elNopal = new Cartas('EL NOPAL', '../img/39.webp','../audios/francisco/39.mp3', `${azulCeleste}`);
const elAlacran = new Cartas('EL ALACRAN', '../img/40.webp','../audios/francisco/40.mp3', `${amarillo}`);
const laRosa = new Cartas('LA ROSA', '../img/41.webp','../audios/francisco/41.mp3', `${azulCeleste}`);
const laCalavera = new Cartas('LA CALAVERA', '../img/42.webp','../audios/francisco/42.mp3', `${rosa}`);
const laCampana = new Cartas('LA CAMPANA', '../img/43.webp','../audios/francisco/43.mp3', `${azulCeleste}`);
const elCantarito = new Cartas('EL CANTARITO', '../img/44.webp','../audios/francisco/44.mp3', `${amarillo}`);
const elVenado = new Cartas('EL VENADO', '../img/45.webp','../audios/francisco/45.mp3', `${azulCeleste}`);
const elSol = new Cartas('EL SOL', '../img/46.webp','../audios/francisco/46.mp3', `${azulCeleste}`);
const laCorona = new Cartas('LA CORONA', '../img/47.webp','../audios/francisco/47.mp3', `${azul}`);
const laChalupa = new Cartas('LA CHALUPA', '../img/48.webp','../audios/francisco/48.mp3', `${azulCeleste}`);
const elPino = new Cartas('EL PINO', '../img/49.webp','../audios/francisco/49.mp3', `${azulCeleste}`);
const elPescado = new Cartas('EL PESCADO', '../img/50.webp','../audios/francisco/50.mp3',`${azulCeleste}`);
const laPalma = new Cartas('LA PALMA', '../img/51.webp','../audios/francisco/51.mp3', `${azulCeleste}`);
const laMaseta = new Cartas('LA MACETA', '../img/52.webp','../audios/francisco/52.mp3', `${azulCeleste}`);
const elArpa = new Cartas('EL ARPA', '../img/53.webp','../audios/francisco/53.mp3', `${azulCeleste}`);
const laRana = new Cartas('LA RANA', '../img/54.webp','../audios/francisco/54.mp3', `${azulCeleste}`);

const etiquetaAudio = document.createElement("audio");

const randomButton = document.querySelector('.random');
const carta = document.querySelector('.carta');
const img = document.querySelector('.img');
const reboot = document.querySelector('.reboot');
const listCard = document.querySelector('.list-card');
reboot.style.display = 'none';


cards.push(
  elGallo, elDiablito, laDama, elCatrin, elParaguas, laSirena,
  laEscalera, laBotella, elBarril, elArbol, elMelon,
  elValiente, elGorrito, laMuerte, laPera, laBandera,
  elBandolon, elVioloncello, laGarza, elPajaro, laMano,
  laBota, laLuna, elCotorro, elBorracho, elNegrito,
  elCorazon, laSandia, elTambor, elCamaron, lasJaras,
  elMusico, laArana, elSoldado, laEstrella, elCazo,
  elMundo, elApache, elNopal, elAlacran, laRosa,
  laCalavera, laCampana, elCantarito, elVenado, elSol,
  laCorona, laChalupa, elPino, elPescado, laPalma,
  laMaseta, elArpa, laRana
);

let count = 0;
let restantes = 54;

cards.sort(function() {return Math.random() - 0.5});

randomButton.addEventListener('click',(startRandom));
reboot.addEventListener('click',(rebootPage));

function playAudio(audio){
  etiquetaAudio.pause();
  etiquetaAudio.setAttribute("src", audio);
  etiquetaAudio.play();
}

function playAudioReiniciar(){
  etiquetaAudio.pause();
  etiquetaAudio.setAttribute("src", '../audios/fx/shuffle_cards.mp3');
  etiquetaAudio.play();
}

function rebootPage(){
  playAudioReiniciar();
  setTimeout(function(){
      location.reload();
  },200);
}

function startRandom() {
  if(cards[count] === undefined){
    carta.innerHTML = 'Las cartas se han terminado';

    listCard.classList.remove('display-none');

    img.style.display = 'none';
    randomButton.style.display ='none';
    reboot.style.display = 'block';
  } else {
    //carta.innerHTML = cards[count].name;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}: ${cards[count].name}`;
    listCard.appendChild(p);

    document.body.style.backgroundColor = cards[count].color;
    document.body.style.backgroundImage = `url('${cards[count].color}')`;

    console.log(count);
    restantes--;
    carta.innerHTML = `Cartas restantes: ${restantes}`;
    img.src = cards[count].url;
    console.log(cards[count]);
    playAudio(cards[count].audio);
    count++;
  }
}
