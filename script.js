 const bold=document.querySelectAll("strong")
function highlight() {
	bold.forEach((word)=>{
    word.style.color="green"
	})
   


}


function return_normal() {
	bold.forEach((word)=>{
    word.style.color="black"
	})
   
    
}
