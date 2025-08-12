# @compugit/shadcn

A comprehensive package containing all shadcn/ui components, ready to use in your React projects. It provides all useful files along with type declarations.

## Prerequisites

1. setup/create a new Vite-react project.
2. [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation).


## Installation

```bash
npm i tailwindcss @tailwindcss/vite tailwind-merge class-variance-authority clsx  lucide-react tw-animate-css
```
```bash
npm install @compugit/shadcn
```
or
```bash
yarn add @compugit/shadcn
```
or
```bash
pnpm add @compugit/shadcn
```

## Setup

1. Configure your `vite.config.js`:

  ```javascript
  export default defineConfig({
    //add optimizeDeps to your existing config
    optimizeDeps: {
      include: ['shadcn-packaged/**/*.{js,jsx,ts,tsx}'],
    },
  })
  ```

2. import index.css to your global.css to app root. note that this impot will defaultly apply tailwindcss to project. you just need to customize your theme in global.css

  replace
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  ```
  with
  ```css
  /* "@compugit/shadcn/dist/index.css" includes `@import "tailwindcss"` */
  @import "@compugit/shadcn/dist/index.css";
  /* source detection, according to the actual path specified */
  @source "../node_modules/@compugit/shadcn";
  ```

## Usage

```tsx
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
```

### Package dir-structure

- @compugit/shadcn/dist/ui/*: components
- @compugit/shadcn/dist/hooks/*: hooks
- @compugit/shadcn/dist/lib/utils: utils

### Available shadcn Components

```
Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card, Input, Input OTP, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip
```

### Compugit's Cutom Components

```
Spinner
```


## Hooks

- `useIsMobile` - Mobile detection


## Development

```bash
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
```

## License

MIT @Compugit