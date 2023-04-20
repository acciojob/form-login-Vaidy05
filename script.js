function getFormvalue() {
    //Write your code here
    let str = document.querySelectorAll("input");
	console.log(str);
	let s="";
	for(let i=0;i<2;i++){
		s=s+str[i].value+" ";
	}
	alert(s);
}
