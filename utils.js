import { CSS3DRenderer, CSS3DObject } from "./jsm/renderers/CSS3DRenderer.js"; // 3d控制
/* 偏移距离 */
const offsetX = -300;
const offsetY = -150;
/* 盒子大小 */
const boxWidth = 140;
const boxHeight = 180;
const interval = 50;

export default {
    initDom: initDom,
    initTableData: initTableData,
};

function initTableData(scene, objects, THREE, _targets, _data) {
    let nowRow = 0,
        space = 0,
        spaceNum = 0;

    for (let j = 0; j < _data.length; j++) {
        const table = _data[j];
        const { startX, startY } = getStartXY(_data[j][0].area);

        for (let i = 0; i < table.length; i++) {
            const people = table[i];
            // 背景图
            const element = initDom(people);

            // 初始化时的随机位置
            const objectCSS = new CSS3DObject(element);
            objectCSS.position.x = Math.random() * 4000 - 2000;
            objectCSS.position.y = Math.random() * 4000 - 2000;
            objectCSS.position.z = Math.random() * 4000 - 2000;
            scene.add(objectCSS);

            objects.push(objectCSS);

            // 每一个元素的 固定位置
            // 一个位置的大小是 140*180
            // 每两行会有一个过道
            if (nowRow !== people.row) {
                // 触发变动
                nowRow = people.row;

                if (space === 2) {
                    spaceNum++;
                    space = 0;
                }
                space++;
            }

            const object = new THREE.Object3D();
            object.position.x = people.row * boxWidth + startX + interval * spaceNum;
            object.position.y = -(people.column * boxHeight) + startY;
            console.log(object);
            _targets.table.push(object);
        }
    }
}

/**
 * @description: 起始位置
 * @param {*} _type
 * @return {*}
 */
function getStartXY(_type) {
    const data = {
        A: {
            startX: -2000 + offsetX,
            startY: 990 + offsetY,
        },
        B: {
            startX: -700 + offsetX,
            startY: -200 + offsetY,
        },
        E: {
            startX: -100 + offsetX,
            startY: 990 + offsetY,
        },
        C: {
            startX: -300 + offsetX,
            startY: 1990 + offsetY,
        },
        D: {
            startX: 900 + offsetX,
            startY: 1990 + offsetY,
        },
        F: {
            startX: 110 + offsetX,
            startY: -200 + offsetY,
        },
        G: {
            startX: 380 + offsetX,
            startY: -200 + offsetY,
        },
    };

    return data[_type];
}

function initDom(renderData) {
    const people = renderData;

    // 容器
    const element = document.createElement("div");
    element.className = "element";
    element.style.backgroundColor = "rgba(0,127,127," + (Math.random() * 0.5 + 0.25) + ")";

    // 右上角序号
    const number = document.createElement("div");
    number.className = "number";
    number.textContent = people.id;
    element.appendChild(number);

    // 元素名称
    const symbol = document.createElement("div");
    symbol.className = "symbol";
    symbol.textContent = people.name;
    element.appendChild(symbol);

    // 全称 & 质量
    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = people.position + "<br>" + people.department;
    element.appendChild(details);

    return element;
}
