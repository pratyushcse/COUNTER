let count=0;
console.log("value is "+ count);
function increase(){
    count+=1;
    console.log("value is "+ count);
    document.querySelector(".pa").innerText="COUNT = "+count
    
    
}

function decrease(){
    count-=1;
    console.log("value is "+ count);
    document.querySelector(".pa").innerText="COUNT = "+count
   
}


function reset(){
    count=0;
    document.querySelector(".pa").innerText="COUNT = 0"
}




