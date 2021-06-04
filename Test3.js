import React, { useState } from "react";


   function Test3() {
        const[dataState,newDatastate] = useState({
                start:0
        })

        const clickNumber1 = () =>{
          newDatastate({
               start: dataState.start + 1
               })
       }
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
        const clickNumber7 = () =>{
              newDatastate({
                   start: dataState.start + 7
                   })
           }
        const clickNumber8 = () =>{
                newDatastate({
                     start: dataState.start + 8
                     })
             }
        const clickNumber9 = () =>{
              newDatastate({
                   start: dataState.start + 8
                   })
           }

        const clickDelete = () =>{
                newDatastate({
                      start: null
                })
        }     
            return(
                <div>
                        <button style={{color:"blue"}}onClick={clickNumber5}>5</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber1}>1</button>
                        <button style={{color:"blue"}}onClick={clickNumber3}>3</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber4}>4</button>
                        <button style={{color:"blue"}}onClick={clickNumber5}>5</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber6}>6</button>
                        <button style={{color:"blue"}}onClick={clickNumber2}>2</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber8}>8</button>
                        <button style={{color:"blue"}}onClick={clickNumber3}>3</button><br/>
                        <button style={{color:"blue"}}onClick={clickNumber9}>9</button>
                        <button style={{color:"blue"}}onClick={clickNumber1}>1</button><br/>
                        <button style={{color:"red"}}onClick={clickDelete}>clear</button>
                        <p>ผลลัพธ์คือ:{dataState.start}</p>
                </div>
             
                )
        }

export default Test3;