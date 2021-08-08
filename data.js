let tableA = [];
const rowMaxA = 14;
const columnMaxA = 6; // 行数 一排有多少人
initTable(rowMaxA, columnMaxA, tableA, "技术", "A");

let tableB = [];
const rowMaxB = 4; // 列数 一共多少排
const columnMaxB = 6; // 行数 一排有多少人
initTable(rowMaxB, columnMaxB, tableB, "产品", "B");

let tableE = [];
const rowMaxE = 8; // 列数 一共多少排
const columnMaxE = 5; // 行数 一排有多少人
initTable(rowMaxE, columnMaxE, tableE, "E区", "E");

let tableC = [];
const rowMaxC = 8; // 列数 一共多少排
const columnMaxC = 4; // 行数 一排有多少人
initTable(rowMaxC, columnMaxC, tableC, "C区", "C");

let tableD = [];
const rowMaxD = 2; // 列数 一共多少排
const columnMaxD = 5; // 行数 一排有多少人
initTable(rowMaxD, columnMaxD, tableD, "D区", "D");

let tableF = [];
const rowMaxF = 2; // 列数 一共多少排
const columnMaxF = 3; // 行数 一排有多少人
initTable(rowMaxF, columnMaxF, tableF, "F区", "F");

let tableG = [];
const rowMaxG = 2; // 列数 一共多少排
const columnMaxG = 4; // 行数 一排有多少人
initTable(rowMaxG, columnMaxG, tableG, "G区", "G");

export default {
    tableB: tableB, // 产品数据
    tableA: tableA, // 技术数据
    tableE: tableE, //
    tableC: tableC, // 运营？
    tableD: tableD, //
    tableF: tableF, //
    tableG: tableG, //
};

/**
 * @description:
 * @param {*} _rowMax     列数 一共多少排
 * @param {*} _columMax   行数 一排有多少人
 * @param {*} _table      数据源
 * @param {*} _tag        标签
 * @param {*} _area       所在区域
 * @return {*}
 */
function initTable(_rowMax, _columMax, _table, _tag, _area) {
    let rowIndex = 1;
    let columnIndex = 1;
    let indexPointer = 1;

    for (let i = 0; i < _rowMax * _columMax; i++) {
        let people = {};

        people.id = i + 1;
        people.name = `${_area}${i + 1}`;
        people.department = _tag;
        people.position = "xx工程师";
        people.row = rowIndex;
        people.column = columnIndex;
        people.area = _area; // 区域名称

        if (indexPointer > _columMax - 1) {
            rowIndex++;
            columnIndex = 1;
            indexPointer = 1;
        } else {
            columnIndex++;
            indexPointer++;
        }
        _table.push(people);
    }
}
