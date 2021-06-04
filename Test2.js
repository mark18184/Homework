import React, { useState } from "react";


   function Test2() {
        const[dataState,newDatastate] = useState({
                start:0
        })

        const clickNumber2 = () =>{
           newDatastate({
                start: dataState.start + 2
                })
        }
        
        const clickNumber3 = () =>{
                newDatastate({
                     start: dataState.start + 3
                     })
             }
        const clickNumber4 = () =>{
                newDatastate({
                     start: dataState.start + 4
                     })
             }
        const clickNumber5 = () =>{
                newDatastate({
                     start: dataState.start + 5
                     })
             }
        const clickNumber6 = () =>{
                newDatastate({
                     start: dataState.start + 6
                     })
             }
        const clickNumber8 = () =>{
                newDatastate({
                     start: dataState.start + 8
                     })
             }

        const clickDelete = () =>{
                newDatastate({
                      start: null
                })
        }
        const inputShow = () =>{
                newDatastate({
                        start: clickNumber2
                  })
        }     
            return(
                <div>
                        <h2>Test:2</h2>
                        <button style={{color:"blue"}}onClick={clickNumber3}>3</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber4}>4</button>
                        <button style={{color:"blue"}}onClick={clickNumber6}>6</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber8}>8</button>
                        <button style={{color:"blue"}}onClick={clickNumber3}>3</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber2}>2</button>
                        <button style={{color:"blue"}}onClick={clickNumber5}>5</button><br/>
                        <button style={{color:"red"}}onClick={clickDelete}>clear</button><br/>
                        
                        <p>ผลลัพธ์คือ:{dataState.start}</p>

                
                </div>
             
                )
        }
        
    
            
            
        
    

export default Test2;