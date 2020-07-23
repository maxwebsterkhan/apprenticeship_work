# NGIS Application Kit (NAK)

The Application Kit is a design system for the NGIS suite of applications. It
contains a themeable, componentised user interface that provides a shared
language - within an iterable guide - for designers and developers.

---

**👉 [Live demo and documentation][docs_url] 👈**

---

## Usage in an application

This repo/package is private. You'll need to either authorise the build
server/your local machine or add a token to the package URL.

### Install

`npm i github:genomicsengland/ngis-application-kit#semver:^VERSION`

VERSION being the NAK version you would like to install, E.g.:
`npm i github:genomicsengland/ngis-application-kit#semver:^6`

For more information, read about
[installing packages from GitHub](https://docs.npmjs.com/cli/install.html).

### Configure

The application installing the Application Kit should be wrapped with the
`ContentProvider` and `ThemeProvider` components.

```jsx
import React from 'react';
import { render } from 'react-dom';
import { ContentProvider, ThemeProvider } from 'ngis-application-kit';

render(
  <ThemeProvider>
    <ContentProvider>
      <App />
    </ContentProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
```

## Looking to contribute?

Please [review the documentation][docs_url] for details on contributing. The
documentation can also be found in the repository within `/docs`.

[docs_url]: https://ngis-application-kit.build.ngis.io/
