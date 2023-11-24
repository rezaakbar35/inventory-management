# Inventory Management : init

Untuk kalian semua saya persembahkan readme ini agar tidak tersesat 🙏🙏


## Installation

How to init 2.0 backend
1. di terminal cd ke backend
2. melakukan install node package manager

```bash
  npm install
```
3. melakukan migrate pada prisma
```bash
  npx prisma migrate reset
```
4. Sudah auto seeding
5. run app.js
```bash
npm run start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL` = "postgres://postgres:user@localhost:5432/database_name" 

`JWT_SECRET` = "secret string random code"

