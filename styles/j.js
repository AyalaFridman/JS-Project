const li1=document.getElementById("li1");
const li3=document.getElementById("li3");
const li4=document.getElementById("li4");
const li5=document.getElementById("li5");
const li6=document.getElementById("li6");
const li8=document.getElementById("li8");
const li9=document.getElementById("li9");
const li10=document.getElementById("li10");
const li11=document.getElementById("li11");


li1.onclick=(event)=>{
  sessionStorage.setItem("category","על השלחן במשרד");
  sessionStorage.setItem("his_name","on-table"); 
   window.location="../products/products.html";

} 

 li3.onclick=(event)=>{
   sessionStorage.setItem("category","מחברות");
   sessionStorage.setItem("his_name","notebook"); 
    window.location="../products/products.html";
 
 } 

  li4.onclick=(event)=>{
    sessionStorage.setItem("category","תחילת שנת הלימודים");
    sessionStorage.setItem("his_name","beginningYear"); 
     window.location="../products/products.html";
  
  } 
  li5.onclick=(event)=>{
    sessionStorage.setItem("category","כוסות");
    sessionStorage.setItem("his_name","cups"); 
     window.location="../products/products.html";
  
  } 
  li6.onclick=(event)=>{
    sessionStorage.setItem("category","מטענים");
    sessionStorage.setItem("his_name","load"); 
     window.location="../products/products.html";
  
  } 
  li8.onclick=(event)=>{
    sessionStorage.setItem("category","עטים");
    sessionStorage.setItem("his_name","pen"); 
     window.location="../products/products.html";
  
  }
  li9.onclick=(event)=>{
    sessionStorage.setItem("category","צידניות");
    sessionStorage.setItem("his_name","picnicBox"); 
     window.location="../products/products.html";
  
  }
  li10.onclick=(event)=>{
    sessionStorage.setItem("category","תיקים");
    sessionStorage.setItem("his_name","bags"); 
     window.location="../products/products.html";
  }
  li11.onclick=(event)=>{
    sessionStorage.setItem("category","מוצרי קיץ");
    sessionStorage.setItem("his_name","prod_summer"); 
     window.location="../products/products.html";
  
  }
// התחברות!!
const contection_box=document.getElementById("contection_box");
const sub_contection=document.getElementById("sub_contection");
// מערך של כל הלקוחות השמורים במערך
let customers=[{
   name:"אילה",
   email:"a0556702870@gmail.com",
}
];
let customer_name="";
let customer_email="";
let xx   ;
if(sessionStorage.getItem("email")==null){
   name_nav=``;
}
else{
   name_nav=JSON.parse(sessionStorage.getItem("name"));
}
sub_contection.innerHTML=`${name_nav}<i class="fa-solid fa-user"></i>`;

let new_u=0;
//פותח את החלונית הראשונה שבה יש מקום לכתוב את המייל ולהתחבר
sub_contection.onclick = (event)=>
{
   contection_box.style.display = "block";
 contection_box.innerHTML =
`<div id="myOverlay" class="overlay">
<span class="closebtn" onclick="closeSearch()" title="Close Overlay">×</span>
<div class="overlay-content" id="myoverlay-content">
 <form action="" id="form_contection">
  <label for="myEmail">הכנס כתובת מייל</label>
  <input type="email" class="filed_text" id="myEmail" name="myEmail" placeholder="@" required>
  <button type="submit" id="submit" onclick="conected()">להתחברות</button>
 </form>
</div>
</div>  
 `
}
// הפונקציה של ההתחברות
function conected(){
   if(localStorage.getItem("customers")){
      customers=JSON.parse(localStorage.getItem("customers"));
   }
   customer_email=document.getElementById("myEmail");
   let flag=0;
   let place;
   // פור שבודק האם המייל כבר מוכר במערכת
   for(let i=0;i<customers.length;i++){
      if(customer_email.value==customers[i].email){
         flag=1;
         place=i;
         break;
      }
   }
   // אם המייל לא מוכר נפתחת חלונית של התחברות
   if(flag==0){
      let overlay_content = document.getElementById("myoverlay-content");
      overlay_content.innerHTML =
      `
      <form action="" id="form_contection"x>

         <div id="alert">ניכר שאתה משתמש חדש במערכת, הכנס כמשתמש חדש</div>
         <div class="form-group">
         <label for="filed_text">הכנס כתובת מייל</label>
          <input type="email" class="filed_text form-control" id="myEmail" name="user-mail" required value="${customer_email.value}">
          </div>
          <div class="form-group">
          <label for="filed_text">הכנס את שמך</label>
          <input type="text" class="filed_text form-control" name="user_name" id="myName" required> 
          </div>
          <div class="checkbox">
          <label><input type="checkbox" name="remember"> Remember me</label>
          </div>
          <button type="submit" class="filed_text btn btn-default" id="submit">להתחברות</button>
      </form>
      `;
      // כשלוחצים על התחברות הפרטים נכנסים למערך וללוקאל 
      const bsubmit=document.getElementById("submit");
      bsubmit.onclick=(event=>{
         customer_email=document.getElementById("myEmail");
         customer_name=document.getElementById("myName");
         customers.push({name:customer_name.value,email:customer_email.value});
         localStorage.setItem("customers",JSON.stringify(customers));
         contection_box.innerHTML="";
         const sub_contection=document.getElementById("sub_contection");
         sub_contection.innerHTML=`
         ${customer_name.value}<i class="fa-solid fa-user"></i>`
      })

   }
   // אם המייל כבר מוכר אז נכתב למעלה השם של המשתמש
   else{
      contection_box.innerHTML="";
      sub_contection.innerHTML=`
      ${customers[place].name}<i class="fa-solid fa-user"></i>`
       sessionStorage.setItem("email",JSON.stringify(customers[place].email));
       sessionStorage.setItem("name",JSON.stringify(customers[place].name));
   }
}

function closeSearch() {
   // contection_box.innerHTML = '';
   contection_box.style.display = "none";

}