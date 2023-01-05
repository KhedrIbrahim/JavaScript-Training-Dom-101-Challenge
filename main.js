// ******* Start Header *******
// Create Elements
let header = document.createElement("header");
let div = document.createElement("div");
let ul = document.createElement("ul");
let li = document.createElement("li");
//Create Text
let txtElzero = document.createTextNode("Elzero"); //Elzero
let txtHome = document.createTextNode("Home"); //Home
let txtAbout = document.createTextNode("About"); //About
let txtService = document.createTextNode("Service"); //Service
let txtContact = document.createTextNode("Contact"); //Contact
//Get Elements

//Add header to body
document.body.appendChild(header);
//Create Logo
div.appendChild(txtElzero);
header.prepend(div);

//Create Li Indide Ul in header
for (let i=0; i<4 ; i++){
    let li = document.createElement("li");
    header.append(ul);
    ul.append(li);
    let lisHeadr = document.querySelectorAll("header ul li");
    lisHeadr[i].style.cssText = "width: 70px; list-style-type: none; height: 40px; text-align: center; line-height: 40px; border: 1.5px solid #898989; padding:2px; border-radius: 4px; color:#898989; font-weight: 600;";
}
let lisHeadr = document.querySelectorAll("header ul li");
lisHeadr[0].appendChild(txtHome);
lisHeadr[1].appendChild(txtAbout);
lisHeadr[2].appendChild(txtService);
lisHeadr[3].appendChild(txtContact);

//Style Header
let headerBox = document.querySelector("body header")
let logoDiv = document.querySelector("header div");
let ulHeader = document.querySelector("header ul");

document.body.style.cssText = "margin: 0px; font-family: Arial, Helvetica, sans-serif;";
headerBox.style.cssText = "width: 100%;height: 80px;box-sizing: border-box; padding:10px;display:flex; flex-flow: row nowrap; padding:15px 100px;     justify-content: space-between; ; overflow: hidden; background-color: #ffffff";
ulHeader.style.cssText = "width: 350px; height: 50px; margin: 0px; display:flex; flex-flow: row nowrap; justify-content:space-between;; align-items: center;";
logoDiv.style.cssText = "width: 150px; height:50px; text-align:center; line-height: 50px; font-size: 35px; font-weight: 800; color: #20ac76;";

// Add Class Name to Elements of header 
header.setAttribute("class","website-head");
logoDiv.setAttribute("class", "logo");
ulHeader.setAttribute("class","menu");

// ******* End Header *******
// ******* Start Content *******

let divCreTwo = document.createElement("div");

header.after(divCreTwo);
let divContiner = document.getElementsByTagName("div")[1];
divContiner.setAttribute("class", "content")
divContiner.style.cssText= "width: 100; height: calc(100vh - 200px); display: flex; flex-flow: row wrap; gap: 20px; padding: 20px ;background-color:#ececec";


for (let i=0; i<15; i++){
    //Create Product Div
    let divProcuct = document.createElement("div");
    divContiner.appendChild(divProcuct);
    let txtProduct = document.createTextNode("Product");
    divProcuct.appendChild(txtProduct);
    divProcuct.setAttribute("class","product")
    
    //Create Span With Count Number Od Product
    let spanNumProduct = document.createElement("span");
    let txtSpanNum = document.createTextNode(`${i+1}`);
    spanNumProduct.appendChild(txtSpanNum);
    divProcuct.prepend(spanNumProduct);
    spanNumProduct.style.cssText= "margin-bottom: 10px; font-size: 30px; font-weight: bold; color:black; ";
    
    
    //Style Product Boxs
    let myDivProduct = document.querySelectorAll(".product");
    myDivProduct[i].style.cssText = "width: calc((100% - 40px)/3); display: flex;flex-flow: column nowrap; justify-content: center; align-items: center; border-radius: 5px;background-color: #ffffff; color:#898989;";
}
// ******* End Content *******
// ******* Start Footer *******

let divFooter = document.createElement("div");
divContiner.after(divFooter);
let txtFooter = document.createTextNode("Copyright 2022");
divFooter.appendChild(txtFooter);

//Style Footer
divFooter.style.cssText= "height: 80px; text-align:center; line-height: 80px; font-size: 28px; font-weight: 600;background-color: #20ac76; color: white;";

// ******* End Footer *******

