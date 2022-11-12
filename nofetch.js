"use strict";

import item from './data.json' assert{type:'json'};
console.log(item.title);
// let data = JSON.parse(item)

let display = "";


    
   

         

const daily = () =>{ 
    for(let item of data){              
    display +=`
            
                <div class="box">
                    <div class="icon" style="background: url(${item.image})no-repeat;background-position: right;background-color:${item.bgcolour};"></div>
                    <div class="activity">    
                        <p class="title">${item.title}</p>
                        <p class="current">${item.timeframes.daily.current}hrs</p>
                        <p class="previous">
                            <span>Yesterday -${item.timeframes.daily.previous}hrs</span>
                            
                        </p>

                    </div>
                </div>
            `}

       document.querySelector(".activities").innerHTML = display;
}
// //for weekly

        function weekly(){
        for(let item of data){
        display +=`
            <div class="activity">
                <div class="icon" style="background: url(${item.image})no-repeat;background-position: right;background-colour:${item.bgcolour};"></div>
            
                <p class="title">${item.title}</p>
                <p class="current">${item.timeframes.weekly.current}hrs</p>
                <p class="previous">
                    <span>Last week -${item.timeframes.weekly.previous}hrs</span>
                
                </p>

        
            </div>
    
    
        ` }
        document.querySelector(".activities").innerHTML = display;
    }



        function monthly(){
        for(let item of data){
        display +=`
            <div class="activity">
                <div class="icon" style="background: url(${item.image})no-repeat;background-position: right;background-colour:${item.bgcolour};"></div>
            
                <p class="title">${item.title}</p>
                <p class="current">${item.timeframes.monthly.current}hrs</p>
                <p class="previous">
                    <span>Last month -${item.timeframes.monthly.previous}hrs</span>
                
                </p>

        
            </div>
    
    
        `}
        document.querySelector(".activities").innerHTML = display;
    }
