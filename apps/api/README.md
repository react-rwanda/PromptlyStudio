# StackGenie API

**TypeScript Express.js backend for StackGenie** - Africa's first open-source AI-powered framework that generates fullstack apps from prompts.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server (TypeScript)
npm run dev
```

## 📁 Project Structure

```
src/
├── controllers/     # Route handlers
├── routes/         # Express route definitions
├── middlewares/    # Custom middleware
├── models/         # Database models
├── utils/          # Helper functions
├── config/         # Configuration files
├── app.js          # Express app setup
└── server.js       # Server entry point
```

## 🛠 Available Scripts

- `npm run dev` - Start development server with ts-node and nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server (requires build first)
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests (not configured yet)
- `npm run lint` - Run ESLint (not configured yet)

## 🔗 API Endpoints

### Health Check
- `GET /api/health` - Get API health status

### Code Generation
- `POST /api/codegen` - Generate code from prompt

### Figma Integration (Coming Soon)
- `POST /api/figma/import` - Import Figma designs

### Export (Coming Soon)
- `POST /api/export` - Export generated projects

## 🌍 Environment Variables

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
FIGMA_CLIENT_ID=
FIGMA_CLIENT_SECRET=
JWT_SECRET=
```

## 🔧 Middleware Stack

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logging
- **Express.json** - JSON body parsing
- **Custom Error Handler** - Centralized error handling

## 📝 Development Notes

- **TypeScript** with strict type checking
- **ES2020** target with CommonJS modules
- Environment-based configuration with dotenv
- Structured error handling with custom types
- Request logging in development (Morgan)
- Graceful shutdown handling
- Type-safe API responses and requests

## 🤝 Contributing

See the main project [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

---

**Built with ❤️ by Rwanda Dev Community**