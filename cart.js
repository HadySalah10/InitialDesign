
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