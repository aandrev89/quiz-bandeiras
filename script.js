// Função para embaralhar o array de bandeiras ou opções usando o algoritmo Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de lugar
    }
}

const flags = [
    {
        country: 'Afeganistão',
        image: 'https://flagcdn.com/w320/af.png',
        options: ['Afeganistão', 'Paquistão', 'Irão'],
        correct: 'Afeganistão'
      },
      {
        country: 'Ilhas Åland',
        image: 'https://flagcdn.com/w320/ax.png',
        options: ['Ilhas Åland', 'Finlândia', 'Suécia'],
        correct: 'Ilhas Åland'
      },
      {
        country: 'Albânia',
        image: 'https://flagcdn.com/w320/al.png',
        options: ['Albânia', 'Grécia', 'Montenegro'],
        correct: 'Albânia'
      },
      {
        country: 'Argélia',
        image: 'https://flagcdn.com/w320/dz.png',
        options: ['Argélia', 'Marrocos', 'Líbia'],
        correct: 'Argélia'
      },
      {
        country: 'Samoa Americana',
        image: 'https://flagcdn.com/w320/as.png',
        options: ['Samoa Americana', 'Samoa', 'Tonga'],
        correct: 'Samoa Americana'
      },
      {
        country: 'Andorra',
        image: 'https://flagcdn.com/w320/ad.png',
        options: ['Andorra', 'Espanha', 'França'],
        correct: 'Andorra'
      },
      {
        country: 'Angola',
        image: 'https://flagcdn.com/w320/ao.png',
        options: ['Angola', 'Namíbia', 'República Democrática do Congo'],
        correct: 'Angola'
      },
      {
        country: 'Anguilla',
        image: 'https://flagcdn.com/w320/ai.png',
        options: ['Anguilla', 'Ilhas Virgens Britânicas', 'São Martinho'],
        correct: 'Anguilla'
      },
      {
        country: 'Antártida',
        image: 'https://flagcdn.com/w320/aq.png',
        options: ['Antártida', 'América do Sul', 'Ártico'],
        correct: 'Antártida'
      },
      {
        country: 'Antígua e Barbuda',
        image: 'https://flagcdn.com/w320/ag.png',
        options: ['Antígua e Barbuda', 'São Cristóvão e Nevis', 'Dominica'],
        correct: 'Antígua e Barbuda'
      },
      {
        country: 'Argentina',
        image: 'https://flagcdn.com/w320/ar.png',
        options: ['Argentina', 'Chile', 'Brasil'],
        correct: 'Argentina'
      },
      {
        country: 'Armênia',
        image: 'https://flagcdn.com/w320/am.png',
        options: ['Armênia', 'Azerbaijão', 'Geórgia'],
        correct: 'Armênia'
      },
      {
        country: 'Aruba',
        image: 'https://flagcdn.com/w320/aw.png',
        options: ['Aruba', 'Curaçao', 'Bonaire'],
        correct: 'Aruba'
      },
      {
        country: 'Austrália',
        image: 'https://flagcdn.com/w320/au.png',
        options: ['Austrália', 'Nova Zelândia', 'Papua Nova Guiné'],
        correct: 'Austrália'
      },
      {
        country: 'Áustria',
        image: 'https://flagcdn.com/w320/at.png',
        options: ['Áustria', 'Alemanha', 'Suíça'],
        correct: 'Áustria'
      },
      {
        country: 'Azerbaijão',
        image: 'https://flagcdn.com/w320/az.png',
        options: ['Azerbaijão', 'Armênia', 'Geórgia'],
        correct: 'Azerbaijão'
      },
      {
        country: 'Bahamas',
        image: 'https://flagcdn.com/w320/bs.png',
        options: ['Bahamas', 'Cuba', 'Ilhas Turcas e Caicos'],
        correct: 'Bahamas'
      },
      {
        country: 'Bahrein',
        image: 'https://flagcdn.com/w320/bh.png',
        options: ['Bahrein', 'Catar', 'Arábia Saudita'],
        correct: 'Bahrein'
      },
      {
        country: 'Bangladesh',
        image: 'https://flagcdn.com/w320/bd.png',
        options: ['Bangladesh', 'Índia', 'Myanmar'],
        correct: 'Bangladesh'
      },
      {
        country: 'Barbados',
        image: 'https://flagcdn.com/w320/bb.png',
        options: ['Barbados', 'Trindade e Tobago', 'São Vicente e Granadinas'],
        correct: 'Barbados'
      },
      {
        country: 'Bielorrússia',
        image: 'https://flagcdn.com/w320/by.png',
        options: ['Bielorrússia', 'Rússia', 'Ucrânia'],
        correct: 'Bielorrússia'
      },
      {
        country: 'Bélgica',
        image: 'https://flagcdn.com/w320/be.png',
        options: ['Bélgica', 'Países Baixos', 'França'],
        correct: 'Bélgica'
      },
      {
        country: 'Belize',
        image: 'https://flagcdn.com/w320/bz.png',
        options: ['Belize', 'Guatemala', 'México'],
        correct: 'Belize'
      },
      {
        country: 'Benim',
        image: 'https://flagcdn.com/w320/bj.png',
        options: ['Benim', 'Togo', 'Nigéria'],
        correct: 'Benim'
      },
      {
        country: 'Bermudas',
        image: 'https://flagcdn.com/w320/bm.png',
        options: ['Bermudas', 'Ilhas Caimão', 'Ilhas Turcas e Caicos'],
        correct: 'Bermudas'
      },
      {
        country: 'Butão',
        image: 'https://flagcdn.com/w320/bt.png',
        options: ['Butão', 'Nepal', 'Índia'],
        correct: 'Butão'
      },
      {
        country: 'Bolívia',
        image: 'https://flagcdn.com/w320/bo.png',
        options: ['Bolívia', 'Peru', 'Argentina'],
        correct: 'Bolívia'
      },
      {
        country: 'Bósnia e Herzegovina',
        image: 'https://flagcdn.com/w320/ba.png',
        options: ['Bósnia e Herzegovina', 'Sérvia', 'Croácia'],
        correct: 'Bósnia e Herzegovina'
      },
      {
        country: 'Botsuana',
        image: 'https://flagcdn.com/w320/bw.png',
        options: ['Botsuana', 'Namíbia', 'África do Sul'],
        correct: 'Botsuana'
      },
      {
        country: 'Ilha Bouvet',
        image: 'https://flagcdn.com/w320/bv.png',
        options: ['Ilha Bouvet', 'Antártida', 'Noruega'],
        correct: 'Ilha Bouvet'
      },
      {
        country: 'Brasil',
        image: 'https://flagcdn.com/w320/br.png',
        options: ['Brasil', 'Argentina', 'Venezuela'],
        correct: 'Brasil'
      },
      {
        country: 'Território Britânico do Oceano Índico',
        image: 'https://flagcdn.com/w320/io.png',
        options: ['Território Britânico do Oceano Índico', 'Seicheles', 'Maurícias'],
        correct: 'Território Britânico do Oceano Índico'
      },
      {
        country: 'Brunei',
        image: 'https://flagcdn.com/w320/bn.png',
        options: ['Brunei', 'Malásia', 'Indonésia'],
        correct: 'Brunei'
      },
      {
        country: 'Bulgária',
        image: 'https://flagcdn.com/w320/bg.png',
        options: ['Bulgária', 'Romênia', 'Turquia'],
        correct: 'Bulgária'
      },
      {
        country: 'Burkina Faso',
        image: 'https://flagcdn.com/w320/bf.png',
        options: ['Burkina Faso', 'Mali', 'Costa do Marfim'],
        correct: 'Burkina Faso'
      },
      {
        country: 'Burundi',
        image: 'https://flagcdn.com/w320/bi.png',
        options: ['Burundi', 'Ruanda', 'Tanzânia'],
        correct: 'Burundi'
      },
      {
        country: 'Camboja',
        image: 'https://flagcdn.com/w320/kh.png',
        options: ['Camboja', 'Tailândia', 'Vietname'],
        correct: 'Camboja'
      },
      {
        country: 'Camarões',
        image: 'https://flagcdn.com/w320/cm.png',
        options: ['Camarões', 'Nigéria', 'República Centro-Africana'],
        correct: 'Camarões'
      },
      {
        country: 'Canadá',
        image: 'https://flagcdn.com/w320/ca.png',
        options: ['Canadá', 'Estados Unidos', 'México'],
        correct: 'Canadá'
      },
      {
        country: 'Cabo Verde',
        image: 'https://flagcdn.com/w320/cv.png',
        options: ['Cabo Verde', 'Senegal', 'Guiné-Bissau'],
        correct: 'Cabo Verde'
      },
      {
        country: 'Países Baixos Caribenhos',
        image: 'https://flagcdn.com/w320/bq.png',
        options: ['Países Baixos Caribenhos', 'Aruba', 'Curaçao'],
        correct: 'Países Baixos Caribenhos'
      },
      {
        country: 'Ilhas Caimã',
        image: 'https://flagcdn.com/w320/ky.png',
        options: ['Ilhas Caimã', 'Jamaica', 'Cuba'],
        correct: 'Ilhas Caimã'
      },
      {
        country: 'República Centro-Africana',
        image: 'https://flagcdn.com/w320/cf.png',
        options: ['República Centro-Africana', 'Camarões', 'Chade'],
        correct: 'República Centro-Africana'
      },
      {
        country: 'Chade',
        image: 'https://flagcdn.com/w320/td.png',
        options: ['Chade', 'Sudão', 'República Centro-Africana'],
        correct: 'Chade'
      },
      {
        country: 'Chile',
        image: 'https://flagcdn.com/w320/cl.png',
        options: ['Chile', 'Argentina', 'Peru'],
        correct: 'Chile'
      },
      {
        country: 'China',
        image: 'https://flagcdn.com/w320/cn.png',
        options: ['China', 'Rússia', 'Mongólia'],
        correct: 'China'
      },
      {
        country: 'Ilha Christmas',
        image: 'https://flagcdn.com/w320/cx.png',
        options: ['Ilha Christmas', 'Austrália', 'Indonésia'],
        correct: 'Ilha Christmas'
      },
      {
        country: 'Ilhas Cocos',
        image: 'https://flagcdn.com/w320/cc.png',
        options: ['Ilhas Cocos', 'Austrália', 'Indonésia'],
        correct: 'Ilhas Cocos'
      },
      {
        country: 'Colômbia',
        image: 'https://flagcdn.com/w320/co.png',
        options: ['Colômbia', 'Venezuela', 'Equador'],
        correct: 'Colômbia'
      },
      {
        country: 'Comores',
        image: 'https://flagcdn.com/w320/km.png',
        options: ['Comores', 'Madagáscar', 'Moçambique'],
        correct: 'Comores'
      },
      {
        country: 'República do Congo',
        image: 'https://flagcdn.com/w320/cg.png',
        options: ['República do Congo', 'República Democrática do Congo', 'Camarões'],
        correct: 'República do Congo'
      },
      {
        country: 'República Democrática do Congo',
        image: 'https://flagcdn.com/w320/cd.png',
        options: ['República Democrática do Congo', 'República do Congo', 'Angola'],
        correct: 'República Democrática do Congo'
      },
      {
        country: 'Ilhas Cook',
        image: 'https://flagcdn.com/w320/ck.png',
        options: ['Ilhas Cook', 'Nova Zelândia', 'Tonga'],
        correct: 'Ilhas Cook'
      },
      {
        country: 'Costa Rica',
        image: 'https://flagcdn.com/w320/cr.png',
        options: ['Costa Rica', 'Panamá', 'Nicarágua'],
        correct: 'Costa Rica'
      },
      {
        country: 'Costa do Marfim',
        image: 'https://flagcdn.com/w320/ci.png',
        options: ['Costa do Marfim', 'Gana', 'Libéria'],
        correct: 'Costa do Marfim'
      },
      {
        country: 'Croácia',
        image: 'https://flagcdn.com/w320/hr.png',
        options: ['Croácia', 'Sérvia', 'Eslovênia'],
        correct: 'Croácia'
      },
      {
        country: 'Cuba',
        image: 'https://flagcdn.com/w320/cu.png',
        options: ['Cuba', 'República Dominicana', 'Haiti'],
        correct: 'Cuba'
      },
      {
        country: 'Curaçao',
        image: 'https://flagcdn.com/w320/cw.png',
        options: ['Curaçao', 'Aruba', 'Bonaire'],
        correct: 'Curaçao'
      },
      {
        country: 'Chipre',
        image: 'https://flagcdn.com/w320/cy.png',
        options: ['Chipre', 'Grécia', 'Turquia'],
        correct: 'Chipre'
      },
      {
        country: 'República Checa',
        image: 'https://flagcdn.com/w320/cz.png',
        options: ['República Checa', 'Eslováquia', 'Alemanha'],
        correct: 'República Checa'
      },
      {
        country: 'Dinamarca',
        image: 'https://flagcdn.com/w320/dk.png',
        options: ['Dinamarca', 'Suécia', 'Noruega'],
        correct: 'Dinamarca'
      },
      {
        country: 'Djibuti',
        image: 'https://flagcdn.com/w320/dj.png',
        options: ['Djibuti', 'Etiópia', 'Somália'],
        correct: 'Djibuti'
      },
      {
        country: 'Dominica',
        image: 'https://flagcdn.com/w320/dm.png',
        options: ['Dominica', 'Santa Lúcia', 'Martinica'],
        correct: 'Dominica'
      },
      {
        country: 'República Dominicana',
        image: 'https://flagcdn.com/w320/do.png',
        options: ['República Dominicana', 'Cuba', 'Haiti'],
        correct: 'República Dominicana'
      },
      {
        country: 'Equador',
        image: 'https://flagcdn.com/w320/ec.png',
        options: ['Equador', 'Colômbia', 'Peru'],
        correct: 'Equador'
      },
      {
        country: 'Egito',
        image: 'https://flagcdn.com/w320/eg.png',
        options: ['Egito', 'Sudão', 'Líbia'],
        correct: 'Egito'
      },
      {
        country: 'El Salvador',
        image: 'https://flagcdn.com/w320/sv.png',
        options: ['El Salvador', 'Guatemala', 'Honduras'],
        correct: 'El Salvador'
      },
      {
        country: 'Inglaterra',
        image: 'https://flagcdn.com/w320/gb-eng.png',
        options: ['Inglaterra', 'Escócia', 'País de Gales'],
        correct: 'Inglaterra'
      },
      {
        country: 'Guiné Equatorial',
        image: 'https://flagcdn.com/w320/gq.png',
        options: ['Guiné Equatorial', 'Gabão', 'Camarões'],
        correct: 'Guiné Equatorial'
      },
      {
        country: 'Eritreia',
        image: 'https://flagcdn.com/w320/er.png',
        options: ['Eritreia', 'Etiópia', 'Sudão'],
        correct: 'Eritreia'
      },
      {
        country: 'Estônia',
        image: 'https://flagcdn.com/w320/ee.png',
        options: ['Estônia', 'Letônia', 'Finlândia'],
        correct: 'Estônia'
      },
      {
        country: 'Essuatíni',
        image: 'https://flagcdn.com/w320/sz.png',
        options: ['Essuatíni', 'África do Sul', 'Moçambique'],
        correct: 'Essuatíni'
      },
      {
        country: 'Etiópia',
        image: 'https://flagcdn.com/w320/et.png',
        options: ['Etiópia', 'Eritreia', 'Somália'],
        correct: 'Etiópia'
      },
      {
        country: 'Ilhas Falkland',
        image: 'https://flagcdn.com/w320/fk.png',
        options: ['Ilhas Falkland', 'Argentina', 'Chile'],
        correct: 'Ilhas Falkland'
      },
      {
        country: 'Ilhas Faroe',
        image: 'https://flagcdn.com/w320/fo.png',
        options: ['Ilhas Faroe', 'Dinamarca', 'Islândia'],
        correct: 'Ilhas Faroe'
      },
      {
        country: 'Fiji',
        image: 'https://flagcdn.com/w320/fj.png',
        options: ['Fiji', 'Tonga', 'Vanuatu'],
        correct: 'Fiji'
      },
      {
        country: 'Finlândia',
        image: 'https://flagcdn.com/w320/fi.png',
        options: ['Finlândia', 'Suécia', 'Rússia'],
        correct: 'Finlândia'
      },
      {
        country: 'França',
        image: 'https://flagcdn.com/w320/fr.png',
        options: ['França', 'Alemanha', 'Espanha'],
        correct: 'França'
      },
      {
        country: 'Guiana Francesa',
        image: 'https://flagcdn.com/w320/gf.png',
        options: ['Guiana Francesa', 'Brasil', 'Suriname'],
        correct: 'Guiana Francesa'
      },
      {
        country: 'Polinésia Francesa',
        image: 'https://flagcdn.com/w320/pf.png',
        options: ['Polinésia Francesa', 'Ilhas Cook', 'Samoa'],
        correct: 'Polinésia Francesa'
      },
      {
        country: 'Terras Austrais e Antárticas Francesas',
        image: 'https://flagcdn.com/w320/tf.png',
        options: ['Terras Austrais e Antárticas Francesas', 'Antártida', 'Austrália'],
        correct: 'Terras Austrais e Antárticas Francesas'
      },
      {
        country: 'Gabão',
        image: 'https://flagcdn.com/w320/ga.png',
        options: ['Gabão', 'Guiné Equatorial', 'Camarões'],
        correct: 'Gabão'
      },
      {
        country: 'Gâmbia',
        image: 'https://flagcdn.com/w320/gm.png',
        options: ['Gâmbia', 'Senegal', 'Guiné-Bissau'],
        correct: 'Gâmbia'
      },
      {
        country: 'Geórgia',
        image: 'https://flagcdn.com/w320/ge.png',
        options: ['Geórgia', 'Rússia', 'Turquia'],
        correct: 'Geórgia'
      },
      {
        country: 'Alemanha',
        image: 'https://flagcdn.com/w320/de.png',
        options: ['Alemanha', 'França', 'Polónia'],
        correct: 'Alemanha'
      },
      {
        country: 'Gana',
        image: 'https://flagcdn.com/w320/gh.png',
        options: ['Gana', 'Costa do Marfim', 'Togo'],
        correct: 'Gana'
      },
      {
        country: 'Gibraltar',
        image: 'https://flagcdn.com/w320/gi.png',
        options: ['Gibraltar', 'Espanha', 'Marrocos'],
        correct: 'Gibraltar'
      },
      {
        country: 'Grécia',
        image: 'https://flagcdn.com/w320/gr.png',
        options: ['Grécia', 'Turquia', 'Itália'],
        correct: 'Grécia'
      },
      {
        country: 'Gronelândia',
        image: 'https://flagcdn.com/w320/gl.png',
        options: ['Gronelândia', 'Canadá', 'Dinamarca'],
        correct: 'Gronelândia'
      },
      {
        country: 'Granada',
        image: 'https://flagcdn.com/w320/gd.png',
        options: ['Granada', 'São Vicente e Granadinas', 'Trindade e Tobago'],
        correct: 'Granada'
      },
      {
        country: 'Guadalupe',
        image: 'https://flagcdn.com/w320/gp.png',
        options: ['Guadalupe', 'Martinica', 'Dominica'],
        correct: 'Guadalupe'
      },
      {
        country: 'Guam',
        image: 'https://flagcdn.com/w320/gu.png',
        options: ['Guam', 'Estados Unidos', 'Filipinas'],
        correct: 'Guam'
      },
      {
        country: 'Guatemala',
        image: 'https://flagcdn.com/w320/gt.png',
        options: ['Guatemala', 'México', 'Belize'],
        correct: 'Guatemala'
      },
      {
        country: 'Guernsey',
        image: 'https://flagcdn.com/w320/gg.png',
        options: ['Guernsey', 'Jersey', 'Ilha de Man'],
        correct: 'Guernsey'
      },
      {
        country: 'Guiné',
        image: 'https://flagcdn.com/w320/gn.png',
        options: ['Guiné', 'Senegal', 'Serra Leoa'],
        correct: 'Guiné'
      },
      {
        country: 'Guiné-Bissau',
        image: 'https://flagcdn.com/w320/gw.png',
        options: ['Guiné-Bissau', 'Senegal', 'Guiné'],
        correct: 'Guiné-Bissau'
      },
      {
        country: 'Guiana',
        image: 'https://flagcdn.com/w320/gy.png',
        options: ['Guiana', 'Venezuela', 'Suriname'],
        correct: 'Guiana'
      },
      {
        country: 'Haiti',
        image: 'https://flagcdn.com/w320/ht.png',
        options: ['Haiti', 'República Dominicana', 'Cuba'],
        correct: 'Haiti'
      },
      {
        country: 'Ilha Heard e Ilhas McDonald',
        image: 'https://flagcdn.com/w320/hm.png',
        options: ['Ilha Heard e Ilhas McDonald', 'Antártida', 'Austrália'],
        correct: 'Ilha Heard e Ilhas McDonald'
      },
      {
        country: 'Honduras',
        image: 'https://flagcdn.com/w320/hn.png',
        options: ['Honduras', 'Guatemala', 'El Salvador'],
        correct: 'Honduras'
      },
      {
        country: 'Hong Kong',
        image: 'https://flagcdn.com/w320/hk.png',
        options: ['Hong Kong', 'China', 'Macau'],
        correct: 'Hong Kong'
      },
      {
        country: 'Hungria',
        image: 'https://flagcdn.com/w320/hu.png',
        options: ['Hungria', 'Áustria', 'Eslováquia'],
        correct: 'Hungria'
      },
      {
        country: 'Islândia',
        image: 'https://flagcdn.com/w320/is.png',
        options: ['Islândia', 'Gronelândia', 'Noruega'],
        correct: 'Islândia'
      },
      {
        country: 'Índia',
        image: 'https://flagcdn.com/w320/in.png',
        options: ['Índia', 'Paquistão', 'China'],
        correct: 'Índia'
      },
      {
        country: 'Indonésia',
        image: 'https://flagcdn.com/w320/id.png',
        options: ['Indonésia', 'Malásia', 'Papua Nova Guiné'],
        correct: 'Indonésia'
      },
      {
        country: 'Irã',
        image: 'https://flagcdn.com/w320/ir.png',
        options: ['Irã', 'Iraque', 'Paquistão'],
        correct: 'Irã'
      },
      {
        country: 'Iraque',
        image: 'https://flagcdn.com/w320/iq.png',
        options: ['Iraque', 'Irã', 'Arábia Saudita'],
        correct: 'Iraque'
      },
      {
        country: 'Irlanda',
        image: 'https://flagcdn.com/w320/ie.png',
        options: ['Irlanda', 'Reino Unido', 'França'],
        correct: 'Irlanda'
      },
      {
        country: 'Ilha de Man',
        image: 'https://flagcdn.com/w320/im.png',
        options: ['Ilha de Man', 'Irlanda', 'Reino Unido'],
        correct: 'Ilha de Man'
      },
      {
        country: 'Israel',
        image: 'https://flagcdn.com/w320/il.png',
        options: ['Israel', 'Líbano', 'Jordânia'],
        correct: 'Israel'
      },
      {
        country: 'Itália',
        image: 'https://flagcdn.com/w320/it.png',
        options: ['Itália', 'França', 'Suíça'],
        correct: 'Itália'
      },
      {
        country: 'Jamaica',
        image: 'https://flagcdn.com/w320/jm.png',
        options: ['Jamaica', 'Cuba', 'Haiti'],
        correct: 'Jamaica'
      },
      {
        country: 'Japão',
        image: 'https://flagcdn.com/w320/jp.png',
        options: ['Japão', 'Coreia do Sul', 'China'],
        correct: 'Japão'
      },
      {
        country: 'Jersey',
        image: 'https://flagcdn.com/w320/je.png',
        options: ['Jersey', 'Guernsey', 'Ilha de Man'],
        correct: 'Jersey'
      },
      {
        country: 'Jordânia',
        image: 'https://flagcdn.com/w320/jo.png',
        options: ['Jordânia', 'Síria', 'Arábia Saudita'],
        correct: 'Jordânia'
      },
      {
        country: 'Cazaquistão',
        image: 'https://flagcdn.com/w320/kz.png',
        options: ['Cazaquistão', 'Rússia', 'Uzbequistão'],
        correct: 'Cazaquistão'
      },
      {
        country: 'Quênia',
        image: 'https://flagcdn.com/w320/ke.png',
        options: ['Quênia', 'Tanzânia', 'Uganda'],
        correct: 'Quênia'
      },
      {
        country: 'Kiribati',
        image: 'https://flagcdn.com/w320/ki.png',
        options: ['Kiribati', 'Tuvalu', 'Nauru'],
        correct: 'Kiribati'
      },
      {
        country: 'Coreia do Norte',
        image: 'https://flagcdn.com/w320/kp.png',
        options: ['Coreia do Norte', 'Coreia do Sul', 'China'],
        correct: 'Coreia do Norte'
      },
      {
        country: 'Coreia do Sul',
        image: 'https://flagcdn.com/w320/kr.png',
        options: ['Coreia do Sul', 'Coreia do Norte', 'Japão'],
        correct: 'Coreia do Sul'
      },
      {
        country: 'Kosovo',
        image: 'https://flagcdn.com/w320/xk.png',
        options: ['Kosovo', 'Sérvia', 'Albânia'],
        correct: 'Kosovo'
      },
      {
        country: 'Kuwait',
        image: 'https://flagcdn.com/w320/kw.png',
        options: ['Kuwait', 'Arábia Saudita', 'Iraque'],
        correct: 'Kuwait'
      },
      {
        country: 'Quirguistão',
        image: 'https://flagcdn.com/w320/kg.png',
        options: ['Quirguistão', 'Uzbequistão', 'Tajiquistão'],
        correct: 'Quirguistão'
      },
      {
        country: 'Laos',
        image: 'https://flagcdn.com/w320/la.png',
        options: ['Laos', 'Tailândia', 'Vietname'],
        correct: 'Laos'
      },
      {
        country: 'Letônia',
        image: 'https://flagcdn.com/w320/lv.png',
        options: ['Letônia', 'Lituânia', 'Estônia'],
        correct: 'Letônia'
      },
      {
        country: 'Líbano',
        image: 'https://flagcdn.com/w320/lb.png',
        options: ['Líbano', 'Síria', 'Israel'],
        correct: 'Líbano'
      },
      {
        country: 'Lesoto',
        image: 'https://flagcdn.com/w320/ls.png',
        options: ['Lesoto', 'África do Sul', 'Botsuana'],
        correct: 'Lesoto'
      },
      {
        country: 'Libéria',
        image: 'https://flagcdn.com/w320/lr.png',
        options: ['Libéria', 'Serra Leoa', 'Costa do Marfim'],
        correct: 'Libéria'
      },
      {
        country: 'Líbia',
        image: 'https://flagcdn.com/w320/ly.png',
        options: ['Líbia', 'Egito', 'Argélia'],
        correct: 'Líbia'
      },
      {
        country: 'Liechtenstein',
        image: 'https://flagcdn.com/w320/li.png',
        options: ['Liechtenstein', 'Suíça', 'Áustria'],
        correct: 'Liechtenstein'
      },
      {
        country: 'Lituânia',
        image: 'https://flagcdn.com/w320/lt.png',
        options: ['Lituânia', 'Letônia', 'Polónia'],
        correct: 'Lituânia'
      },
      {
        country: 'Luxemburgo',
        image: 'https://flagcdn.com/w320/lu.png',
        options: ['Luxemburgo', 'Bélgica', 'Alemanha'],
        correct: 'Luxemburgo'
      },
      {
        country: 'Macau',
        image: 'https://flagcdn.com/w320/mo.png',
        options: ['Macau', 'China', 'Hong Kong'],
        correct: 'Macau'
      },
      {
        country: 'Madagáscar',
        image: 'https://flagcdn.com/w320/mg.png',
        options: ['Madagáscar', 'Moçambique', 'Maurícias'],
        correct: 'Madagáscar'
      },
      {
        country: 'Maláui',
        image: 'https://flagcdn.com/w320/mw.png',
        options: ['Maláui', 'Zâmbia', 'Moçambique'],
        correct: 'Maláui'
      },
      {
        country: 'Malásia',
        image: 'https://flagcdn.com/w320/my.png',
        options: ['Malásia', 'Indonésia', 'Tailândia'],
        correct: 'Malásia'
      },
      {
        country: 'Maldivas',
        image: 'https://flagcdn.com/w320/mv.png',
        options: ['Maldivas', 'Índia', 'Sri Lanka'],
        correct: 'Maldivas'
      },
      {
        country: 'Mali',
        image: 'https://flagcdn.com/w320/ml.png',
        options: ['Mali', 'Senegal', 'Burquina Faso'],
        correct: 'Mali'
      },
      {
        country: 'Malta',
        image: 'https://flagcdn.com/w320/mt.png',
        options: ['Malta', 'Itália', 'Grécia'],
        correct: 'Malta'
      },
      {
        country: 'Ilhas Marshall',
        image: 'https://flagcdn.com/w320/mh.png',
        options: ['Ilhas Marshall', 'Kiribati', 'Palau'],
        correct: 'Ilhas Marshall'
      },
      {
        country: 'Martinica',
        image: 'https://flagcdn.com/w320/mq.png',
        options: ['Martinica', 'Guadalupe', 'Dominica'],
        correct: 'Martinica'
      },
      {
        country: 'Mauritânia',
        image: 'https://flagcdn.com/w320/mr.png',
        options: ['Mauritânia', 'Senegal', 'Mali'],
        correct: 'Mauritânia'
      },
      {
        country: 'Maurícias',
        image: 'https://flagcdn.com/w320/mu.png',
        options: ['Maurícias', 'Seicheles', 'Madagáscar'],
        correct: 'Maurícias'
      },
      {
        country: 'Maomé',
        image: 'https://flagcdn.com/w320/yt.png',
        options: ['Maomé', 'Comores', 'Madagáscar'],
        correct: 'Maomé'
      },
      {
        country: 'México',
        image: 'https://flagcdn.com/w320/mx.png',
        options: ['México', 'Estados Unidos', 'Guatemala'],
        correct: 'México'
      },
      {
        country: 'Micronésia',
        image: 'https://flagcdn.com/w320/fm.png',
        options: ['Micronésia', 'Palau', 'Ilhas Marshall'],
        correct: 'Micronésia'
      },
      {
        country: 'Moldávia',
        image: 'https://flagcdn.com/w320/md.png',
        options: ['Moldávia', 'Ucrânia', 'Romênia'],
        correct: 'Moldávia'
      },
      {
        country: 'Mônaco',
        image: 'https://flagcdn.com/w320/mc.png',
        options: ['Mônaco', 'França', 'Itália'],
        correct: 'Mônaco'
      },
      {
        country: 'Mongólia',
        image: 'https://flagcdn.com/w320/mn.png',
        options: ['Mongólia', 'China', 'Rússia'],
        correct: 'Mongólia'
      },
      {
        country: 'Montenegro',
        image: 'https://flagcdn.com/w320/me.png',
        options: ['Montenegro', 'Sérvia', 'Albânia'],
        correct: 'Montenegro'
      },
      {
        country: 'Montserrat',
        image: 'https://flagcdn.com/w320/ms.png',
        options: ['Montserrat', 'Ilhas Virgens Britânicas', 'Porto Rico'],
        correct: 'Montserrat'
      },
      {
        country: 'Marrocos',
        image: 'https://flagcdn.com/w320/ma.png',
        options: ['Marrocos', 'Argélia', 'Espanha'],
        correct: 'Marrocos'
      },
      {
        country: 'Moçambique',
        image: 'https://flagcdn.com/w320/mz.png',
        options: ['Moçambique', 'África do Sul', 'Tanzânia'],
        correct: 'Moçambique'
      },
      {
        country: 'Mianmar',
        image: 'https://flagcdn.com/w320/mm.png',
        options: ['Mianmar', 'Tailândia', 'China'],
        correct: 'Mianmar'
      },
      {
        country: 'Namíbia',
        image: 'https://flagcdn.com/w320/na.png',
        options: ['Namíbia', 'Angola', 'África do Sul'],
        correct: 'Namíbia'
      },
      {
        country: 'Nauru',
        image: 'https://flagcdn.com/w320/nr.png',
        options: ['Nauru', 'Kiribati', 'Tuvalu'],
        correct: 'Nauru'
      },
      {
        country: 'Nepal',
        image: 'https://flagcdn.com/w320/np.png',
        options: ['Nepal', 'Índia', 'China'],
        correct: 'Nepal'
      },
      {
        country: 'Países Baixos',
        image: 'https://flagcdn.com/w320/nl.png',
        options: ['Países Baixos', 'Bélgica', 'Alemanha'],
        correct: 'Países Baixos'
      },
      {
        country: 'Nova Caledônia',
        image: 'https://flagcdn.com/w320/nc.png',
        options: ['Nova Caledônia', 'Austrália', 'Fiji'],
        correct: 'Nova Caledônia'
      },
      {
        country: 'Nova Zelândia',
        image: 'https://flagcdn.com/w320/nz.png',
        options: ['Nova Zelândia', 'Austrália', 'Fiji'],
        correct: 'Nova Zelândia'
      },
      {
        country: 'Nicarágua',
        image: 'https://flagcdn.com/w320/ni.png',
        options: ['Nicarágua', 'Honduras', 'Costa Rica'],
        correct: 'Nicarágua'
      },
      {
        country: 'Níger',
        image: 'https://flagcdn.com/w320/ne.png',
        options: ['Níger', 'Nigéria', 'Chade'],
        correct: 'Níger'
      },
      {
        country: 'Nigéria',
        image: 'https://flagcdn.com/w320/ng.png',
        options: ['Nigéria', 'Camarões', 'Chade'],
        correct: 'Nigéria'
      },
      {
        country: 'Niue',
        image: 'https://flagcdn.com/w320/nu.png',
        options: ['Niue', 'Nova Zelândia', 'Tonga'],
        correct: 'Niue'
      },
      {
        country: 'Ilha Norfolk',
        image: 'https://flagcdn.com/w320/nf.png',
        options: ['Ilha Norfolk', 'Nova Zelândia', 'Austrália'],
        correct: 'Ilha Norfolk'
      },
      {
        country: 'Macedônia do Norte',
        image: 'https://flagcdn.com/w320/mk.png',
        options: ['Macedônia do Norte', 'Sérvia', 'Grécia'],
        correct: 'Macedônia do Norte'
      },
      {
        country: 'Irlanda do Norte',
        image: 'https://flagcdn.com/w320/gb-nir.png',
        options: ['Irlanda do Norte', 'Escócia', 'Inglaterra'],
        correct: 'Irlanda do Norte'
      },
      {
        country: 'Ilhas Marianas do Norte',
        image: 'https://flagcdn.com/w320/mp.png',
        options: ['Ilhas Marianas do Norte', 'Guam', 'Filipinas'],
        correct: 'Ilhas Marianas do Norte'
      },
      {
        country: 'Noruega',
        image: 'https://flagcdn.com/w320/no.png',
        options: ['Noruega', 'Suécia', 'Rússia'],
        correct: 'Noruega'
      },
      {
        country: 'Omã',
        image: 'https://flagcdn.com/w320/om.png',
        options: ['Omã', 'Iémen', 'Arábia Saudita'],
        correct: 'Omã'
      },
      {
        country: 'Paquistão',
        image: 'https://flagcdn.com/w320/pk.png',
        options: ['Paquistão', 'Índia', 'Afeganistão'],
        correct: 'Paquistão'
      },
      {
        country: 'Palau',
        image: 'https://flagcdn.com/w320/pw.png',
        options: ['Palau', 'Micronésia', 'Ilhas Marshall'],
        correct: 'Palau'
      },
      {
        country: 'Palestina',
        image: 'https://flagcdn.com/w320/ps.png',
        options: ['Palestina', 'Israel', 'Jordânia'],
        correct: 'Palestina'
      },
      {
        country: 'Panamá',
        image: 'https://flagcdn.com/w320/pa.png',
        options: ['Panamá', 'Costa Rica', 'Colômbia'],
        correct: 'Panamá'
      },
      {
        country: 'Papua Nova Guiné',
        image: 'https://flagcdn.com/w320/pg.png',
        options: ['Papua Nova Guiné', 'Indonésia', 'Austrália'],
        correct: 'Papua Nova Guiné'
      },
      {
        country: 'Paraguai',
        image: 'https://flagcdn.com/w320/py.png',
        options: ['Paraguai', 'Argentina', 'Brasil'],
        correct: 'Paraguai'
      },
      {
        country: 'Peru',
        image: 'https://flagcdn.com/w320/pe.png',
        options: ['Peru', 'Chile', 'Bolívia'],
        correct: 'Peru'
      },
      {
        country: 'Filipinas',
        image: 'https://flagcdn.com/w320/ph.png',
        options: ['Filipinas', 'Indonésia', 'Malásia'],
        correct: 'Filipinas'
      },
      {
        country: 'Ilhas Pitcairn',
        image: 'https://flagcdn.com/w320/pn.png',
        options: ['Ilhas Pitcairn', 'Nova Zelândia', 'Austrália'],
        correct: 'Ilhas Pitcairn'
      },
      {
        country: 'Polônia',
        image: 'https://flagcdn.com/w320/pl.png',
        options: ['Polônia', 'Alemanha', 'República Checa'],
        correct: 'Polônia'
      },
      {
        country: 'Portugal',
        image: 'https://flagcdn.com/w320/pt.png',
        options: ['Portugal', 'Espanha', 'França'],
        correct: 'Portugal'
      },
      {
        country: 'Porto Rico',
        image: 'https://flagcdn.com/w320/pr.png',
        options: ['Porto Rico', 'República Dominicana', 'Estados Unidos'],
        correct: 'Porto Rico'
      },
      {
        country: 'Catar',
        image: 'https://flagcdn.com/w320/qa.png',
        options: ['Catar', 'Arábia Saudita', 'Emirados Árabes Unidos'],
        correct: 'Catar'
      },
      {
        country: 'Reunião',
        image: 'https://flagcdn.com/w320/re.png',
        options: ['Reunião', 'Madagáscar', 'Maurícias'],
        correct: 'Reunião'
      },
      {
        country: 'Romênia',
        image: 'https://flagcdn.com/w320/ro.png',
        options: ['Romênia', 'Bulgária', 'Hungria'],
        correct: 'Romênia'
      },
      {
        country: 'Rússia',
        image: 'https://flagcdn.com/w320/ru.png',
        options: ['Rússia', 'Ucrânia', 'China'],
        correct: 'Rússia'
      },
      {
        country: 'Ruanda',
        image: 'https://flagcdn.com/w320/rw.png',
        options: ['Ruanda', 'Burundi', 'Tanzânia'],
        correct: 'Ruanda'
      },
      {
        country: 'São Bartolomeu',
        image: 'https://flagcdn.com/w320/bl.png',
        options: ['São Bartolomeu', 'São Martinho', 'Guadalupe'],
        correct: 'São Bartolomeu'
      },
      {
        country: 'Santa Helena, Ascensão e Tristão da Cunha',
        image: 'https://flagcdn.com/w320/sh.png',
        options: ['Santa Helena, Ascensão e Tristão da Cunha', 'África do Sul', 'Brasil'],
        correct: 'Santa Helena, Ascensão e Tristão da Cunha'
      },
      {
        country: 'São Cristóvão e Nevis',
        image: 'https://flagcdn.com/w320/kn.png',
        options: ['São Cristóvão e Nevis', 'Antígua e Barbuda', 'Dominica'],
        correct: 'São Cristóvão e Nevis'
      },
      {
        country: 'Santa Lúcia',
        image: 'https://flagcdn.com/w320/lc.png',
        options: ['Santa Lúcia', 'São Vicente e Granadinas', 'Barbados'],
        correct: 'Santa Lúcia'
      },
      {
        country: 'São Martinho',
        image: 'https://flagcdn.com/w320/mf.png',
        options: ['São Martinho', 'São Bartolomeu', 'Sint Maarten'],
        correct: 'São Martinho'
      },
      {
        country: 'São Pedro e Miquelon',
        image: 'https://flagcdn.com/w320/pm.png',
        options: ['São Pedro e Miquelon', 'Canadá', 'França'],
        correct: 'São Pedro e Miquelon'
      },
      {
        country: 'São Vicente e Granadinas',
        image: 'https://flagcdn.com/w320/vc.png',
        options: ['São Vicente e Granadinas', 'Santa Lúcia', 'Granada'],
        correct: 'São Vicente e Granadinas'
      },
      {
        country: 'Samoa',
        image: 'https://flagcdn.com/w320/ws.png',
        options: ['Samoa', 'Tonga', 'Fiji'],
        correct: 'Samoa'
      },
      {
        country: 'San Marino',
        image: 'https://flagcdn.com/w320/sm.png',
        options: ['San Marino', 'Itália', 'Cidade do Vaticano'],
        correct: 'San Marino'
      },
      {
        country: 'São Tomé e Príncipe',
        image: 'https://flagcdn.com/w320/st.png',
        options: ['São Tomé e Príncipe', 'Gabão', 'Guiné Equatorial'],
        correct: 'São Tomé e Príncipe'
      },
      {
        country: 'Arábia Saudita',
        image: 'https://flagcdn.com/w320/sa.png',
        options: ['Arábia Saudita', 'Iémen', 'Omã'],
        correct: 'Arábia Saudita'
      },
      {
        country: 'Escócia',
        image: 'https://flagcdn.com/w320/gb-sct.png',
        options: ['Escócia', 'Inglaterra', 'País de Gales'],
        correct: 'Escócia'
      },
      {
        country: 'Senegal',
        image: 'https://flagcdn.com/w320/sn.png',
        options: ['Senegal', 'Mauritânia', 'Guiné'],
        correct: 'Senegal'
      },
      {
        country: 'Sérvia',
        image: 'https://flagcdn.com/w320/rs.png',
        options: ['Sérvia', 'Montenegro', 'Croácia'],
        correct: 'Sérvia'
      },
      {
        country: 'Seicheles',
        image: 'https://flagcdn.com/w320/sc.png',
        options: ['Seicheles', 'Maurícias', 'Madagáscar'],
        correct: 'Seicheles'
      },
      {
        country: 'Serra Leoa',
        image: 'https://flagcdn.com/w320/sl.png',
        options: ['Serra Leoa', 'Libéria', 'Guiné'],
        correct: 'Serra Leoa'
      },
      {
        country: 'Singapura',
        image: 'https://flagcdn.com/w320/sg.png',
        options: ['Singapura', 'Malásia', 'Indonésia'],
        correct: 'Singapura'
      },
      {
        country: 'Sint Maarten',
        image: 'https://flagcdn.com/w320/sx.png',
        options: ['Sint Maarten', 'São Martinho', 'Curaçao'],
        correct: 'Sint Maarten'
      },
      {
        country: 'Eslováquia',
        image: 'https://flagcdn.com/w320/sk.png',
        options: ['Eslováquia', 'República Checa', 'Hungria'],
        correct: 'Eslováquia'
      },
      {
        country: 'Eslovênia',
        image: 'https://flagcdn.com/w320/si.png',
        options: ['Eslovênia', 'Croácia', 'Itália'],
        correct: 'Eslovênia'
      },
      {
        country: 'Ilhas Salomão',
        image: 'https://flagcdn.com/w320/sb.png',
        options: ['Ilhas Salomão', 'Papua Nova Guiné', 'Vanuatu'],
        correct: 'Ilhas Salomão'
      },
      {
        country: 'Somália',
        image: 'https://flagcdn.com/w320/so.png',
        options: ['Somália', 'Etiópia', 'Quênia'],
        correct: 'Somália'
      },
      {
        country: 'África do Sul',
        image: 'https://flagcdn.com/w320/za.png',
        options: ['África do Sul', 'Namíbia', 'Botsuana'],
        correct: 'África do Sul'
      },
      {
        country: 'Geórgia do Sul',
        image: 'https://flagcdn.com/w320/gs.png',
        options: ['Geórgia do Sul', 'Antártida', 'Argentina'],
        correct: 'Geórgia do Sul'
      },
      {
        country: 'Sudão do Sul',
        image: 'https://flagcdn.com/w320/ss.png',
        options: ['Sudão do Sul', 'Sudão', 'Etiópia'],
        correct: 'Sudão do Sul'
      },
      {
        country: 'Espanha',
        image: 'https://flagcdn.com/w320/es.png',
        options: ['Espanha', 'França', 'Portugal'],
        correct: 'Espanha'
      },
      {
        country: 'Sri Lanka',
        image: 'https://flagcdn.com/w320/lk.png',
        options: ['Sri Lanka', 'Índia', 'Maldivas'],
        correct: 'Sri Lanka'
      },
      {
        country: 'Sudão',
        image: 'https://flagcdn.com/w320/sd.png',
        options: ['Sudão', 'Sudão do Sul', 'Egito'],
        correct: 'Sudão'
      },
      {
        country: 'Suriname',
        image: 'https://flagcdn.com/w320/sr.png',
        options: ['Suriname', 'Guiana', 'Brasil'],
        correct: 'Suriname'
      },
      {
        country: 'Svalbard e Jan Mayen',
        image: 'https://flagcdn.com/w320/sj.png',
        options: ['Svalbard e Jan Mayen', 'Noruega', 'Rússia'],
        correct: 'Svalbard e Jan Mayen'
      },
      {
        country: 'Suécia',
        image: 'https://flagcdn.com/w320/se.png',
        options: ['Suécia', 'Finlândia', 'Noruega'],
        correct: 'Suécia'
      },
      {
        country: 'Suíça',
        image: 'https://flagcdn.com/w320/ch.png',
        options: ['Suíça', 'França', 'Alemanha'],
        correct: 'Suíça'
      },
      {
        country: 'Síria',
        image: 'https://flagcdn.com/w320/sy.png',
        options: ['Síria', 'Líbano', 'Turquia'],
        correct: 'Síria'
      },
      {
        country: 'Taiwan',
        image: 'https://flagcdn.com/w320/tw.png',
        options: ['Taiwan', 'China', 'Japão'],
        correct: 'Taiwan'
      },
      {
        country: 'Tadjiquistão',
        image: 'https://flagcdn.com/w320/tj.png',
        options: ['Tadjiquistão', 'Uzbequistão', 'Afeganistão'],
        correct: 'Tadjiquistão'
      },
      {
        country: 'Tanzânia',
        image: 'https://flagcdn.com/w320/tz.png',
        options: ['Tanzânia', 'Quênia', 'Moçambique'],
        correct: 'Tanzânia'
      },
      {
        country: 'Tailândia',
        image: 'https://flagcdn.com/w320/th.png',
        options: ['Tailândia', 'Myanmar', 'Laos'],
        correct: 'Tailândia'
      },
      {
        country: 'Timor-Leste',
        image: 'https://flagcdn.com/w320/tl.png',
        options: ['Timor-Leste', 'Indonésia', 'Austrália'],
        correct: 'Timor-Leste'
      },
      {
        country: 'Togo',
        image: 'https://flagcdn.com/w320/tg.png',
        options: ['Togo', 'Gana', 'Benim'],
        correct: 'Togo'
      },
      {
        country: 'Tokelau',
        image: 'https://flagcdn.com/w320/tk.png',
        options: ['Tokelau', 'Nova Zelândia', 'Samoa'],
        correct: 'Tokelau'
      },
      {
        country: 'Tonga',
        image: 'https://flagcdn.com/w320/to.png',
        options: ['Tonga', 'Fiji', 'Samoa'],
        correct: 'Tonga'
      },
      {
        country: 'Trinidad e Tobago',
        image: 'https://flagcdn.com/w320/tt.png',
        options: ['Trinidad e Tobago', 'Venezuela', 'Barbados'],
        correct: 'Trinidad e Tobago'
      },
      {
        country: 'Tunísia',
        image: 'https://flagcdn.com/w320/tn.png',
        options: ['Tunísia', 'Argélia', 'Líbia'],
        correct: 'Tunísia'
      },
      {
        country: 'Turquia',
        image: 'https://flagcdn.com/w320/tr.png',
        options: ['Turquia', 'Síria', 'Grécia'],
        correct: 'Turquia'
      },
      {
        country: 'Turcomenistão',
        image: 'https://flagcdn.com/w320/tm.png',
        options: ['Turcomenistão', 'Uzbequistão', 'Irã'],
        correct: 'Turcomenistão'
      },
      {
        country: 'Ilhas Turks e Caicos',
        image: 'https://flagcdn.com/w320/tc.png',
        options: ['Ilhas Turks e Caicos', 'Bahamas', 'República Dominicana'],
        correct: 'Ilhas Turks e Caicos'
      },
      {
        country: 'Tuvalu',
        image: 'https://flagcdn.com/w320/tv.png',
        options: ['Tuvalu', 'Kiribati', 'Fiji'],
        correct: 'Tuvalu'
      },
      {
        country: 'Uganda',
        image: 'https://flagcdn.com/w320/ug.png',
        options: ['Uganda', 'Quênia', 'Tanzânia'],
        correct: 'Uganda'
      },
      {
        country: 'Ucrânia',
        image: 'https://flagcdn.com/w320/ua.png',
        options: ['Ucrânia', 'Rússia', 'Polônia'],
        correct: 'Ucrânia'
      },
      {
        country: 'Emirados Árabes Unidos',
        image: 'https://flagcdn.com/w320/ae.png',
        options: ['Emirados Árabes Unidos', 'Arábia Saudita', 'Omã'],
        correct: 'Emirados Árabes Unidos'
      },
      {
        country: 'Reino Unido',
        image: 'https://flagcdn.com/w320/gb.png',
        options: ['Reino Unido', 'França', 'Alemanha'],
        correct: 'Reino Unido'
      },
      {
        country: 'Estados Unidos',
        image: 'https://flagcdn.com/w320/us.png',
        options: ['Estados Unidos', 'Canadá', 'México'],
        correct: 'Estados Unidos'
      },
      {
        country: 'Ilhas Menores Distantes dos Estados Unidos',
        image: 'https://flagcdn.com/w320/um.png',
        options: ['Ilhas Menores Distantes dos Estados Unidos', 'Estados Unidos', 'Austrália'],
        correct: 'Ilhas Menores Distantes dos Estados Unidos'
      },
      {
        country: 'Uruguai',
        image: 'https://flagcdn.com/w320/uy.png',
        options: ['Uruguai', 'Argentina', 'Brasil'],
        correct: 'Uruguai'
      },
      {
        country: 'Uzbequistão',
        image: 'https://flagcdn.com/w320/uz.png',
        options: ['Uzbequistão', 'Cazaquistão', 'Tadjiquistão'],
        correct: 'Uzbequistão'
      },
      {
        country: 'Vanuatu',
        image: 'https://flagcdn.com/w320/vu.png',
        options: ['Vanuatu', 'Fiji', 'Nova Caledônia'],
        correct: 'Vanuatu'
      },
      {
        country: 'Cidade do Vaticano',
        image: 'https://flagcdn.com/w320/va.png',
        options: ['Cidade do Vaticano', 'Itália', 'San Marino'],
        correct: 'Cidade do Vaticano'
      },
      {
        country: 'Venezuela',
        image: 'https://flagcdn.com/w320/ve.png',
        options: ['Venezuela', 'Colômbia', 'Brasil'],
        correct: 'Venezuela'
      },
      {
        country: 'Vietnã',
        image: 'https://flagcdn.com/w320/vn.png',
        options: ['Vietnã', 'Laos', 'Camboja'],
        correct: 'Vietnã'
      },
      {
        country: 'Ilhas Virgens Britânicas',
        image: 'https://flagcdn.com/w320/vg.png',
        options: ['Ilhas Virgens Britânicas', 'Ilhas Virgens Americanas', 'Porto Rico'],
        correct: 'Ilhas Virgens Britânicas'
      },
      {
        country: 'Ilhas Virgens Americanas',
        image: 'https://flagcdn.com/w320/vi.png',
        options: ['Ilhas Virgens Americanas', 'Ilhas Virgens Britânicas', 'Porto Rico'],
        correct: 'Ilhas Virgens Americanas'
      },
      {
        country: 'País de Gales',
        image: 'https://flagcdn.com/w320/gb-wls.png',
        options: ['País de Gales', 'Inglaterra', 'Escócia'],
        correct: 'País de Gales'
      },
      {
        country: 'Wallis e Futuna',
        image: 'https://flagcdn.com/w320/wf.png',
        options: ['Wallis e Futuna', 'Fiji', 'Samoa'],
        correct: 'Wallis e Futuna'
      },
      {
        country: 'Saara Ocidental',
        image: 'https://flagcdn.com/w320/eh.png',
        options: ['Saara Ocidental', 'Marrocos', 'Argélia'],
        correct: 'Saara Ocidental'
      },
      {
        country: 'Iémen',
        image: 'https://flagcdn.com/w320/ye.png',
        options: ['Iémen', 'Arábia Saudita', 'Omã'],
        correct: 'Iémen'
      },
      {
        country: 'Zâmbia',
        image: 'https://flagcdn.com/w320/zm.png',
        options: ['Zâmbia', 'Zimbábue', 'Maláui'],
        correct: 'Zâmbia'
      },
      {
        country: 'Zimbábue',
        image: 'https://flagcdn.com/w320/zw.png',
        options: ['Zimbábue', 'Zâmbia', 'Botsuana'],
        correct: 'Zimbábue'
      }
];

// Embaralhar as bandeiras antes de começar o quiz
shuffleArray(flags);

// Função para iniciar o quiz (mostrar a primeira bandeira, etc.)
function startQuiz() {
    let currentFlagIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    // Atualiza o display do quiz com a bandeira e opções
    function loadFlag() {
        const flag = flags[currentFlagIndex];
        document.getElementById('flagImage').src = flag.image;

        // Embaralhar as opções de resposta
        const shuffledOptions = [...flag.options];
        shuffleArray(shuffledOptions);

        // Atribuir as opções embaralhadas aos elementos HTML
        document.getElementById('option1').innerText = shuffledOptions[0];
        document.getElementById('option2').innerText = shuffledOptions[1];
        document.getElementById('option3').innerText = shuffledOptions[2];
    }

    // Lógica para verificar a resposta
    function checkAnswer(selectedOption) {
        const flag = flags[currentFlagIndex];
        const correct = flag.correct;

        if (selectedOption.innerText === correct) {
            selectedOption.style.backgroundColor = 'green';
            correctAnswers++;
        } else {
            selectedOption.style.backgroundColor = 'red';
            document.querySelectorAll('.option').forEach(option => {
                if (option.innerText === correct) {
                    option.style.backgroundColor = 'green';
                }
            });
            wrongAnswers++;
        }

        // Atualiza o contador em tempo real
        document.getElementById('correctCount').innerText = correctAnswers;
        document.getElementById('wrongCount').innerText = wrongAnswers;

        // Mostra a próxima bandeira após um pequeno delay
        setTimeout(() => {
            selectedOption.style.backgroundColor = '';
            document.querySelectorAll('.option').forEach(option => {
                option.style.backgroundColor = '';
            });

            currentFlagIndex++;
            if (currentFlagIndex < flags.length) {
                loadFlag();
            } else {
                document.getElementById('result').innerText = `Acertos: ${correctAnswers}, Erros: ${wrongAnswers}`;
            }
        }, 1000);
    }

    // Carregar a primeira bandeira
    loadFlag();

    // Atribuir função de clique para cada opção
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => checkAnswer(option));
    });
}

// Iniciar o quiz ao carregar a página
window.onload = startQuiz;