/* ============================================================
   ORIGINAL DRAWINGS (SVG) for the picture questions.
   These are drawn for this site. They are not copies of the
   handbook artwork. Only questions listed here get a drawing.
   ============================================================ */
const SR = '#d7261e', SB = '#1f3f9a', SY = '#f5c400';

const TRI_UP = `<polygon points='60,8 112,100 8,100' fill='#fff' stroke='${SR}' stroke-width='10' stroke-linejoin='round'/>`;
const TRI_DN = `<polygon points='8,20 112,20 60,112' fill='#fff' stroke='${SR}' stroke-width='10' stroke-linejoin='round'/>`;
const RING = (fill, stroke) => `<circle cx='60' cy='60' r='50' fill='${fill}' stroke='${stroke}' stroke-width='10'/>`;
const SQ = fill => `<rect x='6' y='6' width='108' height='108' rx='8' fill='${fill}'/>`;
const DIA = `<polygon points='60,6 114,60 60,114 6,60' fill='${SY}' stroke='#fff' stroke-width='6' stroke-linejoin='round'/>`;
const OCT = `<polygon points='38,8 82,8 112,38 112,82 82,112 38,112 8,82 8,38' fill='${SR}' stroke='#fff' stroke-width='4'/>`;
const UPARROW = (c = '#fff') => `<polygon points='60,18 86,54 70,54 70,102 50,102 50,54 34,54' fill='${c}'/>`;
const CAR = c => `<rect x='30' y='52' width='60' height='22' rx='6' fill='${c}'/><rect x='42' y='38' width='36' height='18' rx='4' fill='${c}'/><circle cx='44' cy='76' r='7' fill='${c}'/><circle cx='76' cy='76' r='7' fill='${c}'/>`;
const TRUCK = c => `<rect x='24' y='42' width='46' height='32' rx='3' fill='${c}'/><rect x='72' y='52' width='22' height='22' rx='3' fill='${c}'/><circle cx='38' cy='80' r='6' fill='${c}'/><circle cx='80' cy='80' r='6' fill='${c}'/>`;
const PED = c => `<circle cx='60' cy='30' r='9' fill='${c}'/><path d='M60 40 L60 70 M46 52 L74 52 M60 70 L48 98 M60 70 L72 98' stroke='${c}' stroke-width='8' stroke-linecap='round' fill='none'/>`;
const SLASH = (c = SR) => `<line x1='22' y1='98' x2='98' y2='22' stroke='${c}' stroke-width='10' stroke-linecap='round'/>`;
const NUM = (txt, c, size = 40) => `<text x='60' y='${size === 40 ? 72 : 70}' font-size='${size}' font-weight='bold' text-anchor='middle' font-family='Arial, sans-serif' fill='${c}'>${txt}</text>`;

const SIGN_WRAP = inner => `<svg viewBox='0 0 120 120' role='img' aria-label='Picture for this question' xmlns='http://www.w3.org/2000/svg'>${inner}</svg>`;
const ROW_WRAP = inners => `<svg viewBox='0 0 ${inners.length * 120} 120' role='img' aria-label='Picture choices for this question' xmlns='http://www.w3.org/2000/svg'>${inners.map((s, i) => `<g transform='translate(${i * 120},0)'>${s}</g>`).join('')}</svg>`;
const SCENE = (w, h, inner) => `<svg viewBox='0 0 ${w} ${h}' role='img' aria-label='Picture for this question' xmlns='http://www.w3.org/2000/svg'>${inner}</svg>`;

/* ---- single road signs (questions 1-74) ---- */
const DRAW = {
  6:  SIGN_WRAP(TRI_UP + `<text x='60' y='88' font-size='54' font-weight='bold' text-anchor='middle' font-family='Arial, sans-serif' fill='#111'>!</text>`),
  9:  SIGN_WRAP(TRI_UP + `<circle cx='60' cy='70' r='13' fill='none' stroke='#111' stroke-width='5'/>`),
  12: SIGN_WRAP(TRI_UP + `<g transform='translate(18,12) scale(0.7)'>${PED('#111')}</g>`),
  31: SIGN_WRAP(TRI_DN),
  33: SIGN_WRAP(RING('#fff', SR) + PED('#111') + SLASH()),
  35: SIGN_WRAP(`<circle cx='60' cy='60' r='52' fill='${SR}'/><rect x='18' y='52' width='84' height='16' fill='#fff'/>`),
  36: SIGN_WRAP(RING('#fff', SR) + CAR('#111')),
  37: SIGN_WRAP(RING('#fff', SR) + TRUCK('#111')),
  45: SIGN_WRAP(RING('#fff', SR) + NUM('60', '#111')),
  46: SIGN_WRAP(RING('#fff', '#999') + NUM('60', '#777') + `<line x1='20' y1='100' x2='100' y2='20' stroke='#999' stroke-width='5'/>`),
  47: SIGN_WRAP(RING('#fff', SR) + `<g transform='translate(14,36) scale(0.5)'>${CAR(SR)}</g><g transform='translate(14,70) scale(0.5)'>${CAR('#111')}</g>`),
  61: SIGN_WRAP(`<circle cx='60' cy='60' r='54' fill='${SB}'/>` + UPARROW('#fff')),
  63: SIGN_WRAP(DIA),
  64: SIGN_WRAP(DIA + `<line x1='24' y1='96' x2='96' y2='24' stroke='#555' stroke-width='5'/><line x1='36' y1='108' x2='108' y2='36' stroke='#555' stroke-width='5' opacity='0.5'/>`),
  67: SIGN_WRAP(SQ(SB) + UPARROW('#fff')),
  70: SIGN_WRAP(SQ(SB) + CAR('#fff')),
  74: SIGN_WRAP(SQ(SB) + `<rect x='30' y='30' width='60' height='60' fill='#fff'/><rect x='52' y='38' width='16' height='44' fill='${SR}'/><rect x='38' y='52' width='44' height='16' fill='${SR}'/>`),

  /* ---- road layouts (questions 90, 101-104) ---- */
  90: SCENE(240, 150,
    `<rect width='240' height='150' fill='#5a7d4a'/>` +
    `<rect x='0' y='20' width='240' height='110' fill='#555'/>` +
    `<rect x='0' y='20' width='240' height='37' fill='${SY}' opacity='0.35'/>` +
    `<line x1='0' y1='57' x2='240' y2='57' stroke='#fff' stroke-dasharray='14 10'/>` +
    `<line x1='0' y1='94' x2='240' y2='94' stroke='#fff' stroke-dasharray='14 10'/>` +
    `<text x='8' y='16' font-size='12' font-family='Arial, sans-serif' fill='#111'>LEFT LANE</text>` +
    `<g transform='translate(120,22) scale(0.6)'>${CAR(SB)}</g>` +
    `<g transform='translate(40,66) scale(0.6)'>${TRUCK('#c0392b')}</g>`),
  101: SCENE(240, 120,
    `<rect width='240' height='120' fill='#5a7d4a'/><rect x='0' y='20' width='240' height='80' fill='#555'/>` +
    `<line x1='0' y1='60' x2='240' y2='60' stroke='#fff' stroke-width='4' stroke-dasharray='18 12'/>`),
  102: SCENE(240, 120,
    `<rect width='240' height='120' fill='#5a7d4a'/><rect x='0' y='20' width='240' height='80' fill='#555'/>` +
    `<line x1='0' y1='60' x2='240' y2='60' stroke='#fff' stroke-width='5'/>`),
  103: SCENE(240, 200,
    `<rect width='240' height='200' fill='#5a7d4a'/>` +
    `<polygon points='60,200 180,200 150,112 90,112' fill='#555'/>` +
    `<circle cx='120' cy='60' r='52' fill='#555'/><circle cx='120' cy='60' r='20' fill='#6aa84f'/>` +
    `<line x1='120' y1='200' x2='120' y2='114' stroke='#fff' stroke-dasharray='10 8'/>` +
    `<path d='M90 190 L90 128' stroke='#fff' stroke-width='6' fill='none'/><polygon points='90,118 80,134 100,134' fill='#fff'/>` +
    `<path d='M150 190 L150 150 Q150 128 172 124' stroke='#fff' stroke-width='6' fill='none'/><polygon points='182,124 166,116 166,134' fill='#fff'/>` +
    `<path d='M70 150 Q80 128 96 122' stroke='${SR}' stroke-width='4' stroke-dasharray='6 5' fill='none'/>` +
    `<text x='82' y='100' font-size='20' font-weight='bold' fill='${SR}' font-family='Arial, sans-serif'>X</text>` +
    `<text x='28' y='196' font-size='11' fill='#fff' font-family='Arial, sans-serif'>LEFT</text>` +
    `<text x='150' y='196' font-size='11' fill='#fff' font-family='Arial, sans-serif'>RIGHT</text>`),
  104: SCENE(240, 200,
    `<rect width='240' height='200' fill='#5a7d4a'/>` +
    `<polygon points='50,200 190,200 160,112 80,112' fill='#555'/>` +
    `<circle cx='120' cy='60' r='52' fill='#555'/><circle cx='120' cy='60' r='20' fill='#6aa84f'/>` +
    `<line x1='93' y1='200' x2='93' y2='114' stroke='#fff' stroke-dasharray='10 8'/>` +
    `<line x1='147' y1='200' x2='147' y2='114' stroke='#fff' stroke-dasharray='10 8'/>` +
    `<path d='M70 190 L70 150 L50 130' stroke='#fff' stroke-width='6' fill='none'/><polygon points='42,126 58,120 56,138' fill='#fff'/>` +
    `<path d='M120 190 L120 118' stroke='#fff' stroke-width='6' fill='none'/><polygon points='120,106 110,122 130,122' fill='#fff'/>` +
    `<path d='M120 190 Q120 150 150 130' stroke='${SR}' stroke-width='4' stroke-dasharray='6 5' fill='none'/>` +
    `<text x='132' y='100' font-size='20' font-weight='bold' fill='${SR}' font-family='Arial, sans-serif'>X</text>` +
    `<text x='44' y='190' font-size='11' fill='#fff' font-family='Arial, sans-serif'>LEFT</text>` +
    `<text x='100' y='190' font-size='11' fill='#fff' font-family='Arial, sans-serif'>STRAIGHT</text>` +
    `<text x='168' y='190' font-size='11' fill='#fff' font-family='Arial, sans-serif'>RIGHT</text>`)
};

/* ---- picture-choice questions: three signs side by side ---- */
const FDRAW = {
  // 75: which sign is give way? (answer No. 1 = inverted triangle)
  75: ROW_WRAP([TRI_DN, TRI_UP, OCT]),
  // 79: which sign means you cannot enter? (answer No. 2 = white bar)
  79: ROW_WRAP([RING(SB, SR) + SLASH(SR), RING(SR, SR) + `<rect x='18' y='52' width='84' height='16' fill='#fff'/>`, RING('#fff', SR) + `<line x1='30' y1='30' x2='90' y2='90' stroke='${SR}' stroke-width='9'/><line x1='90' y1='30' x2='30' y2='90' stroke='${SR}' stroke-width='9'/>`]),
  // 81: which sign shows a one-way road? (answer No. 1 = blue square with up arrow)
  81: ROW_WRAP([SQ(SB) + UPARROW('#fff'), SQ(SB) + `<polygon points='30,18 44,48 34,48 34,102 26,102 26,48 16,48' fill='#fff'/><polygon points='90,102 76,72 86,72 86,18 94,18 94,72 104,72' fill='${SR}'/>`, RING(SB, '#fff') + UPARROW('#fff')]),
  // 82: which sign restricts you to 60 km/h? (answer No. 3 = red circle 60)
  82: ROW_WRAP([RING(SB, SB) + NUM('60', '#fff'), SQ(SB) + NUM('60', '#fff'), RING('#fff', SR) + NUM('60', '#111')])
};
