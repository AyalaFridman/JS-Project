// function value(){                                        
// console.log(quantity.value);
//     }
let row_table = [];                                                             //הקצאת מערך לכל השורות
let product=JSON.parse(sessionStorage.getItem("add prod to cart"));             //העלת אובייקט מוצר
let num;
const his_folder=sessionStorage.getItem("his_folder");                          //העלת שם תקיית תמונות
const page_cart=document.getElementById("tbody");                               // העלת גוף הטבלה למשתנה 
// if(sessionStorage.getItem("his_folder")){                                       //כשיש אובייקט מוצר חדש
//    sessionStorage.removeItem("his_folder");                                     //מוחקים בשביל שייכנס לקטע זה רק פעם אחת
//    if(!localStorage.getItem("all cart"))                                        //  - בפעם הראשונה כשמפתח של המערך לא נמצא בלוקל 
//       localStorage.setItem("all cart", JSON.stringify(row_table));              //מעלים את המערך ללוקל בJSON
//    row_table = JSON.parse(localStorage.getItem("all cart"));                    //העלת המערך מהלוקאל
//    let id = row_table.length;
//    const new_row ={
//    price:`${product.Price}`,
//    sku:`${product.Sku}`,                                                           //הקצאת שורה חדשה לאובייקט
//    id:`${id}`,
//    html:`      
// <tr id="row${id}" class="place" >
// <td id="${id}" class="product-remove" data-title="להסיר פריט"><span class="elementor-icon-list-icon"><i aria-hidden="true" class="fas fa-trash"></i></span>
// </td>
// <td id="${id}" class="screen-reader-text" data-title="תמונה ממוזערת"><span><img src="../../pic/${his_folder}/${product.Picture}.jpg" id="min_img"></span></td>
// <td id="${id}" class="product-name" data-title="מוצר">${product.Name}</td>
// <td id="${id}" class="product-price" data-title="מחיר">${product.Price}</td>
// <td id="${id}" class="product-quantity input-text qty text" data-title="כמות">
// <div id="${id}" class="quantity">
// <input type="number" id="amount${product.Sku}" class="number" value="1" aria-label="כמות המוצר" size="3" min="0" max="10" step="1" autocomplete="off">
// <td id="product-subtotal${id}" class="product-subtotal" data-title="סכום ביניים">${product.price}</td>
// </div>
// </td>

// </tr>
//    `};
//    row_table.push(new_row);                                                     //דחיפה למערך
//    localStorage.setItem("all cart", JSON.stringify(row_table));                 //השמה בלוקאל
// }
let name =sessionStorage.getItem("name");
if(localStorage.getItem(`cart${name}`)){                                           //אם המערך קיים בלוקל

    row_table = JSON.parse(localStorage.getItem(`cart${name}`));                       //הַעַלַת המערך מהלוֹקַאל
    document.querySelector("thead").innerHTML = `
                    <tr>
                        <th class="product-remove"></th>
                        <th class="screen-reader-text"><span></span></th>
                        <th class="product-name">מוצר</th>
                        <th class="product-price">מחיר</th>
                        <th class="product-quantity">כמות</th>
                        <th class="product-subtotal">סכום ביניים</th>
                    </tr>
    `;      
    row_table.forEach(row => {                                                      //שַם שוּרה, שורה
        // num = document.getElementById(`amount${row.sku}`);
        row.html+=``
        localStorage.setItem(`cart${name}`, JSON.stringify(row_table));              //מעלים את המערך ללוקל בJSON
    });                                                                       //שַם כותרת
    row_table.forEach(row => {                                                      //שַם שוּרה, שורה
    page_cart.innerHTML += row.html;                                          //הכנסה לטבלה
    console.log(row.sku);
    // num.onchange = function (){changevalue(`${row.id}`,row.price,num.value)};
});
    localStorage.setItem(`cart${name}`, JSON.stringify(row_table));              //מעלים את המערך ללוקל בJSON
    console.log(row_table);
    const bth = document.createElement("button");                                   //הקצאת כפתור חדש למחיקת כל הסל
    const div = document.querySelector("#container-cart");                                     
    div.appendChild(bth);
    bth.id = "all_delete";
    bth.innerHTML = "למחיקת המוצרים מהסל"; 
    const bth1 = document.createElement("button");                                              
    div.appendChild(bth1);
    bth1.id = "payment";
    bth1.innerHTML =  "למעבר לתשלום";
}
    onloud();
    all_delete.onclick=(event)=>{                                                //אירוע אונקליק על מחיקת כל הסל
        localStorage.removeItem(`cart${name}`);                                        //מחיקת הסל מהלוקל
        document.querySelector("#container-cart").innerHTML = "אין מוצרים בסל";    //הודעה למשתמש
    };
    function onloud(){
    const all_delete = document.querySelector("#all_delete");             
    const trash_delete = document.querySelectorAll(".product-remove"); 
    trash_delete.forEach(trash => {                                                  //הוספת אירועי מחיקת מוצר מהסל לכל אחד מהמוצרים
        let ind;                                                                     //הצהרה על משתנה
        row_table.forEach((row, index) =>{                                           //חיפוש אובייקט הנוכחי
            if(row.id === trash.id){                                                 //אם האיידי של האוביקט הנוכחי והאובייקט שבעבורו מחפשים  
                ind = index;                                                         //תשמור את האינדקס כיזה האינדקס של האובייקט במערך
            }
        });
        trash.onclick=(event)=>{                                                     //הוספת האירוע
            row_table.splice(ind,1);                                                 //מחיקה מהמערך
            localStorage.setItem(`cart${name}`, JSON.stringify(row_table));             //השמה בלוקאל
            page_cart.innerHTML = "";                                                //ריקון הבלה בשביל להחזיר מחדש את המערך העדכני
            if(row_table.length>0){                                                  //אם נותרו איברים במערך
                row_table.forEach(row => {                                           //הוספת השורות שנותרו
                    page_cart.innerHTML += row.html;                                 //הכנסה לטבלה
                }); 
            }
            else{
                localStorage.removeItem(`cart${name}`);                                        //מחיקת הסל מהלוקל
                document.querySelector("#container-cart").innerHTML = "אין מוצרים בסל";    //הודעה למשתמש
            }
                onloud();
        }
    });
    }
    function changevalue(id, price , number){
        const num_row = document.getElementById(`row${id}`);
        const total = document.getElementById(`product-subtotal${id}`);
        // total= `<td id="product-subtotal${id}" class="product-subtotal" data-title="סכום ביניים">${price*number}</td>`;
        num_row.appendChild(total);
        total.innerHTML=price*number
        console.log(row_table);
    }