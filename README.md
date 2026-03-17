# Simple e-commerce
A robust full-stack e-commerce solution featuring a high-performance Express.js and a Flutter mobile interface. This project prioritizes data integrity, security, and clean architecture.

🚀 Tech Stack
- Backend: Node.js, Express.js, TypeScript.
- Database & Storage: Supabase (PostgreSQL) & Supabase Storage for Image Assets.
- Mobile: Flutter (Dart).
- Web: React (will added soon)
- Security: JWT with Access & Refresh Token mechanism.

🏗️ Architectural Highlights
1. Secure Authentication Flow:
- Access Token: Short-lived for secure API requests.
- Refresh Token: Used to securely obtain new access tokens without re-login, ensuring a seamless user experience while maintaining high security.

2. Scalable Product & Stock Management
The backend is designed with a CRUD System that handles:
- Admin Side: Full control over product lifecycle (Create, Read, Update, Delete) and stock monitoring.
- Customer Side: High-performance data fetching optimized for mobile viewing.
- Supabase Integration: Leveraging PostgreSQL for relational data integrity and Supabase Storage for optimized image delivery.

3. Clean Code & Type Safety
Developed using TypeScript, ensuring:
- Reduced runtime errors through strict typing.
- Maintainable and self-documenting code.
- Feature-based folder structure for better scalability.

🛠️ API Features (Completed)
|    Feature    |    Endpoint        |   Method     | Description |
| ------------- | -------------      | -----------  | ------------|
| Auth          |/api/auth/register      |  POST        | User registration.
| Auth          |/api/auth/login         | POST         | Secure login with JWT issuance.
| Auth          |/api/auth/refresh       | POST         | Silent token renewal.
| Admin         |/api/admin/products     | GET/POST     | Manage product.
| Admin         |/api/admin/products/:id | PATCH/DELETE | Update/Remove product items.
| Customer      |/api/products           | GET          | Fetch available items for customers.

🏁 How to Run
Backend:
- `npm install`
- **Environment Setup:** * Create a `.env` file in the root directory.
    * Refer to `.env.example` or `/src/config/config.ts` for the required variables (Supabase URL, Anon Key, JWT Secret, etc).
- `npm run dev`
