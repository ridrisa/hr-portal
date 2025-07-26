# HRInsights KSA - React Application

A modern HR platform designed specifically for Saudi Arabia, empowering HR professionals with knowledge, tools, and community.

## Features

- **Knowledge Base**: Comprehensive HR resources tailored for Saudi Arabia
- **Community Discussions**: Connect with fellow HR professionals
- **Open Chat**: Real-time messaging and collaboration
- **HR Tools**: Calculators and tools for Saudization, salary benchmarking, and more
- **User Profiles**: Track your contributions and build your professional presence
- **Bilingual Support**: Full Arabic and English language support

## Technology Stack

- React 18.2.0
- React Router DOM 6.x for navigation
- Font Awesome for icons
- Custom Saudi-themed CSS
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd hr-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:
```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
hr-portal/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── KnowledgeBase.js
│   │   ├── Discussions.js
│   │   ├── OpenChat.js
│   │   ├── HRTools.js
│   │   ├── Profile.js
│   │   └── KnowledgeArticle.js
│   ├── data/
│   │   └── knowledgeBaseData.js
│   ├── styles/
│   │   ├── index.css
│   │   └── saudi-theme.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For support, email info@hrinsightsksa.com or join our community discussions.