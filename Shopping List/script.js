/* ──────────────────────────────────────────────
 * 1  DOM ELEMENTS
 * ─────────────────────────────────────────── */
const nameInput  = document.getElementById("item-name");
const qtyInput   = document.getElementById("item-qty");
const priceInput = document.getElementById("item-price");
const addBtn     = document.getElementById("add-btn");
const listEl     = document.getElementById("list");
const totalEl    = document.getElementById("total-value");

/* 2  STATE  */
let total = 0;

/* ──────────────────────────────────────────────
 * 3  FUNCTIONS
 * ─────────────────────────────────────────── */
function addItem() {
  // 3‑1 Validate
  const name  = nameInput.value.trim();
  const qty   = qtyInput.value;
  const price = priceInput.value;

  if (!name || qty <= 0 || price < 0) return alert("Enter valid data!");

  // 3‑2 Calculate line total
  const lineTotal = qty * price;
  total += lineTotal;
  renderTotal();

  // 3‑3 Build list item
  const li = document.createElement("li");

  li.innerHTML = `
      <span>${name}</span>
      <span>${qty}</span>
      <span>₹${lineTotal.toFixed(2)}</span>
      <button class="delete-btn">🗑️</button>
  `;

  // 3‑4 Delete handler
  li.querySelector(".delete-btn").addEventListener("click", () => {
    total -= lineTotal;
    renderTotal();
    li.remove();
  });

  listEl.appendChild(li);

  // 3‑5 Clear inputs
  nameInput.value = "";
  qtyInput.value = "";
  priceInput.value = "";
  nameInput.focus();
}

function renderTotal() {
  totalEl.textContent = total.toFixed(2);
}

/* ──────────────────────────────────────────────
 * 4  EVENT LISTENERS
 * ─────────────────────────────────────────── */
addBtn.addEventListener("click", addItem);
