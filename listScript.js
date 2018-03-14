//Create new item upon pressing "Enter" keys
document.body.onkeyup = function(e){
	if(e.keyCode == 13){
		newItem();
	}
}
//Create a "close" button and append it to each list item
var closeBtn = document.getElementsByTagName('LI');
var i; 
for( i = 0; i < closeBtn.length; i++){
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	closeBtn[i].appendChild(span);
}

//Click on close button to hide selected list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

//Change background color when item is clicked to show completed 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI'){
		ev.target.classList.toggle('completed');
	}
}, false);

//Create new item & add Close button when clicking on "Add" button
function newItem(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("input").value; 
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	
	if (inputValue !== ''){
    document.getElementById("list").appendChild(li);
	}

	document.getElementById("input").value = "";
	
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	
	for (i = 0; i < close.length; i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}