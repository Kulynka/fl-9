function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        tax = 0.5,
        hundredPercent = 100;

    return {
        getCardOptions() {
            return { balance, transactionLimit, historyLogs, key };
        },

        putCredits(amount) {
            balance += amount;

            historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        takeCredits(amount) {
            balance -= amount;

            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        setTransactionLimit(amount) {
            transactionLimit = amount;

            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        transferCredits(amount, card) {
            const amountAndTax = amount * tax / hundredPercent + amount;

            if (amountAndTax > balance) {
                console.log(`You can not transfer credits - balance exceeded.`);
            } else if (amountAndTax > transactionLimit) {
                console.log(
                    `You can not transfer credits - transaction limit exceeded.`);
            } else {
                this.takeCredits(amountAndTax);
                card.putCredits(amount);
            }
        }
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }

    addCard() {
        if (this.cards.length < this.maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log(`You have reached maximum amount of cards!`);
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}