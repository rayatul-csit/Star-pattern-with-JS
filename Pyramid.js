let num = 5;
let pattern = "";    
if (num > 1) {      
    for (let i = 1; i <= num; i++) {     
        for (let j = 1; j <= (num - i); j++) {    
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {      
            pattern += "* ";
        }
        pattern += "\n";    
    }
    console.log(pattern);   
}
