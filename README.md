# Gemini powered Chat Application

![ChatApp](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=400)

A modern, responsive chat application powered by Google's Gemini AI. Built with React, TypeScript, and Tailwind CSS, this application provides a seamless chat experience with Google's latest AI model.

## 🌟 Features

- Real-time chat interface with Gemini AI
- Beautiful, responsive design
- Markdown support in messages
- Typing indicators
- Error handling
- Smooth animations
- Mobile-friendly interface

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google Generative AI (@google/generative-ai)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development Environment**: StackBlitz WebContainer

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18.x or higher installed
- A Google Gemini API key ([Get it here](https://makersuite.google.com/app/apikey))

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gemini-chat.git
cd gemini-chat
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Gemini API key to the `.env` file:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ChatInput.tsx   # Message input component
│   └── ChatMessage.tsx # Message display component
├── services/           # API services
│   └── gemini.ts      # Gemini AI integration
├── types/             # TypeScript types
│   └── chat.ts       # Chat-related types
├── utils/             # Utility functions
│   └── errorHandling.ts
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## 🔧 Built with Bolt

This project was created using StackBlitz's Bolt, a powerful development environment that provides:

- Instant development environment setup
- Real-time collaborative coding
- Built-in TypeScript support
- Automatic dependency management
- Hot module replacement
- Integrated terminal and preview

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google's Gemini AI for powering the chat functionality
- The React and TypeScript communities
- StackBlitz for providing the Bolt development environment

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.