// Function to handle keydown event on input fields for mobile version
function handleEnterKeyPressMobile(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default action of Enter key
        shareDistribution(); // Call shareDistribution function to calculate
    }
    if (event.keyCode == 27) {
        event.preventDefault();
        resetForm();
    }
}

// Function to handle keydown event on input fields for desktop version
function handleEnterKeyPressDesktop(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default action of Enter key
        shareDistribution(); // Call shareDistribution function to calculate
    }
    if (event.keyCode == 27) {
        event.preventDefault();
        resetForm();
    }
}

window.addEventListener('keydown', handleEnterKeyPressDesktop);

// Event listeners for mobile version input fields
document.getElementById('stakeA1').addEventListener('keydown', handleEnterKeyPressMobile);
document.getElementById('stakeB1').addEventListener('keydown', handleEnterKeyPressMobile);
document.getElementById('profitLossA1').addEventListener('keydown', handleEnterKeyPressMobile);
document.getElementById('profitLossB1').addEventListener('keydown', handleEnterKeyPressMobile);

// Event listeners for desktop version input fields
document.getElementById('stakeA').addEventListener('keydown', handleEnterKeyPressDesktop);
document.getElementById('stakeB').addEventListener('keydown', handleEnterKeyPressDesktop);
document.getElementById('profitLossA').addEventListener('keydown', handleEnterKeyPressDesktop);
document.getElementById('profitLossB').addEventListener('keydown', handleEnterKeyPressDesktop);





// Function to calculate profit distribution and display results for both mobile and desktop versions
// Function to calculate profit distribution and display results for both mobile and desktop versions
function shareDistribution() {
    // Calculate and display results for mobile version
    if (window.matchMedia("(max-width: 768px)").matches) {
        const stakeA1 = parseFloat(document.getElementById('stakeA1').value);
        const stakeB1 = parseFloat(document.getElementById('stakeB1').value);
        const profitLossA1 = parseFloat(document.getElementById('profitLossA1').value);
        const profitLossB1 = parseFloat(document.getElementById('profitLossB1').value);

        const profitA1 = profitLossA1 - stakeA1;
        const profitB1 = profitLossB1 - stakeB1;

        let totalProfit1 = profitA1 + profitB1;
        let userProfit1 = totalProfit1 / 2;

        let transferAmount1;
        let transferDirection1 = 0;

        if (profitA1 < profitB1) {
            transferAmount1 = (profitB1 - profitA1) / 2;
            transferDirection1 = 0; // B to A
        } else if (profitA1 > profitB1) {
            transferAmount1 = (profitA1 - profitB1) / 2;
            transferDirection1 = 1; // A to B
        } else if (profitA1 == profitB1) {
            transferAmount1 = 0;
            transferDirection1 = -1; // no transfer;
        }

        transferAmount1 = transferAmount1.toFixed(2);
        totalProfit1 = totalProfit1.toFixed(2);
        userProfit1 = userProfit1.toFixed(2);

        const direction1 = document.getElementById('transferDirection1');
        const amount1 = document.getElementById('amount1');
        const totalPNL1 = document.getElementById('totalProfit1');
        const userPNL1 = document.getElementById('userProfit1');

        if (transferDirection1 == 0) {
            direction1.textContent = "B --> A";
        } else if (transferDirection1 == 1) {
            direction1.textContent = "A --> B";
        } else if (transferDirection1 == -1) {
            direction1.textContent = "No Transfer Required";
        }

        amount1.textContent = `₹${transferAmount1}`;
        totalPNL1.textContent = `₹${totalProfit1}`;
        userPNL1.textContent = `₹${userProfit1}`;
    }
    // Calculate and display results for desktop version
    else {
        const stakeA = parseFloat(document.getElementById('stakeA').value);
        const stakeB = parseFloat(document.getElementById('stakeB').value);
        const profitLossA = parseFloat(document.getElementById('profitLossA').value);
        const profitLossB = parseFloat(document.getElementById('profitLossB').value);

        const profitA = profitLossA - stakeA;
        const profitB = profitLossB - stakeB;

        let totalProfit = profitA + profitB;
        let userProfit = totalProfit / 2;

        let transferAmount;
        let transferDirection = 0;

        if (profitA < profitB) {
            transferAmount = (profitB - profitA) / 2;
            transferDirection = 0; // B to A
        } else if (profitA > profitB) {
            transferAmount = (profitA - profitB) / 2;
            transferDirection = 1; // A to B
        } else if (profitA == profitB) {
            transferAmount = 0;
            transferDirection = -1; // no transfer;
        }

        transferAmount = transferAmount.toFixed(2);
        totalProfit = totalProfit.toFixed(2);
        userProfit = userProfit.toFixed(2);

        const direction = document.getElementById('transferDirection');
        const amount = document.getElementById('amount');
        const totalPNL = document.getElementById('totalProfit');
        const userPNL = document.getElementById('userProfit');

        if (transferDirection == 0) {
            direction.textContent = "User B --> User A";
        } else if (transferDirection == 1) {
            direction.textContent = "User A --> User B";
        } else if (transferDirection == -1) {
            direction.textContent = "No transfer Required";
        }

        amount.textContent = `₹${transferAmount}`;
        totalPNL.textContent = `₹${totalProfit}`;
        userPNL.textContent = `₹${userProfit}`;
    }
}


// Function to reset the form for both mobile and desktop versions
function resetForm() {
    // Reset input fields for mobile version
    document.getElementById('stakeA1').value = '';
    document.getElementById('stakeB1').value = '';
    document.getElementById('profitLossA1').value = '';
    document.getElementById('profitLossB1').value = '';

    // Reset input fields for desktop version
    document.getElementById('stakeA').value = '';
    document.getElementById('stakeB').value = '';
    document.getElementById('profitLossA').value = '';
    document.getElementById('profitLossB').value = '';

    // Clear result for mobile version
    document.getElementById('transferDirection1').textContent = '';
    document.getElementById('amount1').textContent = '';
    document.getElementById('totalProfit1').textContent = '';
    document.getElementById('userProfit1').textContent = '';

    // Clear result for desktop version
    document.getElementById('transferDirection').textContent = '';
    document.getElementById('amount').textContent = '';
    document.getElementById('totalProfit').textContent = '';
    document.getElementById('userProfit').textContent = '';
}
