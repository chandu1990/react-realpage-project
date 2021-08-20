# IMS Bank Exercise

## Scenario

A financial processing system exposes an API for transactions. The result of a
GET request to this API is a JSON array of records with information about the
user, bank account and transaction:

```json
[
  {
    "id": 2,
    "transaction_amount": "$-179.62",
    "date": "2021-05-23T22:53:17Z",
    "account_id": "21",
    "account_number": 5048373234301855,
    "account_type": "savings",
    "customer_id": 9129,
    "customer_name": "Felipe Vigus",
    "customer_email": "fvigus1@bbc.co.uk"
  }
]
```

## Coding challenge

Your challenge is to consume the transactions from this API and use the
information to build a summary table for a bank manager.

1. Call the API to retrieve the list of transactions
    * Make a GET request to: [API URL](#)
2. Use the results to build a table that contains columns for a customer's name,
   the total balance of their checking accounts, the total balance of their savings
   accounts, and the total balance of all of their accounts.

You can choose to complete this coding challenge in either of the languages we
use daily: Ruby or React/JavaScript.

We have created starter sandboxes for each of these

* [React/JavaScript CodeSandbox](https://codesandbox.io/s/imsbank-hn4fm?file=/README.md) ([GitHub mirror](#))
* [Ruby/Sinatra Replit](https://replit.com/@aseehra/ImsBank) ([GitHub mirror](#))

**To complete the challenge, fork _one_ of the two sandboxes above and complete
the tasks above. Submit the link to your fork to your recruiter contact.**

### Expectations

* Your solution executes without crashing
* Your solution does not print any errors to the console
* We don't expect you to spend more than two hours on this exercise

## System design challenge

We would like you to design a data model for the transaction data returned from
the API:

```json
[
  {
    "id": 2,
    "transaction_amount": "$-179.62",
    "date": "2021-05-23T22:53:17Z",
    "account_id": "21",
    "account_number": 5048373234301855,
    "account_type": "savings",
    "customer_id": 9129,
    "customer_name": "Felipe Vigus",
    "customer_email": "fvigus1@bbc.co.uk"
  }
]
```

The data model should enable bank managers to efficiently perform queries over
it. This data model should be usable in a database (e.g. PostgreSQL, MongoDB,
etc.)

Bank managers would also like this data model to support joint accounts
(accounts that are shared between two customers).

Please provide a written document (we do not want you to code this) that
describes your data model. Feel free to include diagrams if they help you to
explain.

**To complete this challenge, submit a PDF of your answer to your
recruiter contact.**

### Expectations
* Your document can be understood by other developers and has enough
  detail that another developer would know how to implement it
* Your data model could be used with a database
* Your data model supports joint bank accounts
* We don't want you to spend more than one hour on this. We plan to use your
  answer as a discussion topic in the interview.