let callAjax =function(){
    let a = new XMLHttpRequest();
    a.open("GET","https://fakerestapi.azurewebsites.net/api/Authors");
    a.onload=()=>{
      const b=json.parse(a.responseText);
        jsonDomOperation(b);
    };
    a.send();
}


let jsonDomOperation=function(b){console.log(b);
  let parent=  document.querySelector("#parent");
  for(let i=0;i<b.length;i++)
  let newEle= parent.children[0].cloneNode(true);
  newEle.innerHTML=item.FirstName+"  "+item.LastName;
parent.insertBefore(newEle,parent.firstChild);





}