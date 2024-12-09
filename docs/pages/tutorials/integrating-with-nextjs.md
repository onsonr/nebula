---
meta:
  title: Integrating with NextJS
  description: This page explains how to integrate Nebula with a NextJS app.
---

# Integrating with NextJS

This page explains how to integrate Nebula with a NextJS app.

:::tip
This is a community-maintained document. Please [ask the community](/resources/community) if you have questions about this integration. You can also [suggest improvements](https://github.com/onsonr/nebula/blob/next/docs/tutorials/integrating-with-nextjs.md) to make it better.
:::

There are 2 guides available:

- [Usage with App Router NextJS 14](#usage-with-app-router-nextjs-14)
- [Usage with Pages Router NextJS 12](#usage-with-pages-router-nextjs-12)

## Usage with App Router (NextJS 14)

- Node: v20.11.1
- NextJS: 14.2.4
- Nebula: 2.15.1

### Working with ESM

If you haven't already, create your NextJS app. You can find the documentation for that here: <https://nextjs.org/docs/getting-started/installation>

After you've created your app, the first step to using Nebula is modifying your `package.json` to have `"type": "module"` in it since Nebula ships ES Modules.

```json
// package.json
{
  "type": "module"
}
```

### Installing packages

To get started using Nebula with NextJS, the following packages must be installed.

```bash
npm install @onsonr/nebula copy-webpack-plugin
```

Nebula for obvious reasons, and the `copy-webpack-plugin` will be used later for adding our icons to our `public/` folder.

### Modifying your Next Config

We'll start with modifying our `next.config.js` to copy Nebula's assets and to properly work with ESM.

Here's what your `next.config.js` should look like:

### NextJS 14 Webpack Config

In order to add Nebula's assets to the final build output, we need to modify `next.config.js` to look like this.

```javascript
// next.config.js

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: 'loose' },
  webpack: (config, options) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, 'node_modules/@onsonr/nebula/dist/assets/'),
            to: resolve(__dirname, 'public/shoelace-assets/assets/')
          }
        ]
      })
    );
    return config;
  }
};

export default nextConfig;
```

:::tip
This will copy the files from `node_modules/@onsonr/nebula/dist/assets` into your `public/shoelace-assets` folder on every development serve or build. You may want to avoid committing these into your repo. To do so, simply add `public/shoelace-assets` into your `.gitignore` folder
:::

### Importing the Nebula's CSS (default theme)

Once we've got our webpack config / next config setup, lets modify our `app/layout.tsx` to include Nebula's default theme.

```javascript
// app/layout.tsx
import './globals.css';
import '@onsonr/nebula/dist/themes/light.css';
// We can also import the dark theme here as well.
// import "@onsonr/nebula/dist/themes/dark.css";
```

### Writing a "setup" component

Now, we need to create a `NebulaSetup` component that will be a client component in charge of setting the `basePath` for our assets / icons.

To do so, create a file called `app/shoelace-setup.tsx`

```typescript
'use client';
// ^ Make sure to have 'use client'; because `setBasePath()` requires access to `document`.

import { setBasePath } from "@onsonr/nebula/dist/utilities/base-path.js"

export default function NebulaSetup({
  children,
}: {
  children: React.ReactNode
}) {
  setBasePath(`/shoelace-assets/`);
  return <>{children}</>
}
```

:::warning
Don't forget to mark your Nebula components and Nebula setup with 'use client'.
:::

Then we'll add this setup component into `app/layout.tsx`

Our `layout.tsx` Should now look something like this:

```diff
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
+ import "@onsonr/nebula/dist/themes/light.css";

+ import NebulaSetup from "./shoelace-setup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
+         <NebulaSetup>
            {children}
+         </NebulaSetup>
      </body>
    </html>
  );
}
```

### Writing components that use Nebula

Now that we have the setup in place, we can write an `app/page.tsx` to use Nebula components in combination with the `dynamic()` component loader from NextJS.

Here's what that would look like, do note the `"use client";` at the top of the component is required.

```typescript
// app/page.tsx
'use client';

import React from "react";
import dynamic from "next/dynamic";

const SlButton = dynamic(
  // Notice how we use the full path to the component. If you only do `import("@onsonr/nebula/dist/react")` you will load the entire component library and not get tree shaking.
  () => import("@onsonr/nebula/dist/react/button/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const SlIcon = dynamic(
  () => import("@onsonr/nebula/dist/react/icon/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function Home() {
  return (
    <main>
      <SlButton>Test</SlButton>
      <SlIcon name="gear" />
    </main>
  );
}
```

Now you should be up and running with NextJS + Nebula!

If you're stuck, there's an [example repo here](https://github.com/konnorRogers/shoelace-nextjs-lazy) you can checkout.

## Usage with Pages Router (NextJS 12)

- Node: 16.13.1
- NextJS: 12.1.6
- Nebula: 2.0.0-beta.74

To get started using Nebula with NextJS, the following packages must be installed.

```bash
yarn add @onsonr/nebula copy-webpack-plugin next-compose-plugins next-transpile-modules
```

### Enabling ESM

Because Nebula utilizes ESM, we need to modify our `package.json` to support ESM packages. Simply add the following to
your root of `package.json`:

```
"type": "module"
```

There's one more step to enable ESM in NextJS, but we'll tackle that in our Next configuration modification.

### Importing the Default Theme

The next step is to import Nebula's default theme (stylesheet) in your `_app.js` file:

```css
import '@onsonr/nebula/dist/themes/light.css';
```

### Defining Custom Elements

After importing the theme, you'll need to import the JavaScript files for Nebula. However, this is a bit tricky to do in NextJS thanks to the SSR environment not having any of the required browser APIs to define endpoints.

We'll want to create a component that uses [React's `useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) to add in the custom components before the first render:

```javascript
function CustomEls({ URL }) {
  // useRef to avoid re-renders
  const customEls = useRef(false);

  useLayoutEffect(() => {
    if (customEls.current) {
      return;
    }

    import('@onsonr/nebula/dist/utilities/base-path').then(({ setBasePath }) => {
      setBasePath(`${URL}/static/static`);

      // This imports all components
      import('@onsonr/nebula/dist/react');
      // If you're wanting to selectively import components, replace this line with your own definitions

      // import("@onsonr/nebula/dist/components/button/button");
      customEls.current = true;
    });
  }, [URL, customEls]);

  return null;
}
```

:::tip
If we use `useEffect` instead of `useLayoutEffect`, the initial render will occur with the expected `sl-` props applied, but the subsequent render (caused by the `useEffect`) will remove those props as the custom components initialize. We _must_ use `useLayoutEffect` to have expected behavior
:::

:::tip
This will import all Nebula components for convenience. To selectively import components, refer to the [Using webpack](/getting-started/installation#using-webpack) section of the docs.
:::

You may be wondering where the `URL` property is coming from. We'll address that in the next few sections.

### Using Our New Component In Code

While we need to use `useLayoutEffect` for the initial render, NextJS will throw a warning at us for trying to use `useLayoutEffect` in SSR, which is disallowed. To fix this problem, we'll conditionally render the `CustomEls` component to only render in the browser

```javascript
function MyApp({ Component, pageProps, URL }) {
  const isBrowser = typeof window !== 'undefined';
  return (
    <>
      {isBrowser && <CustomEls URL={URL} />}
      <Component {...pageProps} />
    </>
  );
}
```

## Additional Resources

- There is a third-party [example repo](https://github.com/crutchcorn/nextjs-shoelace-example), courtesy of [crutchcorn](https://github.com/crutchcorn), available to help you get started using Pages Router.
- There is an [example repo](https://github.com/konnorRogers/shoelace-nextjs-lazy) here using the App Router.