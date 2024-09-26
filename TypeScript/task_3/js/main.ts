/// <reference path="./crud.d.ts"/>
import {RowID, RowElement} from './interface';
let CRUD = require("./crud");
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23};
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);