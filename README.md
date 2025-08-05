# @compugit/shadcn

A comprehensive package containing all shadcn/ui components, ready to use in your React projects.

## Installation

\`\`\`bash
npm install @compugit/shadcn
# or
yarn add @compugit/shadcn
# or
pnpm add @compugit/shadcn
\`\`\`

## Setup

1. Install the package and its peer dependencies:

\`\`\`bash
npm install @compugit/shadcn react react-dom tailwindcss
\`\`\`

2. Import the CSS in your main CSS file or `_app.tsx`:

\`\`\`css
@import '@compugit/shadcn/styles';
\`\`\`

3. Configure your `tailwind.config.js`:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@compugit/shadcn/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
\`\`\`

## Usage

\`\`\`tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@compugit/shadcn'

function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
\`\`\`

## Available Components

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Hover Card
- Input
- Input OTP
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Resizable
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Toggle Group
- Tooltip

## Hooks

- `useToast` - Toast notifications
- `useIsMobile` - Mobile detection

## Publishing

To publish this package:

1. Update the version in `package.json`
2. Build the package: `npm run build`
3. Publish: `npm publish`

## Development

\`\`\`bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch for changes
npm run dev

# Type check
npm run type-check

# Lint
npm run lint
\`\`\`

## License

MIT
0