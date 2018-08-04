export const canvasWith = 600;
export const canvasHeight = 600;
export const mapIndexOffset = -1;
export const tankSize = 32;
export const tileSize = 16;
export const bulletSize = 3;
export const imgSplitSize = 32;
export const speed = 4;
export const bulletSpeed = 4;

export const allImg = new Image();
allImg.src = "./image/tanks_sheet.png";

import {STREET, GRID} from "./index";

const _ = STREET;
const X = GRID;
export const MAP = {
    "level_1":[
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