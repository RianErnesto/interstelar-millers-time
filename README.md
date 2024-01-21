## Getting Started as a Template

In order to use the repository as a Template, you must run the following command in your terminal:

```bash
npx create-next-app [project-name] -e https://github.com/RianErnesto/nextjs-tailwind-template
# or
yarn create next-app [project-name] -e https://github.com/RianErnesto/nextjs-tailwind-template
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load customs Google Fonts.

## Getting Started as a Template

In order to use the repository as a Template, you must run the following command in your terminal:

```bash
npx create-next-app [project-name] -e https://github.com/RianErnesto/nextjs-tailwind-template
# or
yarn create next-app [project-name] -e https://github.com/RianErnesto/nextjs-tailwind-template
```

## Libraries and Dependencies this Template uses

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that empowers developers to rapidly build modern, responsive web interfaces.

To see more about the library and how to use it check the official documentation below:

[Tailwind Docs](https://tailwindcss.com)

### React Icons

Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.

Check and see how to use more than **40k** icons in your project:

[React Icons Doc](https://react-icons.github.io/react-icons/)

Uninstalling:

```bash
npm uninstall react-icons
```

### CLSX and Tailwind-Merge

These two libraries allow constructing `classNames` strings conditionally by different ways and without style conflicts when merging the Tailwind CSS classes.

Combining these libraries into one function gives us the best of two worlds, and you can find this function in `src/services/utils/className.ts` as:

```bash
import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
```

You can find full documentation of the libraries in the following links:

[clsx](https://github.com/lukeed/clsx)

[tailwind-merge](https://github.com/dcastil/tailwind-merge)

### Framer Motion

Complete documentation of the Framer Motion animation library. A production-ready motion library for React.

Framer motion helps developer in animating components and sections easily and in a rapid way, granting agility in developing, it's as easy as `import motion from "framer-motion"` and start creating an animated component.

See more of the library in the official documentation:

[Framer Motion Docs](https://www.framer.com/motion/)

Uninstalling:

```bash
npm uninstall framer-motion
```

### Zod

TypeScript-first schema validation with static type inference.

It's recommended that you create the schemas from Zod inside `src/schemas` folder of the template.

In order to learn how to apply the schemas and the other zod functionalities, check the official documentation:

[Zod Doc](https://zod.dev)

Uninstalling:

```bash
npm uninstall zod
```

### React Hook Form

Performant, flexible and extensible forms with easy-to-use validation.

Normally this library is combined with Zod to create powerful form validations.

Check how you can use the hook of the library:

[React Hook Form Official Docs](https://react-hook-form.com)

Uninstalling:

```bash
npm uninstall react-hook-form
```

### React Slick

React slick is a carousel component built with React. It is a react port of slick carousel.

It makes easier to create simple and complex carousel in React, and provides a good API Documentation in order to better control the Slider Component.

When installing the component, you have to install two dependencies:

```bash
npm install react-slick --save
# and
npm install slick-carousel --save
```

As slick-carousel has a peer-dependency in JQuery, consider following the steps to remove it and keep styles in _Include CSS_ section in _Get Started_ documentation of React Slick: https://react-slick.neostack.com/docs/get-started

Be aware that the library doesn't come with built-in component type, to add it to the project, a type library is installed with:

```bash
npm install @types/react-slick -D
```

If you want to see the examples and the API of the library, check the official documentation:

[React Slick Official Documentation](https://react-slick.neostack.com)

Uninstalling:

```bash
npm uninstall react-slick
# and
npm uninstall slick-carousel
```

### Storybook

Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.

In this template is added the accessibility storybook addon (a11y) with `npm install @storybook/addon-a11y -D`, but if you want to check and install other addons see the official storybook repository in https://github.com/storybookjs/storybook/tree/master/addons.

In order to add the addon, go to the storybook config file `.storybook/main.ts` after installing the addon and put it with the others installed beforehand.

By default, this template only accepts stories that follows the following file rule: `*/stories.(tsx | ts)`, but if you want to add another rules, go to `.storybook/main.ts` and insert your rule.

To see more about this powerful library check the official documentation:

[Storybook Official Documentation](https://storybook.js.org)

### @rocketseat/eslint-config

ESLint configuration used by Rocketseat.

This configuration is useful to keep the code pretty and well organized.

### TanStack Query (React Query)

Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code. TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.

The library helps caching data easily and getting fetch info easily as well.

In addition to installing the library, a devtools was added too and the query provider was set as well in `src/app/providers.tsx` file, and also added to `src/app/layout.tsx`

```bash
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(new QueryClient())

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

// Path: src/app/providers.tsx
```

You will see the devtools pannel when clicking in the floating bottom right button that appears when you initialize the application.

The installation of the library is made in two steps

Check out more information about the library:

[React Query Official Docs](https://tanstack.com/query/v3/)

### Axios

Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

Helps fetching data easily when creating Javascript Promises.

Is commonly used with React Query to provide powerful data fetch and cache.

Check more information:

[Axios Official Docs](https://axios-http.com)

### EmailJS

EmailJS helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use one of our SDK libraries to trigger an email.

A few configurations in the library platform on web are necessary in order for a full working library. Check this out in the official documentation:

[EmailJS Configuration](https://www.emailjs.com)

> [!TIP]
> Create the social media constants inside `src/constants` folder, so you can access them in each file you need.
>
> Uninstalling:

```bash
npm uninstall @emailjs/browser
```
