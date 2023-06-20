# Express User Transformation API

This is a simple Express.js API that transforms user data based on a specific interface.

## Getting Started

### Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>

2. Navigate to the project directory:
  cd express-user-transformation-api

3. Install the dependencies
  npm install

4. Start the server:
  npm run dev
The server will start running on `http://localhost:3131`.

5. test using the existing test.rest file

@url = http://localhost:3131

\#\#\# Users \
POST {{url}}/transform
Content-Type: application/json

[
  {
    "firstName": "Mohammad",
    "lastName": "Amaren",
    "age": 28,
    "email": "mohammad@amaren.com"
  },
  {
    "firstName": "Rop",
    "lastName": "Smith",
    "age": 35,
    "email": "Tim@smith.com"
  }
]
