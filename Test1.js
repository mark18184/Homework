import React from "react";

    function Test1 () {
        const number = parseInt(prompt('Enter an integer: '));
        const range = parseInt(prompt('Enter a range: '));
        
        
        for(let i = 1; i <= range; i++) {
            const result = i * number;
            console.log(`${number} * ${i} = ${result}`);
            var answer = (`${number} * ${i} = ${result}`)
        }
      
         return(
            <div>
               <div> 
                     <h2>Test:1</h2>
                     <p style={
                      {color: "red"}
                    }>{answer}</p>
      
      
                 </div>

            </div>
         )
     
 }

export default Test1;
