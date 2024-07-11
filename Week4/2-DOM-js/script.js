var istat=document.querySelector("h5")
 var addFriend= document.querySelector("#add")
 var check=0;
 
 addEventListener("click", function(){
    if(check==0){
        istat.innerHTML = "Friends"
        istat.style.color = "green"
        check=1;
    }else{
        istat.innerHTML = "No Friends"
        istat.style.color = "red"
        check=0;
    }
 })
// var remove= document.querySelector("#remove") 
//  addFriend.addEventListener("click", function(){
//     istat.innerHTML = "Friends"
//     istat.style.color = "green"

//  }) 
//  remove.addEventListener("click", function(){
//     istat.innerHTML = "No Friends"
//     istat.style.color = "red "

//  }) 