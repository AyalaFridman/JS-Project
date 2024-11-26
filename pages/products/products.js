class Products{
    picture;
    name;
    price;
    sku;
    
    constructor(picture, name, price, sku){
        this.Picture = picture;
        this.Name = name;
        this.Price = price;
        this.Sku = sku;
    }

    rander(i){
    //הצהרה על דיב חדש והכנסתו לדיב האב
        const card=document.createElement("div");
        card.className="card col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xxs-12";
        card.id=`card${i}`;
        all_card.appendChild(card);


        document.querySelector(`#card${i}`).innerHTML +=`
        <img src="../../pic/${his_folder}/${this.Picture}.jpg" id="img_prod" class="${this.Sku}">
        <div id="name_price" class="${this.Sku}">
        <div id="nameId" class="${this.Sku}">${this.Name}</div>
        <div id="cart_price" class="${this.Sku}">
        <div id="price" class="${this.Sku}"><span class="woocommerce-Price-currencySymbol">₪</span>${this.Price}</div>
        <span id="cartId" class="${this.Sku}"><i aria-hidden="true" class="fas fa-cart-shopping"></i></span>
        </div></div>`
    }
}


// מקבלת שם של קטגוריה ומייצרת בוקס שהוא בן של פייג' בבוקס יש שם קטגוריה
//שהתקבל ופס ציבעוני
    const add_cart  = document.querySelector("#cartId");
    const category = sessionStorage.getItem("category");
    const his_folder=sessionStorage.getItem("his_name");
    const products = [];
    document.getElementById("page").innerHTML="";
    const box=document.createElement("div");
    box.id="box";
    page.appendChild(box);
    const name=document.createElement("div");
    name.id="name";
    box.appendChild(name);
    document.getElementById("name").innerHTML=" קטגוריה: "+category;
    //קו ציבעוני
    const colorKav=document.createElement("img");
    colorKav.id="colorKav";
    colorKav.src=`../../pic/${0}.png`;
    box.appendChild(colorKav);

    switch(category)
      {
        case "על השלחן במשרד":
            on_table();
            break;
        case "בקבוקים":
            bottle();
            break;
        case "מחברות":
            notebook();
            break;
        case "תחילת שנת הלימודים":
            begine_year();
            break;
        case "כוסות":
            cups();
            break;
        case "מטענים":
            charger();
            break;
        case "מטריות":
            umbrella();
            break;
        case "עטים":
            pen();
            break
        case "צידניות":
            picnicBox();
            break;
        case "תיקים":
            bags();
            break;
        case "מוצרי קיץ":
            summer();
            break;
        case "דיסק אונקי":
            onkey();
            break;
        case "אוזניות ורמקולים":
            headphones();
            break;
    } 
    //פונקציה הממיצרת את תצוגת המוצרים בדף המוצרים
    function on_table(){
        const names = [`מעמד לנייד`,`בית ממו`,`מעמד משרדי`, `לוח עבודה שבועי`,`מעמד שולחני`,`מעמד שולחני לדפי ממו`,`משטח לעכבר ומקלדת`,`עט יוקרתי`,`עט מתכת מעוצבת`,`עשישית פנס`,`פנקס טבעות`, `קובית ממו דמוי עור`];//מערך שמות
        const prices = [`12.80`,`11.90`,`14.00`, `13.00`,`14.00`,`12.80`,`14.80`,`8.50`,`2.20`,`16.00`,`13.00`,`10.50`];//מערך מחירים בהתאמה
        const sku = [`900`, `901`,`902`,`903`,`904`,`905`,`906`,`907`,`908`,`909`,`910`,`911`];//מערך מקטים בהתאמה
        show_object(names,prices, sku);
    }function notebook(){
        const names = [`בלוק נייר ממו`, `יומן קטן`,`יומן שבועי גדול`,`מחברת אלמנט`,`מחברת גוונים`, `מחברת דמוי עור`, `מחברת כריכה דמוי עור`,`מחברת כריכה קשה`,`מחברת ספירלה`, `מחברת עסקים גומי`,`מחברת שעם`,`מכתביה קורדורה עם טבעות`,`פנקס טבעות`];
        const prices = [`25.00`,`18.80`,`17.00`,`13.00`,`12.00`,`10.50`,`12.50`,`14.00`,`14.50`,`9.50`,`10.80`,`12.00`,`24.00`,`13.00`];
        const sku = [`100`,`101`,`102`,`103`,`104`,`105`,`106`,`107`,`108`,`109`,`110`,`111`,`112`,`113`];
        show_object(names,prices, sku);
    }function begine_year(){
        const names = [`אוזניות קשת`,`בקבוק חצי ליטר`,`בקבוק ליטר`,`יומן קטן`,`יומן שבועי גדול`,`כבל הטענה`,`מחברת גוונים`,`מכתבייה קורדורה`,`עט מתכת דגם ללי`,`עציץ חלוק נחל`,`קודי סוללת גיבוי`,`קופסת תכשיטים`,`קלמר`,`קלמר אלגנטי`,`רמקול`,`שרוך קצר לנייד`,`תיק מותן`, `תיקייה למסמכים` ];
        const prices = [`28.00`,`12.00`,`15.00`,`10.80`,`24.00`,`2.60`,`15.00`,`30.00`,`15.00`,`9.50`,`13.80`,`36.00`,`5.00`,`18.00`,`13.50`];
        const sku = [`200`,`201`,`202`,`203`,`204`,`205`,`206`,`207`,`208`,`209`,`210`,`211`,`212`,`213`,`214`,`215`,`216`,`217`];
        show_object(names,prices, sku);
    }function cups(){
        const names = [`כוס זכוכית`,`כוס טרמית במבוק`,`כוס טרמית מעוצבת`,`כוס טרמית מפלסטיק עם ידית`,`כוס טרמית עם ציפוי`,`כוס מאג`,`כוס שתיה מנירוסטה`,`ספל שעם`,`כוס שתיה קרה עם קש`,`כוס שתיה תרמית מנירוסטה`,`ספל בעיצוב רטרו`,`ספל קרמיקה`,`ספל שעם`,`שייקר`];
        const prices = [`7.90`,`24.00`,`15.90`,`14.00`,`13.50`,`7.50`,`25.00`,`12.80`,`12.50`,`21.50`,`8.90`,`8.90`,`18.00`,`9.00`];
        const sku = [`500`,`501`,`502`,`503`,`504`,`505`,`506`,`507`,`508`,`509`,`510`,`511`,`512`,`513`];
        show_object(names,prices, sku);
    }function charger(){
        const names = [`כבל הטענה`,`מטען נייד`,`מטען נייד פלוטו`,`מטען רב שימושי`,`מעמד לנייד`,`משטח הטענה`,`קודי סוללת גיבוי`];
        const prices = [`14.00`,`42.00`,`42.00`,`38.00`,`12.80`,`47.00`,`30.00`];
        const sku = [`700`,`701`,`702`,`703`,`704`,`705`,`706`];
        show_object(names,prices, sku);
    }function umbrella(){
        const names = [`מטריה`,`מטריה צבעונית`,`מטריית ילדים סיליקון`];
        const prices = [`23.00`,`10.50`,`12.50`];
        const sku = [`300`,`301`,`302`];
        show_object(names,prices, sku);
    }function pen(){
        const names = [`עט`,`עט אנג’ל`,`עט בשילוב במבוק`,`עט יוקרתי`,`עט מתכת`,`עט מתכת דגם ללי`,`עט מתכת מעוצבת`,`עט מתכת שחור זהב`];
        const prices = [`4.00`,`1.20`,`2.60`,`8.50`,`1.50`,`2.60`,`2.20`,`2.60`];
        const sku = [`600`,`601`,`602`,`603`,`604`,`605`,`606`,`607`];
        show_object(names,prices, sku);
    }function picnicBox(){
        const names = [`צידנית אוורסט`,`צידנית אוכל`,`צידנית ארטיק`,`צידנית לאנץ`,`צידנית מרסי`,`צידנית משפחתית עם פותחן בקבוקים`,`צידנית מתקפלת לנשיאה על גלגלים`,`צידנית מתקפלת לקלסר`];
        const prices = [`20.00`,`12.00`,`16.20`,`16.20`,`15.00`,`31.00`,`88.00`,`33.00`];
        const sku = [`400`,`401`,`402`,`403`,`404`,`405`,`406`,`407`];
        show_object(names,prices, sku);
    }function bags(){
        const names = [`ארנק אופנתי`,`ארנק לכרטיס אשראי וכסף`,`מזוודה`,`תיק 2 תאים`,`תיק איפור וטיפוח`,`תיק אלבד`,`תיק אלגנטי`,`תיק ג'ים`,`תיק כותנה ציבעוני`,`תיק כלי איפור וטיפוח`,`תיק כנסים מהודר`,`תיק מותן מחזיר אור`,`תיק צד`,`תיק צד מעוצב ושימושי`,`תיק קנווס`,`תיק קנווס עבה`,`תיק קניות או כנסים`,`תיק קניות מכותנה`,`תיק קניות מתקפל`];
        const prices = [`8.80`,`13.00`,`175.00`,`15.80`,`13.80`,`3.00`,`12.80`,`22.00`,`6.50`,`9.50`,`10.80`,`12.00`,`19.50`,`19.50`,`13.00`,`8.80`,`7.00`,`5.80`];
        const sku = [`940`,`941`,`942`,`943`,`944`,`945`,`946`,`947`,`948`,`949`,`950`,`951`,`952`,`953`,`954`,`955`,`956`,`957`,`958`,`959`];
        show_object(names,prices, sku);
    }function summer(){
        const names = [`מאוורר נטען`,`מגבת חוף פסים`,`מחצלת אישית`,`מכתביה קורדורה עם טבעות`,`ערסל`,`צידנית אוורסט`,`צידנית משפחתית עם פותחן בקבוקים`,`שמשיה לים`,`תיק ג’ים`,`תיק צד`,`תיק קנווס`,`תיק קנווס עבה`,`תרמו גארד בציפוי עץ/שיש`,`תרמו סטנד`];
        const prices = [`15.50`,`18.00`,`18.00`,`24.00`,`42.00`,`20.00`,`16.20`,`16.20`,`15.00`,`15.00`,`31.00`,`25.00`,`22.00`,`12.00`,`19.50`,`13.00`,`25.00`,`22.00`,];
        const sku = [`800`,`801`,`802`,`803`,`804`,`805`,`806`,`807`,`808`,`809`,`810`,`811`,`812`,`813`,`814`,`815`,`816`];
        show_object(names,prices, sku);
        //אוןקי 
    }function onkey(){
        const names = [`און קי איכותי`,`און קי אשראי`,`עט און קי`];
        const prices = [``,``,``,``,``,``,``,``,``,``,``,``,``,];
        const sku = [``,``,``,``,``,``,``,``,``,``,];
        show_object(names,prices, sku);
    }function headphones(){
        const names = [];
        const prices = [];
        const sku = [];
        show_object(names,prices, sku);
    }function bottle(){
        const names = [];
        const prices = [];
        const sku = [];
        show_object(names,prices, sku);
    }
    function show_object(names, prices, sku){
        sessionStorage.setItem("names_array", JSON.stringify(names));
        sessionStorage.setItem("prices_array", JSON.stringify(prices));
        sessionStorage.setItem("sku_array", JSON.stringify(sku));
    }

    
    const names = JSON.parse(sessionStorage.getItem("names_array"));
    const prices =JSON.parse(sessionStorage.getItem("prices_array"));
    const sku = JSON.parse(sessionStorage.getItem("sku_array"));

    //הצהרה על אובייקט אב בתוך 'בוקס' ו
        const all_card=document.createElement("div");
        all_card.id="all_card";
        // all_card.className="jet-listing-grid__items grid-col-desk-4 grid-col-tablet-4 grid-col-mobile-1 jet-listing-grid--20548 jet-equal-columns__wrapper"
        box.appendChild(all_card);
    //הצהרה על מערך אובייקטי מוצר
    // הלולאה ממלאת מערך באובייקטי מוצרים ע"י בנאי ממחלקת מוצרים 
    //הלולאה מייצרת את תצוגת הכרטיסים
        for (let i = 0; i< sku.length; i++) {
            let product = new Products( i, names[i], prices[i], sku[i]);
            products.push(product);
            products[i].rander( i);
        }

    const pic_array = document.querySelectorAll("#img_prod");
    console.log(pic_array);

    const name_array = document.querySelectorAll(".name");
    console.log(name_array);

    const cart_array = document.querySelectorAll("#cartId");
    console.log(cart_array);

    pic_array.forEach(pic => {
        let temp;
        products.forEach(prod => {
            if (prod.Sku == pic.className) {
                temp = JSON.stringify(prod);
            }
        });
        pic.onclick=(event)=>{
            sessionStorage.setItem("currentProduct",temp);
            sessionStorage.setItem("his_folder", his_folder);
             window.location="../ProdDetail/ProdDetail.html";
          } 
    });
    

    cart_array.forEach(cart => {
        let temp;
        //מוצא את אובייקט האב
        products.forEach(prod => {
            if (prod.Sku == cart.className) {
                temp = JSON.stringify(prod);
                // console.log(temp);
            }
        });
        //אח"כ יוצר אירוע אוןקליק שמכניס את אובייקט האב לסיישן ןטוען את דף הסל.
        cart.onclick=(event)=>{
            if(!sessionStorage.getItem("name")){
                alert(`  
                לא ניתן להוסיף מוצרים לסל ללא התחברות`)
            }
            else{
            // sessionStorage.setItem("add prod to cart",temp);
            let name=sessionStorage.getItem("name");
            sessionStorage.setItem("his_folder", his_folder);
            if(!localStorage.getItem(`cart${name}`)){
                let row_table = []; 
                localStorage.setItem(`cart${name}`, JSON.stringify(row_table));} 
                let product= JSON.parse(temp);
                let cart= JSON.parse(localStorage.getItem(`cart${name}`));             
                row_table = JSON.parse(localStorage.getItem(`cart${name}`));                    //העלת המערך מהלוקאל
                let id = row_table.length;
                const new_row ={
                price:`${product.Price}`,
                sku:`${product.Sku}`,                                                           //הקצאת שורה חדשה לאובייקט
                id:`${id}`,
                html:`      
             <tr id="row${id}" class="place" >
             <td id="${id}" class="product-remove" data-title="להסיר פריט"><span class="elementor-icon-list-icon"><i aria-hidden="true" class="fas fa-trash"></i></span>
             </td>
             <td id="${id}" class="screen-reader-text" data-title="תמונה ממוזערת"><span><img src="../../pic/${his_folder}/${product.Picture}.jpg" id="min_img"></span></td>
             <td id="${id}" class="product-name" data-title="מוצר">${product.Name}</td>
             <td id="${id}" class="product-price" data-title="מחיר">${product.Price}</td>
             <td id="${id}" class="product-quantity input-text qty text" data-title="כמות">
             <div id="${id}" class="quantity">
             <input type="number" id="amount${product.Sku}" class="number" value="1" aria-label="כמות המוצר" size="3" min="0" max="10" step="1" autocomplete="off">
             <td id="product-subtotal${id}" class="product-subtotal" data-title="סכום ביניים"></td>
             </div>
             </td>
             
             </tr>
                `};
                cart.push(new_row);
                localStorage.setItem(`cart${name}`, JSON.stringify(cart));              //מעלים את המערך ללוקל בJSON
            }
            //  location.href = "../cart/cart.html";
          } 
    });
    