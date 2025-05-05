✅ README.md.

# FedaPay API with NestJS

A simple NestJS project demonstrating how to integrate the [FedaPay Node.js SDK](https://github.com/FedaPay/fedapay-node) to manage customers and transactions via REST API endpoints.

## 📦 Features

- ✅ Create customers via FedaPay API
- ✅ Create transactions via FedaPay API
- 🔐 API key & environment managed via `.env`
- ⚙️ Modular and clean NestJS architecture

## 🚀 Getting Started

### 1. Clone the repository

<pre>
  git clone https://github.com/Michael-AYK/fedapay-nest-demo.git
  cd fedapay-nest-demo
</pre>

### 2. Install dependencies

<pre>
  npm install
</pre>

### 3. Configure environment variables

Create a .env file in the root directory:

<pre>
  FEDAPAY_SECRET_KEY=your_fedapay_secret_key
  FEDAPAY_ENV=sandbox
</pre>
Use live as FEDAPAY_ENV for production.

### 4. Start the server

<pre> npm run start:dev </pre>

The server will run on: http://localhost:3000


📘 API Documentation

➕ Create a Customer
POST /fedapay/customer

<pre>
  {
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@doe.com",
  "phone_number": {
    "number": "90090909",
    "country": "BJ"
  }
}
</pre>

💳 Create a Transaction with a registered customer
POST /fedapay/transaction

<pre>
  {
  "description": "Payment for order #1234",
  "amount": 1000,
  "currency": { "iso": "XOF" },
  "callback_url": "https://example.com/callback",
  "mode": "mtn_open",
  "customer": { "id": 1 }
}
</pre>

💳 Create a Transaction with a new customer
POST /fedapay/transaction

<pre>
  {
  "description": "Payment for order #1234",
  "amount": 1000,
  "currency": { "iso": "XOF" },
  "callback_url": "https://example.com/callback",
  "mode": "mtn_open",
  "customer": { 
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@doe.com",
    "phone_number": {
        "number": "+2290190090909",
        "country": "BJ"
    }
  }
}
</pre>

📁 Project Structure

<pre>
  src/
├── fedapay/
│   ├── fedapay.controller.ts
│   ├── fedapay.service.ts
│   └── fedapay.module.ts
├── fedapay.config.ts
├── app.module.ts
└── main.ts
</pre>

🛠️ Built With
- NestJS
- FedaPay Node SDK

📝 License
MIT


🙌 Contributing
Feel free to open issues or pull requests. Suggestions and contributions are welcome!



