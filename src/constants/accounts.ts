
export const accounts = [
    {
        "account_id": "acc_001",
        "account_name": "Everyday Current Account",
        "account_number": "12345678",
        "sort_code": "11-22-33",
        "currency": "GBP",
        "balance": 1450.20,
        "transactions": [
            {
                "transaction_id": "tx_101",
                "date": "2023-10-25",
                "description": "SAINSBURYS SUPERMARKET",
                "amount": -45.50,
                "type": "DEBIT",
                "category": "Groceries"
            },
            {
                "transaction_id": "tx_102",
                "date": "2023-10-24",
                "description": "TFL TRAVEL CHARGE",
                "amount": -8.90,
                "type": "DEBIT",
                "category": "Transport"
            },
            {
                "transaction_id": "tx_103",
                "date": "2023-10-24",
                "description": "COSTA COFFEE",
                "amount": -3.45,
                "type": "DEBIT",
                "category": "Dining Out"
            },
            {
                "transaction_id": "tx_104",
                "date": "2023-10-23",
                "description": "SALARY PAYMENT - OCT",
                "amount": 2300.00,
                "type": "CREDIT",
                "category": "Income"
            },
            {
                "transaction_id": "tx_105",
                "date": "2023-10-21",
                "description": "NETFLIX SUBSCRIPTION",
                "amount": -10.99,
                "type": "DEBIT",
                "category": "Entertainment"
            }
        ]
    },
    {
        "account_id": "acc_002",
        "account_name": "Gold Saver",
        "account_number": "98765432",
        "sort_code": "44-55-66",
        "currency": "GBP",
        "balance": 12500.00,
        "transactions": [
            {
                "transaction_id": "tx_201",
                "date": "2023-11-01",
                "description": "MONTHLY INTEREST PAID",
                "amount": 35.40,
                "type": "CREDIT",
                "category": "Interest"
            },
            {
                "transaction_id": "tx_202",
                "date": "2023-10-15",
                "description": "TRANSFER FROM CURRENT ACC",
                "amount": 500.00,
                "type": "CREDIT",
                "category": "Transfer"
            },
            {
                "transaction_id": "tx_203",
                "date": "2023-10-01",
                "description": "MONTHLY INTEREST PAID",
                "amount": 34.15,
                "type": "CREDIT",
                "category": "Interest"
            },
            {
                "transaction_id": "tx_204",
                "date": "2023-09-15",
                "description": "TRANSFER FROM CURRENT ACC",
                "amount": 500.00,
                "type": "CREDIT",
                "category": "Transfer"
            },
            {
                "transaction_id": "tx_205",
                "date": "2023-08-20",
                "description": "WITHDRAWAL TO CURRENT ACC",
                "amount": -1000.00,
                "type": "DEBIT",
                "category": "Transfer"
            }
        ]
    },
    {
        "account_id": "acc_003",
        "account_name": "Tech Solutions Ltd - Business",
        "account_number": "55667788",
        "sort_code": "20-40-60",
        "currency": "GBP",
        "balance": 8240.55,
        "transactions": [
            {
                "transaction_id": "tx_301",
                "date": "2023-10-26",
                "description": "INVOICE #1024 PAYMENT",
                "amount": 1200.00,
                "type": "CREDIT",
                "category": "Revenue"
            },
            {
                "transaction_id": "tx_302",
                "date": "2023-10-25",
                "description": "AWS WEB SERVICES",
                "amount": -150.00,
                "type": "DEBIT",
                "category": "Services"
            },
            {
                "transaction_id": "tx_303",
                "date": "2023-10-24",
                "description": "OFFICE SUPPLIES LTD",
                "amount": -85.20,
                "type": "DEBIT",
                "category": "Expenses"
            },
            {
                "transaction_id": "tx_304",
                "date": "2023-10-20",
                "description": "HMRC VAT PAYMENT",
                "amount": -2450.00,
                "type": "DEBIT",
                "category": "Tax"
            },
            {
                "transaction_id": "tx_305",
                "date": "2023-10-15",
                "description": "ZOOM VIDEO COMMS",
                "amount": -14.99,
                "type": "DEBIT",
                "category": "Software"
            }
        ]
    }
]

export interface ITransaction {
    transaction_id: string;
    date: string;
    description: string;
    amount: number;
    type: 'CREDIT' | 'DEBIT';
    category: string;
}

export interface IAccount {
    account_id: string;
    account_name: string;
    account_number: string;
    sort_code: string;
    balance: number;
    transactions: ITransaction[];
}