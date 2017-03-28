var data=new XMLHttpRequest();
data.open('GET','http://inqstatsapi.inqubu.com?api_key=6cd4360d0654f92b&data=debts&countries=us,gb');


data.onload=function(){
 data=JSON.parse(data.responseText);
 
 
for(var j=0;j<data[0].debts[0].year.length+1;j++){
   var b= document.createElement('p');
   var c=data[0].debts[j].year;
  b.innerHTML=c;
   document.body.appendChild(b);
    // console.log(data[0].debts[j].year);  
  //document.getElementById('data')//.innerHTML=data[0].debts[j].year;
  //console.log(data[0].debts.length);
 
}

};
data.send();