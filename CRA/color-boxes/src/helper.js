const redChoice = ()=>{
    const r = Math.floor(Math.random()* 255);
    const a =  Math.random().toFixed(1) ;

    return `rgba(${r}, 0, 0,${a})`;
}
const greenChoice = ()=>{
    const g = Math.floor(Math.random()* 255);
    const a =  Math.random().toFixed(1) ;

    return `rgba(0, ${g}, 0,${a})`;
}
const blueChoice = ()=>{
    const b = Math.floor(Math.random()* 255);
    const a =  Math.random().toFixed(1) ;

    return `rgba(0, 0, ${b},${a})`;
}


export {redChoice,greenChoice,blueChoice};