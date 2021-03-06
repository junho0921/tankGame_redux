export const canvasWith = 600;
export const canvasHeight = 600;
export const mapIndexOffset = -1;
export const tankSize = 32;
export const tileSize = 16;
export const bulletSize = 3;
export const imgSplitSize = 32;
export const speed = 2;
export const bulletSpeed = 6;

export const allImg = new Image();
allImg.src = "./image/tanks_sheet.png";

import {STREET, GRID, keyboard} from "./index";

const _ = STREET;
const X = GRID;
export const MAP = {
    1:[
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,X,X,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,X,X,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_],
        [_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_],
        [X,X,_,_,X,X,X,X,_,_,_,_,_,_,_,_,_,_,X,X,X,X,_,_,X,X],
        [X,X,_,_,X,X,X,X,_,_,_,_,_,_,_,_,_,_,X,X,X,X,_,_,X,X],
        [_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,X,X,X,X,X,X,_,_,_,_,_,_,_,_,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,X,X,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,_,_,_,_,_,_,_,_,X,X,_,_,X,X,_,_],
        [_,_,X,X,_,_,X,X,_,_,_,X,X,X,X,_,_,_,X,X,_,_,X,X,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,X,_,_,X,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,X,_,_,X,_,_,_,_,_,_,_,_,_,_,_],
    ]
};

export const AppConfig = {
    level: 1,
    renderGap: 3000,
    enemyTanks:[
        {x: tileSize * 2, y: 0, dir: keyboard.RIGHT},
        {x: tileSize * 10, y: 0, dir: keyboard.LEFT},
        {x: tileSize * 18, y: 0, dir: keyboard.RIGHT},
        {x: tileSize * 22, y: 0, dir: keyboard.LEFT, isAggressive:true},
    ],
    player: {
        x: tileSize * 9,
        y: tileSize * 24,
        dir: keyboard.UP
    }
};