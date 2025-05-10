# 🧪 Mongoose TypeScript Practice

A boilerplate Express server using **TypeScript**, **MongoDB (Dockerized)**, and **Mongoose**. Ideal for practicing server-side logic and learning clean architecture patterns.

---

## 🔧 Tech Stack

- 🚀 **Express.js** with TypeScript
- 🧠 **Mongoose** ODM
- 🐳 **MongoDB 6** in Docker
- 📦 **pnpm** as package manager
- 🛠️ Live-reload with `ts-node-dev`

---

## 📁 Project Structure
    src/
    ├── app/
    │ ├── modules/
    │ │ ├── user/
    │ │ └── product/
    ├── server.ts # Main entry (MongoDB connect + app listen)
    ├── app.ts # Express app config


## Setup Steps

1. **Install Dependencies**
   ```sh
   pnpm install
   ```
2. **Configure environment**
    ```sh
    cp .env.example .env
    # Edit .env with your credentials
    ```
1. **Create and Setup MongoDB (Optional if you have docker installed or set appropriate MONGODB_URI)**
   ```sh
   docker compose up -d
   ```

6. **Run Dev Server**
    ```sh
    pnpm dev
    ```

## 🧼 Useful Commands

    | Task                  | Command                  |
    | --------------------- | ------------------------ |
    | Start MongoDB         | `docker compose up -d`   |
    | See Containers        | `docker ps`              |
    | Stop MongoDB          | `docker compose down`    |
    | Wipe MongoDB & Reinit | `docker compose down -v` |

## 👤 Author

**Muhammad Touhiduzzaman**  
🌐 [Portfolio Website](https://touhid-zaman.web.app)  
📫 [touhid4bd@gmail.com](mailto:touhid4bd@gmail.com)  
🐙 [GitHub](https://github.com/TouhidZaman)