const cards = [];
class Cartas {
  constructor(name, url, audio) {
    this.name = name;
    this.url = url;
    this.audio = audio;
  }
}

/* const elGallo = new Cartas('EL GALLO', 'https://1.bp.blogspot.com/-iQjXVrBMhN0/YUKJ80ry5iI/AAAAAAAAHMM/VRoYL5DT_cwQLsC7yWVy00Z7WsUgfCZnACLcBGAsYHQ/w202-h320/1%2Bel%2Bgallo-min.jpg');
const elDiablito = new Cartas('EL DIABLITO', 'https://1.bp.blogspot.com/-pnkkLKH8q4E/YUKKIDqiVMI/AAAAAAAAHMw/GXdMrhY5zGAM2B63soguZ2IlvJjgAHwkgCLcBGAsYHQ/w202-h320/2%2Bel%2Bdiablito-min.jpg');
const laDama = new Cartas('LA DAMA', 'https://1.bp.blogspot.com/-W7xBNE-nrfI/YUKKaN9BcOI/AAAAAAAAHNo/VQMpSZn1xKYYZhLkttD6YBRbG9SyaPtAgCLcBGAsYHQ/w202-h320/3%2Bla%2Bdama-min.jpg');
const elCatrin = new Cartas('EL CATRIN', 'https://1.bp.blogspot.com/-Z_IZF9I1KKI/YUKKq95H7UI/AAAAAAAAHOc/brJ8Y-B85t0wDrXPpzjYv3eAzcsUUEE_wCLcBGAsYHQ/w202-h320/4%2Bel%2Bcatrin-min.jpg');
const elParaguas = new Cartas('EL PARAGUAS', 'https://1.bp.blogspot.com/-3z_FBMF4yNw/YUKK6_QjNAI/AAAAAAAAHPQ/I_C6eMgRk9kVP27ZwYy62hokhuQ9Sw3IwCLcBGAsYHQ/w202-h320/5%2Bel%2Bparaguas-min.jpg');
const laSirena = new Cartas('LA SIRENA', 'https://i.pinimg.com/originals/fa/fd/0e/fafd0ed0c9b52ad0c1d5778f7cbf3609.jpg');
const laEscalera = new Cartas('LA ESCALERA', 'https://1.bp.blogspot.com/-WsVdz6CBjo4/YUKLGa4ZC8I/AAAAAAAAHPw/JAnTQH4rfNkyA4Et3KIHZer6XFfGnCdRQCLcBGAsYHQ/w202-h320/7%2Bla%2Bescalera-min.jpg');
const laBotella = new Cartas('LA BOTELLA', 'https://1.bp.blogspot.com/-AxJOd5NfD4o/YUKLHvlNAEI/AAAAAAAAHP4/F8HyrFNGkFw_YOMws1Fk2vrVCWIK0NTLwCLcBGAsYHQ/w202-h320/8%2Bla%2Bbotella-min.jpg');
const elBarril = new Cartas('EL BARRIL', 'https://1.bp.blogspot.com/-sfb8n_eGs-M/YUKLGiBgVPI/AAAAAAAAHP0/7b03QoCLXEMgG4CkoaopRfDGHmdb33MzQCLcBGAsYHQ/w202-h320/9%2Bbarril-min.jpg');
const elArbol = new Cartas('EL ARBOL', 'https://1.bp.blogspot.com/-k-qGeaB8_og/YUKJ8rMZ35I/AAAAAAAAHMI/hDSeNB_4ksQYzBcYDQN2PRt2zQz3wqXSACLcBGAsYHQ/w202-h320/10%2Barbol-min.jpg');
const elMelon = new Cartas('EL MELON', 'https://1.bp.blogspot.com/-mn1kt851OPM/YUKJ-KlimCI/AAAAAAAAHMQ/N1M6jLqHlMYs32JIMMnc1QuyNz60S-NrQCLcBGAsYHQ/w202-h320/11%2Bmelon-min.jpg');
const elValiente = new Cartas('EL VALIENTE', 'https://1.bp.blogspot.com/-b0KLdh23AJ4/YUKKBiEKjpI/AAAAAAAAHMY/UkE1aCfNGNgxozJFG_DwETKdXBVj3BnMQCLcBGAsYHQ/w202-h320/12%2Bel%2Bvaliente-min.jpg');
const elGorrito = new Cartas('EL GORRITO', 'https://1.bp.blogspot.com/-TIOH8FGj_A8/YUKJ_rmMcWI/AAAAAAAAHMU/4HtqS_gjkXMJyY9VVd5QLKbjE67KIQdLACLcBGAsYHQ/w202-h320/13%2Bel%2Bgorrito-min.jpg');
const laMuerte = new Cartas('LA MUERTE', 'https://1.bp.blogspot.com/-AfCGIBgaF4M/YUKKD4Rz9bI/AAAAAAAAHMc/F4SvwaP1NaU-Tum_dkaD6mL-JDbZslEBwCLcBGAsYHQ/w202-h320/14%2Bla%2Bmuerte-min.jpg');
const laPera = new Cartas('LA PERA', 'https://1.bp.blogspot.com/-99ethasxGK8/YUKKEudlvII/AAAAAAAAHMk/OnWmlJUyoJoSdWwrM9dbbBxCvh6zykDWwCLcBGAsYHQ/w202-h320/15%2Bla%2Bpera-min.jpg');
const laBandera = new Cartas('LA BANDERA', 'https://1.bp.blogspot.com/-AvAZLve_QhE/YUKKErkMTlI/AAAAAAAAHMg/_NFoidN3LE8oyGLeNF_Pk4J3kKMooNWvgCLcBGAsYHQ/w202-h320/16%2Bla%2Bbandera-min.jpg');
const elBandolon = new Cartas('EL BANDOLON', 'https://1.bp.blogspot.com/-Tql0UW3T6zA/YUKKHIzzoYI/AAAAAAAAHMs/zZUXxPIFcLk0GZ09cxhuhR811k8VtEFaACLcBGAsYHQ/w202-h320/17%2Bel%2Bbandolon-min.jpg');
const elVioloncello = new Cartas('EL VIOLONCELLO', 'https://1.bp.blogspot.com/-9QnYJD5GITg/YUKKF7HBUXI/AAAAAAAAHMo/AzNnBW7ODqok0eipSPJmZDDQWTedgG58wCLcBGAsYHQ/w202-h320/18%2Bel%2Bvioloncello-min.jpg');
const laGarza = new Cartas('LA GARZA', 'https://1.bp.blogspot.com/-DvP_rVjyle0/YUKKIfndh6I/AAAAAAAAHM0/29u7ksQFgnInEQ4O1WJaLUBRfBLBkTPoQCLcBGAsYHQ/w202-h320/19%2Bla%2Bgarza-min.jpg');
const elPajaro = new Cartas('EL PAJARO', 'https://1.bp.blogspot.com/-ILVg8Dwul2Y/YUKKLsZQHMI/AAAAAAAAHM8/g95p-_wohisNk6C2MqMs6NyRzMTziHNlACLcBGAsYHQ/w202-h320/20%2Bel%2Bpajaro-min.jpg');
const laMano = new Cartas('LA MANO', 'https://1.bp.blogspot.com/-XhSQLQeJG6M/YUKKNYeZXqI/AAAAAAAAHNA/E7gHv4NTf7MDzXvlPrjVt76lHxme4vX0wCLcBGAsYHQ/w202-h320/21%2Bla%2Bmano-min.jpg');
const laBota = new Cartas('LA BOTA', 'https://1.bp.blogspot.com/-vj0HudaxjVw/YUKKKN4BnwI/AAAAAAAAHM4/kJ_UhMnpzuUoMsHnASJrKd23ZAPwbNpvgCLcBGAsYHQ/w202-h320/22%2Bla%2Bbota-min.jpg');
const laLuna = new Cartas('LA LUNA', 'https://1.bp.blogspot.com/-PAJbRIrb0QE/YUKKNujdZ7I/AAAAAAAAHNE/I734cPEGWHILhrNQYKZFMg2BsEWZdz80gCLcBGAsYHQ/w202-h320/23%2Bla%2Bluna-min.jpg');
const elCotorro = new Cartas('EL COTORRO', 'https://1.bp.blogspot.com/-YaFo8kWfSBs/YUKKPNLn-5I/AAAAAAAAHNI/qcQVfBcrJSgckPyEymUKwJ_AzbtXH1ZgACLcBGAsYHQ/w202-h320/24%2Bel%2Bcotorro-min.jpg');
const elBorracho = new Cartas('EL BORRACHO', 'https://1.bp.blogspot.com/-Od8b_7wiXC0/YUKKR2aBaMI/AAAAAAAAHNQ/qVGBBh63D3krUxW1Ou36vzYdArcpMuc0QCLcBGAsYHQ/w202-h320/25%2Bel%2Bborracho-min.jpg');
const elNegrito = new Cartas('EL NEGRITO', 'https://1.bp.blogspot.com/-kRXZ35XKhwQ/YUKKRTJYx5I/AAAAAAAAHNM/QNuhE__eiE89VcJM6JU1okr-pDCSDZJyQCLcBGAsYHQ/w202-h320/26%2Bel%2Bnegrito-min.jpg');
const elCorazon = new Cartas('EL CORAZON', 'https://1.bp.blogspot.com/-MHo9Cgm_mQk/YUKKTe_dNhI/AAAAAAAAHNU/LOp_jrhAFL4HzdwDRv7oWCB4T59YODXxgCLcBGAsYHQ/w202-h320/27%2Bel%2Bcorazon-min.jpg');
const laSandia = new Cartas('LA SANDIA', 'https://1.bp.blogspot.com/-3-UcF51Bo4s/YUKKUpr1CSI/AAAAAAAAHNc/b5RPStl6ibAKZXCnPLObENnULWmq2jHYgCLcBGAsYHQ/w202-h320/28%2Bla%2Bsandia-min.jpg');
const elTambor = new Cartas('EL TAMBOR', 'https://1.bp.blogspot.com/-yEbzmb0gmtk/YUKKU-uom2I/AAAAAAAAHNg/8mi3Kv6ylIcciuR5LP6pLK27RNcsb9CBwCLcBGAsYHQ/w202-h320/29%2Bel%2Btambor-min.jpg');
const elCamaron = new Cartas('EL CAMARON', 'https://1.bp.blogspot.com/-VZjXO-I46FY/YUKKX4-fEcI/AAAAAAAAHNk/fH5T0xrKjmE36yXi2II7iS_c1t0O07tlQCLcBGAsYHQ/w202-h320/30%2Bel%2Bcamaron-min.jpg');
const lasJaras = new Cartas('LAS JARAS', 'https://1.bp.blogspot.com/-zlbXsDDtqbI/YUKKb1mfYJI/AAAAAAAAHNs/pbFgO_ZyvqMs0GnO_6s_zG4ETwbVS9R9QCLcBGAsYHQ/w202-h320/31%2Blas%2Bjaras-min.jpg');
const elMusico = new Cartas('EL MUSICO', 'https://1.bp.blogspot.com/-5QSCSifjlpE/YUKKdWreCfI/AAAAAAAAHNw/5j47A7FiDcowMhINiU7fNUbr4oV5OenSwCLcBGAsYHQ/w202-h320/32%2Bel%2Bmusico-min.jpg');
const laArana = new Cartas('LA ARAÑA', 'https://1.bp.blogspot.com/-XgtJm-7btHw/YUKKfF5IsUI/AAAAAAAAHN0/PnMDK81JHuk0nqvZ-BFXdyD-HHlMGUoUgCLcBGAsYHQ/w202-h320/33%2Bla%2Bara%252B%25C2%25A6a-min.jpg');
const elSoldado = new Cartas('EL SOLDADO', 'https://1.bp.blogspot.com/-q7-9hNAbsvk/YUKKg9kvFDI/AAAAAAAAHN8/J4Kj85K72MU7WGfgxkKsRyE8uhszxjtUACLcBGAsYHQ/w202-h320/34%2Bel%2Bsoldado-min.jpg');
const laEstrella = new Cartas('LA ESTRELLA', 'https://1.bp.blogspot.com/-3pNWQ1RkGOg/YUKKhCNieAI/AAAAAAAAHOA/vTWonYjpfaYBliy0wWxuqRurRsIepSaNQCLcBGAsYHQ/w202-h320/35%2Bla%2Bestrella-min.jpg');
const elCazo = new Cartas('EL CAZO', 'https://1.bp.blogspot.com/-IjsAZaQ0HOs/YUKKkDZxKnI/AAAAAAAAHOI/nUbFfgljVmU1BIoJSuvoy6utUFKS1hf_QCLcBGAsYHQ/w202-h320/36%2Bel%2Bcazo-min.jpg');
const elMundo = new Cartas('EL MUNDO', 'https://1.bp.blogspot.com/-4RHeOkFRmXg/YUKKmNn6s9I/AAAAAAAAHOM/TRFwy9qXgSQ-jnl8kziG7zoVVfOQ89goQCLcBGAsYHQ/w202-h320/37%2Bel%2Bmundo-min.jpg');
const elApache = new Cartas('EL APACHE', 'https://1.bp.blogspot.com/-vGIt7BJN54Q/YUKKnD9N2mI/AAAAAAAAHOQ/hh9K7Xz4uFUEpff7d_wiw0n3VWKzLL-UgCLcBGAsYHQ/w202-h320/38%2Bel%2Bapache-min.jpg');
const elNopal = new Cartas('EL NOPAL', 'https://1.bp.blogspot.com/-8tlzFwaxrhc/YUKKqF3-ScI/AAAAAAAAHOY/Sr0C8TXTTvMRuincYcOeZZYbbBaBhJQcwCLcBGAsYHQ/w202-h320/39%2Bel%2Bnopal-min.jpg');
const elAlacran = new Cartas('EL ALACRAN', 'https://1.bp.blogspot.com/-IMaNs2Tq_oc/YUKKp3sur4I/AAAAAAAAHOU/DNRfpiVnIZM2dxRYnMteWSXMDTjV36iqACLcBGAsYHQ/w202-h320/40%2Bel%2Balacran-min.jpg');
const laRosa = new Cartas('LA ROSA', 'https://1.bp.blogspot.com/-42yHND1b224/YUKKvXNpnfI/AAAAAAAAHOk/QR74-FFTtjUtgjOFR3FWC6JM5-gWKNSuwCLcBGAsYHQ/s320/41%2Bla%2Brosa-min.jpg');
const laCalavera = new Cartas('LA CALAVERA', 'https://1.bp.blogspot.com/-YgN_ruDXzqo/YUKKvgSadeI/AAAAAAAAHOo/ATw9G9aud_klnwRv-3vf43ZWVJ7AvjXOQCLcBGAsYHQ/w202-h320/42%2Bla%2Bcalavera-min.jpg');
const laCampana = new Cartas('LA CAMPANA', 'https://1.bp.blogspot.com/-cszOuUVjHhw/YUKKvyvK-mI/AAAAAAAAHOs/Gu03PjdHD5Q2BWmJLsQMuY_SgatOZ3NTwCLcBGAsYHQ/w202-h320/43%2Bla%2Bcampana-min.jpg');
const elCantarito = new Cartas('EL CANTARITO', 'https://1.bp.blogspot.com/-fNGNYOPLJJo/YUKKyl6doTI/AAAAAAAAHO0/H_wiGoxZyf0IEcRRnAjzJfb2DKODYJ0twCLcBGAsYHQ/w202-h320/44%2Bel%2Bcantarito-min.jpg');
const elVenado = new Cartas('EL VENADO', 'https://1.bp.blogspot.com/-a7tR7tUtfn8/YUKK1MCAdBI/AAAAAAAAHO8/DiIhx10ScGknlosLP67DtU428jhCn38YQCLcBGAsYHQ/w202-h320/45%2Bel%2Bvenado-min.jpg');
const elSol = new Cartas('EL SOL', 'https://1.bp.blogspot.com/-oH8qFgYVq6M/YUKK0vfpUKI/AAAAAAAAHO4/n_cwXsp5n6EhVBVLJeg3tsZERco51ixxwCLcBGAsYHQ/w202-h320/46%2Bel%2Bsol-min.jpg');
const laCorona = new Cartas('LA CORONA', 'https://1.bp.blogspot.com/-6NDlzImKtEU/YUKK2xWuyvI/AAAAAAAAHPA/48jxmXSTpHABvgCveVkll6t7-oCk00JnwCLcBGAsYHQ/w202-h320/47%2Bla%2Bcorona-min.jpg');
const laChalupa = new Cartas('LA CHALUPA', 'https://1.bp.blogspot.com/-PMduQMkhjW0/YUKK4TpyF6I/AAAAAAAAHPE/m3zyvoUeLo0UxBhPC4959NHF0xLLPQjagCLcBGAsYHQ/w202-h320/48%2Bla%2Bchalupa-min.jpg');
const elPino = new Cartas('EL PINO', 'https://1.bp.blogspot.com/-HIurteJh90E/YUKK6cwOs_I/AAAAAAAAHPM/7Pfx3TANrxQTnLb6CFk5KYTr73weVd1HACLcBGAsYHQ/w202-h320/49%2Bel%2Bpino-min.jpg');
const elPescado = new Cartas('EL PESCADO', 'https://1.bp.blogspot.com/-blJRGNm830g/YUKK8l6GwoI/AAAAAAAAHPU/8G5yyUsccjoaBisPowmN9QEXZoQ_EVfzwCLcBGAsYHQ/w202-h320/50%2Bel%2Bpescado-min.jpg');
const laPalma = new Cartas('LA PALMA', 'https://1.bp.blogspot.com/-Quu5Y5iO3Ms/YUKK_KytYfI/AAAAAAAAHPY/WZkCku6uoaIB9jJLSk8OaPAudU7-uMpIACLcBGAsYHQ/w202-h320/51%2Bla%2Bpalma-min.jpg');
const laMaseta = new Cartas('LA MASETA', 'https://1.bp.blogspot.com/-V0EK-hXsFpI/YUKK_g3_5SI/AAAAAAAAHPc/pYImBSg3GYobKXxtC7vx9jV81Zk5RvffgCLcBGAsYHQ/w202-h320/52%2Bla%2Bmaceta-min.jpg');
const elArpa = new Cartas('EL ARPA', 'https://1.bp.blogspot.com/-JPWPCcK3_bk/YUKLBWFs_vI/AAAAAAAAHPg/5bkt-XUYQsAQ24xBSs5iHJA74-1Zdlj-QCLcBGAsYHQ/w202-h320/53%2Bel%2Barpa-min.jpg');
const laRana = new Cartas('LA RANA', 'https://1.bp.blogspot.com/-qXzoXc2RZBw/YUKLDvI0HdI/AAAAAAAAHPk/i_FIDvgrihAWqJyM2tL7uZCvhg5GfHdUQCLcBGAsYHQ/w202-h320/54%2Bla%2Brana-min.jpg'); */

const elGallo = new Cartas('EL GALLO', '../img/1.webp','../audios/francisco/1.mp3');
const elDiablito = new Cartas('EL DIABLITO', '../img/2.webp','../audios/francisco/2.mp3');
const laDama = new Cartas('LA DAMA', '../img/3.webp','../audios/francisco/3.mp3');
const elCatrin = new Cartas('EL CATRIN', '../img/4.webp','../audios/francisco/4.mp3');
const elParaguas = new Cartas('EL PARAGUAS', '../img/5.webp','../audios/francisco/5.mp3');
const laSirena = new Cartas('LA SIRENA', '../img/6.webp','../audios/francisco/6.mp3');
const laEscalera = new Cartas('LA ESCALERA', '../img/7.webp','../audios/francisco/7.mp3');
const laBotella = new Cartas('LA BOTELLA', '../img/8.webp','../audios/francisco/8.mp3');
const elBarril = new Cartas('EL BARRIL', '../img/9.webp','../audios/francisco/9.mp3');
const elArbol = new Cartas('EL ARBOL', '../img/10.webp','../audios/francisco/10.mp3');
const elMelon = new Cartas('EL MELON', '../img/11.webp','../audios/francisco/11.mp3');
const elValiente = new Cartas('EL VALIENTE', '../img/12.webp','../audios/francisco/12.mp3');
const elGorrito = new Cartas('EL GORRITO', '../img/13.webp','../audios/francisco/13.mp3');
const laMuerte = new Cartas('LA MUERTE', '../img/14.webp','../audios/francisco/14.mp3');
const laPera = new Cartas('LA PERA', '../img/15.webp','../audios/francisco/15.mp3');
const laBandera = new Cartas('LA BANDERA', '../img/16.webp','../audios/francisco/16.mp3');
const elBandolon = new Cartas('EL BANDOLON', '../img/17.webp','../audios/francisco/17.mp3');
const elVioloncello = new Cartas('EL VIOLONCELLO', '../img/18.webp','../audios/francisco/18.mp3');
const laGarza = new Cartas('LA GARZA', '../img/19.webp','../audios/francisco/19.mp3');
const elPajaro = new Cartas('EL PAJARO', '../img/20.webp','../audios/francisco/20.mp3');
const laMano = new Cartas('LA MANO', '../img/21.webp','../audios/francisco/21.mp3');
const laBota = new Cartas('LA BOTA', '../img/22.webp','../audios/francisco/22.mp3');
const laLuna = new Cartas('LA LUNA', '../img/23.webp','../audios/francisco/23.mp3');
const elCotorro = new Cartas('EL COTORRO', '../img/24.webp','../audios/francisco/24.mp3');
const elBorracho = new Cartas('EL BORRACHO', '../img/25.webp','../audios/francisco/25.mp3');
const elNegrito = new Cartas('EL NEGRITO', '../img/26.webp','../audios/francisco/26.mp3');
const elCorazon = new Cartas('EL CORAZON', '../img/27.webp','../audios/francisco/27.mp3');
const laSandia = new Cartas('LA SANDIA', '../img/28.webp','../audios/francisco/28.mp3');
const elTambor = new Cartas('EL TAMBOR', '../img/29.webp','../audios/francisco/29.mp3');
const elCamaron = new Cartas('EL CAMARON', '../img/30.webp','../audios/francisco/30.mp3');
const lasJaras = new Cartas('LAS JARAS', '../img/31.webp','../audios/francisco/31.mp3');
const elMusico = new Cartas('EL MUSICO', '../img/32.webp','../audios/francisco/32.mp3');
const laArana = new Cartas('LA ARAÑA', '../img/33.webp','../audios/francisco/33.mp3');
const elSoldado = new Cartas('EL SOLDADO', '../img/34.webp','../audios/francisco/34.mp3');
const laEstrella = new Cartas('LA ESTRELLA', '../img/35.webp','../audios/francisco/35.mp3');
const elCazo = new Cartas('EL CAZO', '../img/36.webp','../audios/francisco/36.mp3');
const elMundo = new Cartas('EL MUNDO', '../img/37.webp','../audios/francisco/37.mp3');
const elApache = new Cartas('EL APACHE', '../img/38.webp','../audios/francisco/38.mp3');
const elNopal = new Cartas('EL NOPAL', '../img/39.webp','../audios/francisco/39.mp3');
const elAlacran = new Cartas('EL ALACRAN', '../img/40.webp','../audios/francisco/40.mp3');
const laRosa = new Cartas('LA ROSA', '../img/41.webp','../audios/francisco/41.mp3');
const laCalavera = new Cartas('LA CALAVERA', '../img/42.webp','../audios/francisco/42.mp3');
const laCampana = new Cartas('LA CAMPANA', '../img/43.webp','../audios/francisco/43.mp3');
const elCantarito = new Cartas('EL CANTARITO', '../img/44.webp','../audios/francisco/44.mp3');
const elVenado = new Cartas('EL VENADO', '../img/45.webp','../audios/francisco/45.mp3');
const elSol = new Cartas('EL SOL', '../img/46.webp','../audios/francisco/46.mp3');
const laCorona = new Cartas('LA CORONA', '../img/47.webp','../audios/francisco/47.mp3');
const laChalupa = new Cartas('LA CHALUPA', '../img/48.webp','../audios/francisco/48.mp3');
const elPino = new Cartas('EL PINO', '../img/49.webp','../audios/francisco/49.mp3');
const elPescado = new Cartas('EL PESCADO', '../img/50.webp','../audios/francisco/50.mp3');
const laPalma = new Cartas('LA PALMA', '../img/51.webp','../audios/francisco/51.mp3');
const laMaseta = new Cartas('LA MACETA', '../img/52.webp','../audios/francisco/52.mp3');
const elArpa = new Cartas('EL ARPA', '../img/53.webp','../audios/francisco/53.mp3');
const laRana = new Cartas('LA RANA', '../img/54.webp','../audios/francisco/54.mp3');
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

    console.log(count);
    restantes--;
    carta.innerHTML = `Cartas restantes: ${restantes}`;
    img.src = cards[count].url;
    console.log(cards[count]);
    playAudio(cards[count].audio);
    count++;
  }
}
