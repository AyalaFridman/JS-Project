const my_prod = JSON.parse(sessionStorage.getItem("currentProduct"));
const his_folder=sessionStorage.getItem("his_folder");
console.log(my_prod);
const paper=document.getElementById("paper");
paper.innerHTML=`
<h1 id="titele">${my_prod.Name}</h1>
<img src="../../pic/${0}.png" id="colorKav">
<img src="../../pic/${his_folder}/${my_prod.Picture}.jpg" >
<div class="paper_detials" id="sku">${my_prod.Sku}:מקט</div>
<div class="paper_detials" id="price" >₪${my_prod.Price}</div>
<div class="paper_detials" id="text">המחיר אינו כולל מע"מ</div>
<div id="color">
<select value="בחר צבע"   onchange="changeColor()">בחר צבע
<option value="yellow">צהוב</option>
<option value="turquoise">טורקיז</option> 
<option value="red">אדום</option>
<option value="green">ירוק</option>
<option value="white">לבן</option>
</select>
<span>:בחר צבע</span>
<button id="add_cart">הוספה לסל</button>
</div>
<div id="afterChange"></div>
`
const button_add_cart=document.getElementById("add_cart");
button_add_cart.id="button_add_cart";
const temp=JSON.stringify(my_prod);

button_add_cart.onclick=(event)=>{
    sessionStorage.setItem("add prod to cart",temp);
    sessionStorage.setItem("his_folder", his_folder);
     window.location="../cart/cart.html";
}

function changeColor() {
    let x = document.querySelector("select").value;
    document.getElementById("afterChange").innerHTML = "בחרת צבע: " + x;
    const C = document.querySelector("#afterChange");
    C.style.backgroundColor = x;
  }


