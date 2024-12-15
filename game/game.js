function clearscreen(){
    document.getElementById('screen').value='';
}
function deleteChar(){
    let screen=document.getElementById('screen');
    screen.value=screen.value.slice(0,-1);
}
function appendChar(v1){
    document.getElementById('screen').value+=v1;
}
function clearScreen(){
    document.getElementById('screen').value='';
}
function calculate(add){
    let oprator = document.getElementById('oprator');
}
function calculator(){
    if(oprator===''||currentvalue===''||previousvalue===''){
        return;
    }
    let prev=0;
    let curr=0;

    for(let i=0;i<previousvalue.length;i++){
        prev=prev * 10 +(previousvalue.charcodeAt(i)-48);
    }
    for(let i=0;i<currentvalue.length;i++){
        curr =curr * 10 +(currentvalue.charcodeAt(i)-48);
    }
    let result=0;

    if(oprator === '+'){
        result=prev+curr;
    }else if(oprator === '-'){
        result=prev+curr;
    }else if(oprator === '*'){
        result=prev+curr;
    }else if(oprator === '/'){
        result=curr !==0 ? prev/curr:'Error';
    }
    previousvalue=result;
    currentvalue='';
    oprator='';
    display.value=previousvalue;
}
