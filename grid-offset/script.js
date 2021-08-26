const grid = document.getElementsByClassName("grid-container")[0];
const gridItems = document.getElementsByClassName("grid-item");

let map = {};
let rowIndex = 0;
let colIndex = 0;

const mapping = function () {

    //fetch all the grid items
    let gridCells = $(".grid-item");
    
    for(let i = 0; i < gridCells.length; i++) {
        let item = gridCells.get(i);
        let linksObj = $(item).find("a"); //returns an object
        let linksArray=[];

        for(let j = 0; j < linksObj.length; j++)
            linksArray = linksArray.concat(linksObj.get(j));

        map[item.offsetLeft] = map[item.offsetLeft] ? map[item.offsetLeft].concat(linksArray) : linksArray;
    }
}

const navigation = function (event) {
    let prev_row, prev_col, next_row, next_col;
    let mapIndex = Object.keys(map);
    console.log(map);
    switch(event.key) {
        case "ArrowUp":
            event.preventDefault();
            if(rowIndex !== 0) rowIndex--;
            else if(colIndex !== 0){
                colIndex--;
                rowIndex = map[mapIndex[colIndex]].length -1;
            }
            map[mapIndex[colIndex]][rowIndex].focus();
            break;
        case "ArrowDown":
            event.preventDefault();
            if(rowIndex !== map[mapIndex[colIndex]].length - 1)
            rowIndex++;
            else if(colIndex !== mapIndex.length -1 ){
                rowIndex = 0;
                colIndex++;
            }
            map[mapIndex[colIndex]][rowIndex].focus();
            break;
        case "ArrowLeft": break;
        case "ArrowRight": break;
        default:
            // TODO: need to implement combined navigation with tab & arrow keys
            // let cur_col, cur_row, c_i=0;
            // for(let [k,v] of Object.entries(map)){
            //     if(v.includes($(":focus")[0])){
            //         cur_row = v.indexOf($(":focus")[0]);
            //         cur_col = c_i;
            //     }
            //     ++c_i;
            // }
            // rowIndex = cur_row;
            // colIndex = cur_col;
            // console.log("row: "+rowIndex+", col: "+colIndex);
            
            // if(rowIndex === map[mapIndex[colIndex]].length - 2){
            //     next_row = 0;
            //     next_col = cur_col+1;
            // }
            // else if()
            
    }
    
}

$(window).on("load", mapping);
// $(window).on("resize", mapping);

$(document).on("keydown", navigation);