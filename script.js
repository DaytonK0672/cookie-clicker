// Initialize game state
let cookieCount = 0;
let autoClickerCost = 10;
let autoClickerOwned = 0;
let autoClickerInterval = 0;

// Get references to HTML elements
const countElement = document.getElementById("count");
const cookieElement = document.getElementById("cookie");
const buyUpgradeButton = document.getElementById("buy-upgrade");

// Cookie click event
cookieElement.addEventListener("click", function() {
    cookieCount++;
    updateCookieCount();
});

// Update cookie count on screen
function updateCookieCount() {
    countElement.textContent = cookieCount;
}

// Auto-clicker upgrade logic
buyUpgradeButton.addEventListener("click", function() {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickerOwned++;
        autoClickerCost = Math.floor(autoClickerCost * 1.5);  // Increase cost for next upgrade
        updateCookieCount();
        updateUpgradeButton();
    }
});

// Auto-clicker logic
function startAutoClicker() {
    if (autoClickerOwned > 0) {
        clearInterval(autoClickerInterval);  // Clear any previous interval
        autoClickerInterval = setInterval(function() {
            cookieCount += autoClickerOwned;
            updateCookieCount();
        }, 1000);  // Add cookies every second
    }
}

// Update the upgrade button's label with the current cost
function updateUpgradeButton() {
    buyUpgradeButton.textContent = `Buy Auto Clicker (${autoClickerCost} cookies)`;
    if (cookieCount < autoClickerCost) {
        buyUpgradeButton.disabled = true;
    } else {
        buyUpgradeButton.disabled = false;
    }
}

// Initial button update
updateUpgradeButton();
