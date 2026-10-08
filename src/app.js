import { rates } from "./data/rates.js";

const $ = (selector) => document.querySelector(selector);

function formatINR(value){
  return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(value);
}

function renderRates(){
  const grid = $("#rateGrid");
  grid.innerHTML = rates.items.map((item,index)=>`
    <article class="rate-card ${item.kind || ""}">
      <small>${item.label}</small>
      <b>${formatINR(item.value)}</b>
      <span>per ${item.unit}</span>
    </article>`).join("");
  $("#rateSource").textContent = rates.source;
  $("#rateUpdated").textContent = `Updated ${rates.updatedAt}`;
}

const menuBtn = $("#menuBtn");
const menu = $("#mobileMenu");
menuBtn.addEventListener("click",()=>{
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",String(open));
  menu.setAttribute("aria-hidden",String(!open));
});
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  menu.classList.remove("open");
  menuBtn.setAttribute("aria-expanded","false");
  menu.setAttribute("aria-hidden","true");
}));

$("#year").textContent = new Date().getFullYear();
renderRates();
