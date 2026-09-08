const products = [
["Plain T-Shirt","T-Shirt"],["Custom T-Shirt","T-Shirt"],
["Plain Hoodie","Hoodie"],["Custom Hoodie","Hoodie"],
["Jacket","Jacket"],["Custom Jacket","Jacket"],
["Tracksuit","Tracksuit"],["Custom Tracksuit","Tracksuit"]
];

const box = document.getElementById("products");

box.innerHTML = products.map(([name,type]) => {
  const cls = type === "T-Shirt" ? "tshirt" : type.toLowerCase();
  const kind = name.includes("Custom") ? "Customized" : "Plain";
  const design = name.includes("Custom") ? "YOUR<br>DESIGN" : "HM";

  return `
  <article class="product">
    <div class="product-visual">
      <div class="garment ${cls}">
        <i>${design}</i>
      </div>
    </div>
    <h3>${name}</h3>
    <div class="price">Contact for Price</div>
    <button class="btn primary"
      onclick="orderProduct('${type}','${kind}')">
      ORDER NOW
    </button>
  </article>`;
}).join("");

function orderProduct(product,type) {
  document.getElementById("product").value = product;
  document.getElementById("type").value = type;
  document.getElementById("order").scrollIntoView({
    behavior:"smooth"
  });
}

function setCategory(type) {
  document.getElementById("product").value = type;
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const get = id => document.getElementById(id).value.trim();

  const message =
`Assalam o Alaikum HM Clothing Brand,

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

  window.open(
    "https://wa.me/923024835443?text=" +
    encodeURIComponent(message),
    "_blank"
  );
});
