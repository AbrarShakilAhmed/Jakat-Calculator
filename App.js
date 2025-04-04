document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.querySelector(".clear-btn");
    const calculateButton = document.querySelector("#flex-xs");
  
    const amountInput = document.querySelector(".jakat-ammount .ammount-number input");
    const yearInput = document.querySelector(".jakat-year input:nth-child(1)");
    const giftInput = document.querySelector(".jakat-year input:nth-child(2)");
  
    const resultSection = document.querySelector(".result-section");
    const resultAmount = document.querySelector(".result-container h2");
  
    const instantPayOption = document.querySelector('#instant');
    const letterOption = document.querySelector('#letter');
  
    const zakatRate = 2.5 / 100; // Zakat rate is 2.5%
  
    function clearAll() {
      amountInput.value = "";
      yearInput.value = "";
      giftInput.value = "";
      resultAmount.textContent = "0";
      resultSection.style.display = "none"; // Hide result section when clearing
    }
  
    function calculateJakat() {
      const amount = parseFloat(amountInput.value);
  
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
  
      if (amount < 80000) {
        alert("Zakat can only be calculated for amounts greater than or equal to 80,000.");
        return;
      }
  
      const totalZakat = amount * zakatRate;
  
      resultSection.style.display = "block"; // Show result section
      resultAmount.textContent = totalZakat.toFixed(2); // Show calculated zakat
  
      if (instantPayOption.checked) {
        console.log("Instant Pay Jakat selected");
      } else if (letterOption.checked) {
        console.log("I do letter option selected");
      }
    }
  
    clearButton.addEventListener("click", clearAll);
    calculateButton.addEventListener("click", calculateJakat);
  });
  