function shareDistribution() {
    // Get input values
    const stakeA = parseFloat(document.getElementById('stakeA').value);
    const stakeB = parseFloat(document.getElementById('stakeB').value);
    const profitLossA = parseFloat(document.getElementById('profitLossA').value);
    const profitLossB = parseFloat(document.getElementById('profitLossB').value);


    // Calculate profit share
    const profitA = profitLossA - stakeA;
    const profitB = profitLossB - stakeB;

    // Calculate total profit
    let totalProfit = profitA + profitB;

    // Calculate per User profit
    let userProfit = totalProfit / 2;

    // Determine transfer direction and amount
    let transferAmount;
    let transferDirection = 0;  //0=> B to A , 1=> A to B


    if (profitA < profitB) {
        transferAmount = (profitB - profitA) / 2;
        transferDirection = 0;      //B to A 

    } else if (profitA > profitB) {
        transferAmount = (profitA - profitB) / 2;
        transferDirection = 1;      //A to B 

    } else if (profitA == profitB) {
        transferAmount = 0;
        transferDirection = -1;     //no transfer;
    }


    // Round off transferAmount to 2 decimal places
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

    // Display result
    amount.textContent = `₹${transferAmount}`;
    totalPNL.textContent = `₹${totalProfit}`;
    userPNL.textContent = `₹${userProfit}`;
}

function resetForm() {
    // Reset input fields
    document.getElementById('stakeA').value = '';
    document.getElementById('stakeB').value = '';
    document.getElementById('profitLossA').value = '';
    document.getElementById('profitLossB').value = '';

    // Clear result
    document.getElementById('transferDirection').textContent = '';
    document.getElementById('amount').textContent = '';
    document.getElementById('totalProfit').textContent = '';
    document.getElementById('userProfit').textContent = '';

}

// Function to handle keydown event on input fields
function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default action of Enter key
        shareDistribution(); // Call shareDistribution function to calculate
    }
    if (event.keyCode == 27) {
        event.preventDefault();
        resetForm();
    }
}

// Add event listeners to input fields to trigger shareDistribution function on Enter key press
document.getElementById('stakeA').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('stakeB').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('profitLossA').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('profitLossB').addEventListener('keydown', handleEnterKeyPress);
