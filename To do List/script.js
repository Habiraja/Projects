let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    let value = input.value.trim();
    console.log(value);
    if(value){
        let li = document.createElement("li");
       
        li.textContent = value;
    
        li.addEventListener("click",  () => li.remove());
        list.append(li);
        input.value ="";
    }
})
