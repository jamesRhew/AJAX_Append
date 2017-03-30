var data=new XMLHttpRequest();
data.open('GET','http://inqstatsapi.inqubu.com?api_key=6cd4360d0654f92b&data=debts&countries=us,gb');


data.onload=function(){
 data=JSON.parse(data.responseText);
 
 
for(var j=0;j<data[0].debts[0].year.length+1;j++){
   var b= document.createElement('p');
   var c=data[0].debts[j].year;
  b.innerHTML=c;
   document.getElementById("inside-data").appendChild(b);

   
}

for(var i=0;i<data[0].debts[0].data.length;i++){
    var hold=document.createElement('p');
   hold.setAttribute("id","p2");
    var yrs=data[0].debts[i].data;
    hold.innerHTML=yrs;
     document.getElementById('inside').appendChild(hold);
   
    
}

};
data.send();