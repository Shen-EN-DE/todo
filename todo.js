const items = document.querySelectorAll(".item");  //class使用 .item，如果是ID使用 #item
console.log(items)

items[0].addEventListener('click',() =>{
	alert("list one!")
})