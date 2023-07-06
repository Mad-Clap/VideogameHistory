function dia_1(){
  var data = new Date()
  var dia = data.getDate()
  if(dia==1){
    document.getElementById('ul1').style.backgroundColor = "darkblue";
    document.getElementById('footer').style.backgroundColor = "darkblue";
    document.body.style.borderColor ="darkblue";
    var x = document.getElementsByClassName('flex-container1').length;
    for(i=0; i< x; i++){
      document.getElementsByClassName('flex-container1')[i].style.backgroundColor = "darkblue";
    }
    var y = document.getElementsByClassName('texto_central').length;
    for(i=0; i< y; i++){
      document.getElementsByClassName('texto_central')[i].style.borderColor = "darkblue";
    }

    var x= document.getElementsByTagName('main').length;
    for(i=0;i<x;i++){
      document.getElementsByTagName('main')[i].style.borderColor ="darkblue";
    }
    var z= document.getElementsByTagName('table').length;
    for(i=0;i<z;i++){
      document.getElementsByTagName('table')[i].style.borderColor ="darkblue";
    }
    var a= document.getElementsByTagName('tr').length;
    for(i=0;i<a;i++){
      document.getElementsByTagName('tr')[i].style.borderColor ="darkblue";
    }
    var b= document.getElementsByTagName('td').length;
    for(i=0;i<b;i++){
      document.getElementsByTagName('td')[i].style.borderColor ="darkblue";
    }
    var c= document.getElementsByTagName('th').length;
    for(i=0;i<c;i++){
      document.getElementsByTagName('th')[i].style.backgroundColor ="darkblue";
      document.getElementsByTagName('th')[i].style.borderColor ="darkblue";
    }

    var d = document.getElementsByClassName('caixa_quiz').length;
    for(i=0; i< d; i++){
      document.getElementsByClassName('caixa_quiz')[i].style.borderColor = "darkblue";
      document.getElementsByClassName('caixa_quiz')[i].style.borderLeftColor = "gold";
    }
    var pgf = document.createElement("p");
    pgf.innerText = "Primeiro dia do mês!";
    document.getElementById("tagsth").appendChild(pgf);

  }
}

function evento(){
  var dia_fixo = 11;
  var mes_fixo=9;
  var data = new Date();
  var dia= data.getDate();
  var mes= data.getMonth()+1;
  var tempo = 0;

  for (i=mes;i<=mes_fixo;i++){
    if(i==2){
      var year = data.getFullYear()
      if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) tempo +=29;
      else tempo+=28;
      
    }else if((i < 7 && i % 2 == 0) || (i > 8 &&i % 2 != 0)){
        tempo+=30;
    } else tempo+=31;
  }
  var d= dia_fixo - dia;
  tempo = tempo + d;

  var dias = document.getElementById('dias');
  var bgs = document.getElementById('passou');

  if((dia==dia_fixo || dia==dia_fixo+1 || dia==dia_fixo+2 || dia==dia_fixo+3 || dia==dia_fixo+4) && mes==mes_fixo){
    
    bgs.textContent = "A Brasil Game Show está rolando!";
    
  } else if(dia>dia_fixo && mes>=mes_fixo){

    bgs.textContent = "A Brasil Game Show já acabou!";
    

  }
  else {
      if(tempo==1){
        bgs.textContent = "Falta 1 dia para a Brasil Game Show!";
      } else dias.innerText = tempo;
    }

}
