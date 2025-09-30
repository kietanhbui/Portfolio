# Portfolio

A modern portfolio website built with React, TypeScript, shadcn/ui, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional layout using shadcn/ui components
- **Responsive**: Built with Tailwind CSS for mobile-first responsive design
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Uses shadcn/ui for consistent, accessible components
- **Custom Illustrations**: Includes custom avatar illustrations from Figma

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── Frame15.tsx   # Main portfolio component
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component
├── index.tsx         # Entry point
└── index.css         # Global styles
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

## Customization

The component uses Figma-generated assets and can be easily customized by:

1. Updating the image assets in `src/components/Frame15.tsx`
2. Modifying the text content and styling
3. Adding new shadcn/ui components as needed
4. Customizing the color scheme in `tailwind.config.js`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## License

This project is open source and available under the [MIT License](LICENSE).
