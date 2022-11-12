//ajax request to fetch the data from the json file
let http =new XMLHttpRequest();

//prepare request using open() method
http.open('get' , 'data.json',true);

 //send the request
 http.send();

 //fetching the response

 http.onload = function(){
    //checking the readystate and status properties
    
    if(this.readyState == 4 && this.status == 200) {

        //parse json data and convert them to javSCRIPT array
        let data = JSON.parse(this.responseText);
        
        
        //send empty variable to add the incoming data
        
        let display = "";
        

        //looping through the products and output data
        //displaying data when  daily function is called
         
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
                        
            
                        `
        }
            // //for weekly
        
        //     for(let item of data){
        //         function weekly(){
        //         display +=`
        //             <div class="activity">
        //                 <div class="icon" style="background: url(${item.image})no-repeat;background-position: right;background-colour:${item.bgcolour};"></div>
                        
        //                 <p class="title">${item.title}</p>
        //                 <p class="current">${item.timeframes.weekly.current}hrs</p>
        //                 <p class="previous">
        //                     <span>Last week -${item.timeframes.weekly.previous}hrs</span>
                            
        //                 </p>
    
                    
        //             </div>
                
                
        //         `
        //     }
            
        // }
        
        //     for(let item of data){
        //         function monthly(){
        //         display +=`
        //             <div class="activity">
        //                 <div class="icon" style="background: url(${item.image})no-repeat;background-position: right;background-colour:${item.bgcolour};"></div>
                        
        //                 <p class="title">${item.title}</p>
        //                 <p class="current">${item.timeframes.monthly.current}hrs</p>
        //                 <p class="previous">
        //                     <span>Last month -${item.timeframes.monthly.previous}hrs</span>
                            
        //                 </p>
    
                    
        //             </div>
                
                
        //         `
        //     }
        // }
       
        //target activity container and add datamthat display hold
        document.querySelector(".activities").innerHTML = display;

    }
  
 }
 