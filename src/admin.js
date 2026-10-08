const $ = (selector) => document.querySelector(selector);

const form = $("#rateForm");
const preview24 = $("#preview24");
const note = $("#adminNote");
const status = $("#adminStatus");

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(value) || 0);
}

function setDefaultDateTime() {
  const input = form.elements.updatedAt;
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  input.value = local.toISOString().slice(0, 16);
}

function preview() {
  preview24.textContent = formatINR(form.elements.gold24.value);
}

form.addEventListener("input", preview);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  const payload = {
    source: data.source.trim(),
    updatedAt: data.updatedAt,
    items: [
      { label: "24 KT GOLD", value: Number(data.gold24), unit: "10g", kind: "primary" },
      { label: "22 KT GOLD", value: Number(data.gold22), unit: "10g", kind: "" },
      { label: "18 KT GOLD", value: Number(data.gold18), unit: "10g", kind: "" },
      { label: "14 KT GOLD", value: Number(data.gold14), unit: "10g", kind: "" },
      { label: "9 KT GOLD", value: Number(data.gold9), unit: "10g", kind: "" },
      { label: "SILVER", value: Number(data.silver), unit: "10g", kind: "silver" }
    ]
  };

  const valid = payload.source && payload.updatedAt &&
    payload.items.every((item) => Number.isFinite(item.value) && item.value >= 0);

  if (!valid) {
    note.textContent = "Please check every field before saving.";
    return;
  }

  // Deliberately do not pretend this is persistent yet.
  // The production path will POST this payload to a secure authenticated backend.
  console.info("Validated daily rate payload:", payload);
  status.textContent = "Validated";
  note.textContent = "Rate record validated successfully. Secure persistence is not connected yet, so no public rate was changed.";
  note.classList.add("success");
});

setDefaultDateTime();
preview();
