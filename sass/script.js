
const data = [
  {
    name: "همبرگر مخصوص",
    price: 10000,
    count: 0,
    imageURL: "assets/hamburger.png",
  },
  {
    name: "همبرگر معمولی",
    price: 8000,
    count: 0,
    imageURL: "assets/hamburger.png",
  },
  {
    name: "همبرگر مخصوص با قارچ و پنیر",
    price: 20000,
    count: 0,
    imageURL: "assets/hamburger.png",
  },
  {
    name: "همبرگر معمولی با قارچ و پنیر",
    price: 10000,
    count: 0,
    imageURL: "assets/hamburger.png",
  },
  {
    name: "سیب زمینی سرخ کرده",
    price: 10000,
    count: 0,
    imageURL: "assets/french_fries.png",
  },
  {
    name: "سیب زمینی سرخ کرده ویژه",
    price: 25000,
    count: 0,
    imageURL: "assets/french_fries.png",
  },
  {
    name: "نوشابه",
    price: 5000,
    count: 0,
    imageURL: "assets/soda.png",
  },
  {
    name: "نوشابه رژیمی",
    price: 6000,
    count: 0,
    imageURL: "assets/soda.png",
  },
  {
    name: "سالاد سزار",
    price: 25000,
    count: 0,
    imageURL: "assets/ceasar.png",
  },
  {
    name: "سالاد فصل",
    price: 8000,
    count: 0,
    imageURL: "assets/salad.png",
  },
];
const mainMenu = document.getElementById("data");
const totalFood = document.getElementById("total-food");
const comission = document.getElementById("comission-percent");
const finalRecipt = document.getElementById("final-recipt");
const checkMark = document.getElementById("checkMark");
const input_takhfif = document.getElementById("code_takhfif");
const mizan_takhfif = document.getElementById("mizan_takhfif");
const sabt = document.getElementById("sabt");
sabt.addEventListener("click",() => {
  window.location.reload();
})
code_takhfif = 1;
checkMark.addEventListener("click", () => {
  if(input_takhfif.value == "code"){
    code_takhfif = 0.7;
    update();
  }
  else{
    code_takhfif = 1;
    alert("ارور");
  }
});
function update() {
  let sum = 0;
  mainMenu.innerHTML = "";
  data.forEach((item, index) => {
    const image = document.createElement("img");
    image.src = item.imageURL;
    const imageParentDiv = document.createElement("div");
    imageParentDiv.classList.add("image");
    imageParentDiv.appendChild(image);
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("items");
    mainDiv.appendChild(imageParentDiv);
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    const iteminfoDiv = document.createElement("div");
    iteminfoDiv.classList.add("item-info");
    const name = document.createElement("h4");
    name.innerText = `${item.name}`;
    const price = document.createElement("div");
    price.innerText = `${item.price}  تومان`;
    const count = document.createElement("div");

    count.classList.add("count");
    const btnPlus = document.createElement("button");
    btnPlus.innerText = "+";
    btnPlus.addEventListener("click", () => {
      data[index].count++;
      update();
    });
    const pCounter = document.createElement("p");
    pCounter.innerText = `${item.count}`;
    const btnMinus = document.createElement("button");
    btnMinus.innerText = "-";
    btnMinus.addEventListener("click", () => {
      if (data[index].count > 0) {
        data[index].count--;
        update();
      }
    });
    count.appendChild(btnPlus);
    count.appendChild(pCounter);
    count.appendChild(btnMinus);
    const totalPriceDiv = document.createElement("div");
    totalPriceDiv.classList.add("total-price");
    const spanPrice = document.createElement("span");
    spanPrice.classList.add("total-hamburger");
    spanPrice.insertAdjacentText("beforeend", `${item.price * item.count}`);
    totalPriceDiv.appendChild(spanPrice);
    iteminfoDiv.appendChild(name);
    iteminfoDiv.appendChild(price);
    iteminfoDiv.appendChild(count);
    descriptionDiv.appendChild(iteminfoDiv);
    descriptionDiv.appendChild(totalPriceDiv);
    mainDiv.appendChild(descriptionDiv);
    mainMenu.appendChild(mainDiv);
    sum += item.price * item.count;
  });
  totalFood.innerText = sum;
  comission.innerText = sum * 0.05;
  finalRecipt.innerText = Math.floor(sum * 1.05 * code_takhfif);
  mizan_takhfif.innerText = Math.ceil(sum * 1.05 * (1 - code_takhfif));
}
update();
