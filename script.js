function firstChar(text) {
  let str=""
	for(let i=0;i<text.length;i++){
	  if(text.charAt(i)!=" ")
		  return text.charAt(i)
  }
	return str
}

// Do not change the code below

// const text = prompt("Enter text:");
alert(firstChar(text));
