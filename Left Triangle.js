let num = 5;
let pattern = "";    
if (num > 1) {      
    for (let i = 1; i <= num; i++) {    
        for (let j = 1; j <= i; j++) {      
            pattern += "* ";    
        }
        pattern += "\n";    
    }
    console.log(pattern);   
}