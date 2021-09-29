var sum=0;
function increment(id){
    var input =document.getElementById(id);
    var vlaueToIcrease=parseInt( input.value);
  vlaueToIcrease++;
  input.value=vlaueToIcrease;
  calcTotal(vlaueToIcrease,id)

  }
  function dicrement(id){
    var input =document.getElementById(id);
    var vlaueToDicrease=parseInt( input.value);
  vlaueToDicrease--;
  if(vlaueToDicrease<0){
    vlaueToDicrease=0;
  }
  input.value=vlaueToDicrease;
  calcTotal(vlaueToDicrease,id)

  }
  function calcTotal(val,id){
    id = id.replace("moveInput", "");
    idPrice="idPrice"+id;
    valueIdPrice=parseFloat(document.getElementById(idPrice).innerText);
    valueIdTotal= document.getElementById("idTotal"+id);
    valueIdTotal.innerText=val*valueIdPrice;
    totalAmount();

  }
  function totalAmount(){
    var oRows = document.getElementById('myTable').getElementsByTagName('tr');
    var iRowCount = oRows.length-1;
    var tot=0;
    for (let index = 1; index <= iRowCount; index++) {
        var totVal=parseFloat(document.getElementById("idTotal"+index).innerText);
        tot+=totVal; 
        
    }
    valueIdTotal= document.getElementById('totalAmount');
    valueIdTotal.innerText=tot;
  }



  function sendToCartNvar(idImg,idSalary,idNamePart){
      var img=document.getElementById(idImg);
      var salary =document.getElementById(idSalary);
      var NamePart=document.getElementById(idNamePart);

      var cartDiv=document.getElementById('divCart');
      var totalCourt=document.getElementById('totalCourt');
      sum+=parseFloat(salary.innerText);
      
      cartDiv.innerHTML+=" \x3Cdiv style ='margin-top:-10px;'>\x3Cimg src='"+img.src+"' style ='width:60px;height:60px;' alt='car engine'>\x3Cdiv style ='display:inline-block;'>\x3Cspan  style ='font-weight:bold; display:inline-block ; margin-bottom:-20px' >"+NamePart.innerText+"\x3C/span>\x3Ci style ='float:right; margin-left: 20px; margin-top: 5px;' class='fa fa-window-close'>\x3C/i>\x3Cp style ='color:gray; '>price:$"+salary.innerText+" \x3Cbr> \x3C/p> \x3C/div>     \x3C/div> \x3Chr> \x3Cbr> ";
      totalCourt.innerText=sum;

  }