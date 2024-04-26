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


    let flag = 0;       //flag 0 => B to A , 1 => A to B              0 => stake of A is higher ; 1 => stake of B is higher
    //-1 => no transfer needed

    let transferDirection = 0;  //0=> B to A , 1=> A to B

    if (stakeA > stakeB) {
        flag = 0;   //B will pay half of the difference amount to A
        differenceStake = (stakeA - stakeB) / 2;
    }
    else if (stakeA < stakeB) {
        flag = 1;   //A will pay half of the difference amount to B
        differenceStake = (stakeB - stakeA) / 2;
    }
    else if (stakeA == stakeB) {
        flag = -1;
        differenceStake = 0;
    }


    if (flag == 0) {            //B to A        stakeA is greater
        if (profitA < profitB) {        //B to A
            transferAmount = differenceStake + (profitB - profitA) / 2;
            transferDirection = 0;      //B to A 

        } else if (profitA > profitB) {
            balance = (profitA - profitB) / 2;

            if (differenceStake > balance) {
                transferAmount = differenceStake - balance;
                transferDirection = 0;      //B to A
            } else if (differenceStake < balance) {
                transferAmount = balance - differenceStake;
                transferDirection = 1;      //A to B
            } else if (differenceStake == balance) {
                transferAmount = 0;
                transferDirection = -1;     //no transfer needed
            }

        } else if (profitA == profitB) {
            transferAmount = differenceStake;
            transferDirection = 0;     //B to A;
        }
    }
    else if (flag == 1) {            //A to B        stakeB is greater
        if (profitA < profitB) {        //B to A
            transferAmount = differenceStake + (profitB - profitA) / 2;
            transferDirection = 1;      //A to B 

        } else if (profitA > profitB) {
            balance = (profitB - profitA) / 2;

            if (differenceStake > balance) {
                transferAmount = differenceStake - balance;
                transferDirection = 1;      //A to B
            } else if (differenceStake < balance) {
                transferAmount = balance - differenceStake;
                transferDirection = 0;      //B to A
            } else if (differenceStake == balance) {
                transferAmount = 0;
                transferDirection = -1;     //no transfer needed
            }

        } else if (profitA == profitB) {
            transferAmount = differenceStake;
            transferDirection = 1;     //A to B;
        }
    }
    else if (flag == -1) {            //no transfer of stake        stakeA == stakeB
        if (profitA < profitB) {        //B to A
            transferAmount = (profitB - profitA) / 2;
            transferDirection = 0;      //B to A 

        } else if (profitA > profitB) {
            transferAmount = (profitA - profitB) / 2;
            transferDirection = 1;      //A to B 

        } else if (profitA == profitB) {
            transferAmount = 0;
            transferDirection = -1;     //no transfer;
        }
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
        direction.textContent = "B to A";
    } else if (transferDirection == 1) {
        direction.textContent = "A to B";
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
