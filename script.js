const colors = [('Jet Black', '#0A0A0B'), ('Off White', '#F4F1EA'), ('Charcoal', '#25272B'), ('Graphite', '#3A3D42'), ('Ash Grey', '#70757B'), ('Silver', '#BFC5CA'), ('Stone', '#8A8277'), ('Sand', '#C9B79C'), ('Camel', '#B88A5A'), ('Chocolate', '#4A2E22'), ('Burgundy', '#6E1F2B'), ('Maroon', '#4C121B'), ('Navy', '#101D3A'), ('Royal Blue', '#174A9E'), ('Ice Blue', '#A8D7F0'), ('Teal', '#0D6663'), ('Forest Green', '#173D2B'), ('Olive', '#59613B'), ('Sage', '#94A88B'), ('Khaki', '#A99B72'), ('Rust', '#A84A2A'), ('Orange', '#E56B2F'), ('Mustard', '#C69A25'), ('Cream', '#E8D8B5'), ('Lavender', '#9B8AB8'), ('Plum', '#56304F'), ('Dusty Pink', '#C58F98'), ('Red', '#B51E2A'), ('Electric Green', '#58D68D'), ('Neon Yellow', '#D8F23A')];
const colorInput = document.getElementById("color");
const selectedColor = document.getElementById("selectedColor");
const selectedDot = document.getElementById("selectedDot");

document.querySelectorAll(".swatch").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    const name = btn.dataset.color;
    const hex = colors[i][1];
    colorInput.value = name;
    selectedColor.textContent = name;
    selectedDot.style.background = hex;
  });
});
document.querySelector(".swatch").classList.add("active");

function pickProduct(name){
  document.getElementById("product").value = name;
  document.getElementById("order").scrollIntoView({behavior:"smooth"});
}

document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.getElementById("nav");
  nav.classList.toggle("open");
});

document.getElementById("orderForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const get=id=>document.getElementById(id).value.trim();
  const msg=`Assalam o Alaikum HM Clothing Brand,

I want to place an order.

Product: ${get("product")}
Type: ${get("type")}
Color: ${get("color")}
Size: ${get("size")}
Quantity: ${get("qty")}
Customization: ${get("customization") || "None"}
Name: ${get("name")}
Phone: ${get("phone")}
Notes: ${get("notes") || "None"}

Please confirm my order and price.`;
  window.open("https://wa.me/923024835443?text="+encodeURIComponent(msg),"_blank");
});
