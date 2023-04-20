function getFormvalue() {
    //Write your code here
    let str = document.querySelectorAll("input");
	console.log(str);
	let s=str[0].value+" "+str[1].value;
	alert(s);
}
