# 🛒 Shopping List

> A lightweight front‑end project built with **HTML**, **CSS** and **vanilla JavaScript**. Add items with quantity & price, see the running total, and remove lines on the fly.

## ✨ Features

* **Instant total** — calculates per‑line cost and cart total in real time.
* **Input validation** — prevents empty names, zero/negative quantities or prices.
* **Keyboard shortcut** — hit **Enter** in any input field to add the item quickly.
* **Smooth UI** — modern CSS (Flexbox + Grid) and subtle hover states.
* **No build step** — just open `index.html` in a browser.

## 📂 Project structure

```text
shopping-list/
├─ index.html
├─ style.css
└─ script.js
```

## 🚀 Getting started

1. **Clone or download**

```bash
git clone https://github.com/<your-username>/shopping-list.git
cd shopping-list
```

2. **Run**

Simply open `index.html` in your favourite browser, or use an extension like VS Code **Live Server** for auto‑reload.

## 🧑‍💻 How it works

| Piece    | File         | Purpose                                                                         |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| **HTML** | `index.html` | semantic markup, inputs, list, total section                                    |
| **CSS**  | `style.css`  | container styling, `grid-template-columns` for list rows, `box-shadow` for card |
| **JS**   | `script.js`  | DOM queries, `addItem()` / `renderTotal()`, event listeners                     |

### Key code snippets

```js
// Add Enter‑key shortcut to all inputs
[nameInput, qtyInput, priceInput].forEach(i =>
  i.addEventListener("keypress", e => e.key === "Enter" && addItem())
);
```

```js
// Calculate line total and update grand total
const lineTotal = qty * price;
total += lineTotal;
```

## 🛠️ Possible improvements

* Persist data to **localStorage** so the list survives refresh.
* Allow **editing** existing lines.
* Add **responsive** tweaks for mobile (< 400 px width).
* Display **currency symbol** based on locale.

## 📄 License

[MIT](LICENSE)
