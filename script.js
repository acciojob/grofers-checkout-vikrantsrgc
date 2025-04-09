const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const priceElements = document.querySelectorAll(".price");
  
  let total = 0;

  priceElements.forEach(el => {
    // Extract numeric value from the text (remove $ if present)
    const value = parseFloat(el.textContent.replace(/[^0-9.]/g, ""));
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Check if a total paragraph already exists, update it; otherwise, create it
  let totalParagraph = document.getElementById("total");
  if (!totalParagraph) {
    totalParagraph = document.createElement("p");
    totalParagraph.id = "total";
    document.body.appendChild(totalParagraph);
  }

  totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);
