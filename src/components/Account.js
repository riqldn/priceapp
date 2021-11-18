import React from 'react';
import './Account.css'
import { useEffect, useState } from 'react';
const Account = () => {

    if (window.location.pathname == '/account') {
        document.body.style.background = 'rgb(7, 117, 243)'
    }
    const [balance, setBalance] = useState(100.00)
    useEffect(() => {
        const balanceCard = document.querySelector(".balanceCard")
        const balanceModal = document.querySelector(".balanceModal")
        const current = document.querySelector(".balance")
        const closeBtn = document.querySelector(".far")
        const ddl = document.querySelector(".inputTransaction")
        const transactionBtn = document.querySelector(".transactionBtn")
        const transactionModal = document.querySelector(".transactionModal")
        const confirmBtn = document.querySelector(".confirmBtn")
        const errorTxt = document.querySelector(".errorTxt")
        balanceModal.innerHTML = `£${balance.toFixed(2)}`
        current.innerHTML = `£${balance.toFixed(2)}`

        function selection() {
            if (ddl.value == 'transfer')
                document.querySelector('.inputRecipient').style.display = 'block'
            else if (ddl.value != 'transfer')
                document.querySelector('.inputRecipient').style.display = 'none'
        }
        ddl.addEventListener('change', selection)

        function fullTransaction() {
            var amount = Number(document.querySelector('.amount').value);
            const card = document.createElement('DIV')
            const group = document.createElement('DIV')
            const displayAmount = document.createElement('H1')
            const type = document.createElement('H3')
            const to = document.createElement('H4')
            if (Number.isNaN(amount) == true|| amount <= 0)//validation for correct amount of money
            {
                console.log('incorrect value')
                errorTxt.innerText = "incorrect amount"
                transactionModal.style.animation = 'shake 1s ease linear'
               
            }
            else if (ddl.value == 'deposit') {
                setBalance(balance + amount)
                displayAmount.innerText = `£${amount.toFixed(2)}`
                type.innerText = ddl.value
                group.appendChild(type)
                card.classList = 'transactionCard'
                card.appendChild(group)
                card.appendChild(displayAmount)
                errorTxt.innerText = ''
                document.querySelector(".transactionContainer").appendChild(card)
                transactionModal.style.display= 'none'
                balanceCard.style.display = 'block'
                transactionBtn.style.display = 'flex'
            }//process for a withdrawal transaction
            else if (ddl.value == 'withdrawal') {
                if (balance - amount < 0 || amount <= 0|| Number.isNaN(amount) == true) {
                    errorTxt.innerText = "You have insufficient funds"
                    transactionModal.style.animation = 'shake 1s ease linear'
                }
                else {
                    console.log(amount == 'NaN')
                    console.log('wrong')
                    setBalance(balance - amount)
                    displayAmount.innerHTML = `£${amount.toFixed(2)}`
                    type.innerText = ddl.value
                    group.appendChild(type)
                    card.classList = 'transactionCard'
                    card.appendChild(group)
                    card.appendChild(displayAmount)
                    document.querySelector(".transactionContainer").appendChild(card)
                    errorTxt.innerText = ''
                    transactionModal.style.display= 'none'
                    balanceCard.style.display = 'block'
                    transactionBtn.style.display = 'flex'
                }
            } //process for performing a transfer transaction
            else if(ddl.value == 'transfer')
            {
                if (balance - amount <= 0 || Number.isNaN(amount) == true) {
                    errorTxt.innerText = 'You have insufficient funds'
                    transactionModal.style.animation = 'shake 2s ease linear'
                }
                else{
                setBalance(balance - amount)
                displayAmount.innerText = `£${amount.toFixed(2)}`
                type.innerText = ddl.value
                to.innerText = `To: ${document.querySelector(".recipient").value}`;
                group.appendChild(type)
                group.appendChild(to)
                card.classList = 'transactionCard'
                card.appendChild(group)
                card.appendChild(displayAmount)
                errorTxt.innerText = ''
                document.querySelector(".transactionContainer").appendChild(card)
                transactionModal.style.display= 'none'
                balanceCard.style.display = 'block'
                transactionBtn.style.display = 'flex'
                
            }
            }

        }
        //function used to close the Modal
        function closeModal() {
            transactionModal.style.display = 'none';
            balanceCard.style.display = 'block';
            transactionBtn.style.display = 'flex'
            errorTxt.innerText = ''
        }
        //function for displaying the modal
        function showModal() {
            balanceCard.style.display = 'none'
            transactionModal.style.display = 'flex'
            transactionBtn.style.display = 'none'
        }
        confirmBtn.addEventListener('click', fullTransaction)
        closeBtn.addEventListener('click', closeModal)
        transactionBtn.addEventListener('click', showModal)
        return () => {
            closeBtn.removeEventListener('click', closeModal)
            transactionBtn.removeEventListener('click', showModal)
            ddl.removeEventListener('change', selection)
            confirmBtn.removeEventListener('click', fullTransaction)
        }

    }, [balance])

    return (
        <>
             {/**Modal for performing transactions */}
            <div className="transactionModal">
                <div className='closeBtn'><i class="far fa-times-circle"></i></div>
                <h1 className="balanceHeader">Current Balance</h1>
                <h1 className="balanceModal"></h1>
               { /**Modal input fields */}
                <select className="inputTransaction" required>
                    <option value="transaction" selected disabled>
                        Transaction
                    </option>
                    <option value="withdrawal">
                        Withdrawal
                    </option>
                    <option value="deposit">
                        Deposit
                    </option>
                    <option value="transfer">
                        Transfer
                    </option>
                </select>
                <div className="inputAmount">
                    <label for="Amount">Amount</label>
                    <input type="text" className="amount" name="Amount" placeholder="£" />
                </div>
                <div className="inputRecipient">
                    <label for="recipient">Recipient</label>
                    <input name="recipient" className="recipient" type="text" placeholder="Recipient" />
                </div>
                <div className='confirmBtn'>
                    <span>confirm</span>
                </div>
                <h3 className="errorTxt"></h3>
            </div>



            <div className="container">
                <h1 className="welcomeTxt">Welcome to your account</h1>
                <div className="balanceCard">
                    <h2 className="currentHeader"> Current Balance</h2>
                    <h1 className="balance">
                    </h1>
                </div>
                <span className="transactionBtn">Make Transaction</span>
                <h1 className="transactionHeader">Recent Transactions</h1>
             
               {/*container to display all of the users transactions */}
                <div className="transactionContainer">
                    <div className="transactionCard">
                        <div className="group1">
                            <h3 className="transactionType">transfer</h3>
                            <h4 className="transactionRecipient">To: Bob </h4>
                        </div>
                        <h1 className="transactionAmount">£10.00</h1>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Account;