

//function  for increase decrease
function handle(id,price,isIncreasing){
    const caseInput=document.getElementById(id+"-count");
    
    let caseNewCount=caseInput.value;
    
    if (isIncreasing==true){
        caseNewCount=parseInt(caseNewCount)+1;
    }
    else if(isIncreasing==false){
        caseNewCount=parseInt(caseNewCount)-1;
    }
    caseInput.value=caseNewCount;

   
    const productTotal=document.getElementById(id+"-total");
   

    productTotal.innerText="$"+(caseNewCount*price);

    calculateTotal();


}   



function getInputValue(product){
    const productInput=document.getElementById(product+"-count");
    const productNumber=parseInt(productInput.value);
    return productNumber;
}


function calculateTotal(){
    const phoneTotal=getInputValue("phone")*245;
    const caseTotal=getInputValue("case")*59;
    const subTotal=phoneTotal+caseTotal;
    const Tax=subTotal/10;
    const total=subTotal+Tax;

    document.getElementById("sub-total").innerText="$"+subTotal;
    document.getElementById("tax").innerText="$"+Tax;
    document.getElementById("total").innerText="$"+total;


}





//handle case increase decrease events
document.getElementById("case-increase").addEventListener("click",function(){
    handle("case",59,true);
   

});

document.getElementById("case-decrease").addEventListener("click",function(){
    handle("case",59,false);
});

   
//handle phone increase decrease events
document.getElementById("phone-increase").addEventListener("click",function(){
    handle("phone",245,true);
   

});

document.getElementById("phone-decrease").addEventListener("click",function(){
    handle("phone",245,false);
});


//inputRemoving
function removeInput(id){
    document.getElementById(id+"-count").value=0;
    document.getElementById(id+"-total").innerText="$"+0;
    // document.getElementById(id).innerText=0;
    // document.getElementById(id).innerText="$"+0;
    // document.getElementById(id).innerText="$"+0;


}


document.getElementById("mv-out").addEventListener("click",function(){
    removeInput("case");
    
    // removeInput("sub-total");
    // removeInput("tax");
    // removeInput("total");

});

document.getElementById("rmv-out").addEventListener("click",function(){
    removeInput("phone");
   
    // removeInput("sub-total");
    // removeInput("tax");
    // removeInput("total");
    

});


document.getElementById("rmv-out").addEventListener("click",function(){
    document.getElementById("sub-total").innerText="$"+0;
});
document.getElementById("rmv-out").addEventListener("click",function(){
    document.getElementById("tax").innerText="$"+0;
});
document.getElementById("rmv-out").addEventListener("click",function(){
    document.getElementById("total").innerText="$"+0;
});
document.getElementById("mv-out").addEventListener("click",function(){
    document.getElementById("sub-total").innerText="$"+0;
});
document.getElementById("mv-out").addEventListener("click",function(){
    document.getElementById("tax").innerText="$"+0;
});
document.getElementById("mv-out").addEventListener("click",function(){
    document.getElementById("total").innerText="$"+0;
});

   


