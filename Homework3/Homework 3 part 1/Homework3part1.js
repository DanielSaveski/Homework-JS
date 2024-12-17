
function getTypeAndPrint(value) {
    let type = typeof value;
    console.log(`Value: ${value}, Type: ${type}`);
    return type;
}

getTypeAndPrint({});          
getTypeAndPrint(true);        
getTypeAndPrint(42);         
getTypeAndPrint("Hello");    
getTypeAndPrint(undefined);  
