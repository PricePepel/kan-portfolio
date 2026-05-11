/**
 * Hipparcos / Yale Bright Star Catalogue selection.
 *
 * Names + apparent magnitudes + J2000 equatorial coordinates for the 60
 * brightest stars visible from Earth. Public-domain data, used here as
 * content-texture rather than decoration: the starfield rendered from
 * these positions is the actual sky over Tashkent at a fixed instant.
 *
 *   raHours   — right ascension in hours (0–24)
 *   decDeg    — declination in degrees (-90 to +90)
 *   mag       — apparent visual magnitude (lower = brighter)
 *   name      — common name (English)
 *   nameRu    — Russian name (optional; surfaces on hover)
 *   bayer     — Bayer designation
 */

export interface Star {
  raHours: number;
  decDeg: number;
  mag: number;
  name: string;
  nameRu?: string;
  bayer: string;
}

export const BRIGHT_STARS: Star[] = [
  { raHours: 6.7525,  decDeg: -16.7161, mag: -1.46, name: 'Sirius',     nameRu: 'Сириус',     bayer: 'α CMa' },
  { raHours: 6.3992,  decDeg: -52.6957, mag: -0.74, name: 'Canopus',    nameRu: 'Канопус',    bayer: 'α Car' },
  { raHours: 14.2610, decDeg: 19.1825,  mag: -0.05, name: 'Arcturus',   nameRu: 'Арктур',     bayer: 'α Boo' },
  { raHours: 18.6156, decDeg: 38.7837,  mag:  0.03, name: 'Vega',       nameRu: 'Вега',       bayer: 'α Lyr' },
  { raHours: 5.2782,  decDeg: 45.9980,  mag:  0.08, name: 'Capella',    nameRu: 'Капелла',    bayer: 'α Aur' },
  { raHours: 5.2423,  decDeg: -8.2017,  mag:  0.13, name: 'Rigel',      nameRu: 'Ригель',     bayer: 'β Ori' },
  { raHours: 7.6550,  decDeg: 5.2250,   mag:  0.34, name: 'Procyon',    nameRu: 'Процион',    bayer: 'α CMi' },
  { raHours: 5.9195,  decDeg: 7.4071,   mag:  0.42, name: 'Betelgeuse', nameRu: 'Бетельгейзе',bayer: 'α Ori' },
  { raHours: 19.8463, decDeg: 8.8683,   mag:  0.77, name: 'Altair',     nameRu: 'Альтаир',    bayer: 'α Aql' },
  { raHours: 4.5987,  decDeg: 16.5093,  mag:  0.85, name: 'Aldebaran',  nameRu: 'Альдебаран', bayer: 'α Tau' },
  { raHours: 13.4199, decDeg: -11.1614, mag:  0.97, name: 'Spica',      nameRu: 'Спика',      bayer: 'α Vir' },
  { raHours: 16.4901, decDeg: -26.4319, mag:  1.06, name: 'Antares',    nameRu: 'Антарес',    bayer: 'α Sco' },
  { raHours: 7.7553,  decDeg: 28.0262,  mag:  1.14, name: 'Pollux',     nameRu: 'Поллукс',    bayer: 'β Gem' },
  { raHours: 22.9608, decDeg: -29.6222, mag:  1.16, name: 'Fomalhaut',  nameRu: 'Фомальгаут', bayer: 'α PsA' },
  { raHours: 20.6905, decDeg: 45.2803,  mag:  1.25, name: 'Deneb',      nameRu: 'Денеб',      bayer: 'α Cyg' },
  { raHours: 10.1395, decDeg: 11.9672,  mag:  1.36, name: 'Regulus',    nameRu: 'Регул',      bayer: 'α Leo' },
  { raHours: 6.9770,  decDeg: -28.9722, mag:  1.50, name: 'Adhara',     bayer: 'ε CMa' },
  { raHours: 7.5766,  decDeg: 31.8884,  mag:  1.58, name: 'Castor',     nameRu: 'Кастор',     bayer: 'α Gem' },
  { raHours: 5.4382,  decDeg: 28.6082,  mag:  1.65, name: 'Elnath',     bayer: 'β Tau' },
  { raHours: 5.6036,  decDeg: -1.2019,  mag:  1.69, name: 'Alnilam',    bayer: 'ε Ori' },
  { raHours: 5.5334,  decDeg: -0.2991,  mag:  1.74, name: 'Mintaka',    bayer: 'δ Ori' },
  { raHours: 5.6793,  decDeg: -1.9426,  mag:  1.74, name: 'Alnitak',    bayer: 'ζ Ori' },
  { raHours: 11.0621, decDeg: 61.7510,  mag:  1.79, name: 'Dubhe',      nameRu: 'Дубхе',      bayer: 'α UMa' },
  { raHours: 3.4054,  decDeg: 49.8612,  mag:  1.79, name: 'Mirfak',     bayer: 'α Per' },
  { raHours: 12.9005, decDeg: 55.9598,  mag:  1.76, name: 'Alioth',     nameRu: 'Алиот',      bayer: 'ε UMa' },
  { raHours: 13.7923, decDeg: 49.3133,  mag:  1.86, name: 'Alkaid',     nameRu: 'Алькаид',    bayer: 'η UMa' },
  { raHours: 6.3777,  decDeg: -17.9559, mag:  1.98, name: 'Wezen',      bayer: 'δ CMa' },
  { raHours: 18.4029, decDeg: -34.3843, mag:  1.85, name: 'Kaus Australis', bayer: 'ε Sgr' },
  { raHours: 13.3987, decDeg: 54.9253,  mag:  2.23, name: 'Mizar',      nameRu: 'Мицар',      bayer: 'ζ UMa' },
  { raHours: 2.5302,  decDeg: 89.2641,  mag:  1.98, name: 'Polaris',    nameRu: 'Полярная',   bayer: 'α UMi' },
  { raHours: 2.1195,  decDeg: 23.4624,  mag:  2.00, name: 'Hamal',      bayer: 'α Ari' },
  { raHours: 3.1361,  decDeg: 40.9557,  mag:  2.10, name: 'Algol',      nameRu: 'Алголь',     bayer: 'β Per' },
  { raHours: 6.6286,  decDeg: 16.3993,  mag:  1.93, name: 'Alhena',     bayer: 'γ Gem' },
  { raHours: 5.4187,  decDeg: 6.3497,   mag:  1.64, name: 'Bellatrix',  nameRu: 'Беллатрикс', bayer: 'γ Ori' },
  { raHours: 5.7959,  decDeg: -9.6697,  mag:  2.07, name: 'Saiph',      bayer: 'κ Ori' },
  { raHours: 17.5822, decDeg: 12.5601,  mag:  2.08, name: 'Rasalhague', bayer: 'α Oph' },
  { raHours: 1.6286,  decDeg: -57.2367, mag:  2.04, name: 'Diphda',     bayer: 'β Cet' },
  { raHours: 9.4598,  decDeg: -8.6586,  mag:  1.99, name: 'Alphard',    bayer: 'α Hya' },
  { raHours: 17.7081, decDeg: -39.0299, mag:  1.62, name: 'Shaula',     bayer: 'λ Sco' },
  { raHours: 17.5604, decDeg: -37.1038, mag:  1.86, name: 'Sargas',     bayer: 'θ Sco' },
  { raHours: 16.0902, decDeg: -19.8054, mag:  2.43, name: 'Dschubba',   bayer: 'δ Sco' },
  { raHours: 18.9211, decDeg: -26.2967, mag:  2.05, name: 'Nunki',      bayer: 'σ Sgr' },
  { raHours: 8.7752,  decDeg: -2.4540,  mag:  1.96, name: 'Suhail',     bayer: 'λ Vel' },
  { raHours: 23.0628, decDeg: 28.0828,  mag:  2.47, name: 'Scheat',     bayer: 'β Peg' },
  { raHours: 21.7364, decDeg: 9.8750,   mag:  2.39, name: 'Enif',       bayer: 'ε Peg' },
  { raHours: 23.0793, decDeg: 15.2052,  mag:  2.49, name: 'Markab',     bayer: 'α Peg' },
  { raHours: 12.4934, decDeg: -16.5158, mag:  2.58, name: 'Heze',       bayer: 'ζ Vir' },
  { raHours: 12.9335, decDeg: 38.3185,  mag:  2.81, name: 'Cor Caroli', bayer: 'α CVn' },
  { raHours: 15.7378, decDeg: 6.4254,   mag:  2.61, name: 'Unukalhai',  bayer: 'α Ser' },
  { raHours: 16.7340, decDeg: 38.9222,  mag:  2.21, name: 'Rasalgethi', bayer: 'α Her' },
  { raHours: 11.8175, decDeg: 14.5719,  mag:  2.14, name: 'Denebola',   bayer: 'β Leo' },
  { raHours: 10.3328, decDeg: 19.8417,  mag:  2.61, name: 'Algieba',    bayer: 'γ Leo' },
  { raHours: 12.2611, decDeg: -50.7224, mag:  2.20, name: 'Gienah',     bayer: 'γ Crv' },
  { raHours: 14.6981, decDeg: 27.0741,  mag:  2.36, name: 'Seginus',    bayer: 'γ Boo' },
  { raHours: 13.7918, decDeg: 17.4569,  mag:  2.69, name: 'Muphrid',    bayer: 'η Boo' },
  { raHours: 14.8499, decDeg: 74.1554,  mag:  2.07, name: 'Kochab',     nameRu: 'Кохаб',      bayer: 'β UMi' },
  { raHours: 11.8970, decDeg: 53.6948,  mag:  2.44, name: 'Phecda',     bayer: 'γ UMa' },
  { raHours: 11.0307, decDeg: 56.3825,  mag:  2.37, name: 'Merak',      nameRu: 'Мерак',      bayer: 'β UMa' },
  { raHours: 12.2570, decDeg: 57.0326,  mag:  3.31, name: 'Megrez',     bayer: 'δ UMa' },
  { raHours: 22.7095, decDeg: 10.8313,  mag:  2.94, name: 'Sadalmelik', bayer: 'α Aqr' }
];
