# React props

* Novice
* By: Johann Kerbrat, Engineering Manager at Uber Works
* Weight: 1
* Your score will be updated as you progress.
* [Description](https://intranet.hbtn.io/projects/2108#description)

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/cd505f5320193e7f187e.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251005%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251005T221738Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1082a85baa3a3a80bfc19ae310dc403c658af229802b1acf6f8eccca1f277c67)

## Resources

 **Read or watch** :

* [React Official Website](https://intranet.hbtn.io/rltoken/NnEOzFmxs6rCi8TP85Alzw "React Official Website")
* [Getting started with React](https://intranet.hbtn.io/rltoken/nGdGgyclto1HJ8JMiNvY9w "Getting started with React")
* [React overview](https://intranet.hbtn.io/rltoken/vlAy2fYJgLfsZ41tU8jf6A "React overview")
* [React Developer Tools](https://intranet.hbtn.io/rltoken/bvm7dcsO_-_w2eIWLtEdVA "React Developer Tools")
* [React Fragments](https://intranet.hbtn.io/rltoken/vGG_vxEqApdVkXttehS9lQ "React Fragments")
* [Conditional Rendering](https://intranet.hbtn.io/rltoken/pE3YTGLczGcnd_jWmgJ3ew "Conditional Rendering")
* [Typechecking with PropTypes](https://intranet.hbtn.io/rltoken/1kuKKtKw765oq48N1dtgqw "Typechecking with PropTypes")
* [React Testing Library](https://intranet.hbtn.io/rltoken/wpIWXCBQUaLexk1L-fUSnQ "React Testing Library")
* [Query within an element](https://intranet.hbtn.io/rltoken/g7Pqn6Hw28ZMj69cbybZIg "Query within an element")
* [Jest Matchers](https://intranet.hbtn.io/rltoken/ckFroRGNsZD0nMYfKmdLLQ "Jest Matchers")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/9a804vuJud9hGYpq9ujIQg "explain to anyone"),  **without the help of Google** :

* How to create basic React components using functions
* How to reuse components
* How to pass properties to components
* How to use Fragments
* When to use a key to improve a loop’s performance

## Requirements

* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally: `npm install -g jest`

## Tasks

### 0. Basic components

**mandatory**

Start with your files from the last task of the `React intro` project

Instead of creating new elements, we’re going to create components to split the project. The `App.jsx` is going to become the main entry point, the shell, for every component in the app.

#### Create a Header component

Create a new folder `Header`:

* Create a functional component `Header` inside the `Header.jsx` where you move the code of the header from the `App.jsx`.
* Move the CSS code, related to the header, from the `App.css` to a new file named `Header.css`.
* Create an empty test file `Header.spec.js`.

#### Create a Footer component

Create a new folder `Footer`:

* Create a functional component `Footer` inside the `Footer.jsx` where you move the code of the footer from the `App.jsx`.
* Move the CSS code, related to the footer, from the `App.css` to a new file named `Footer.css`
* Create an empty test file `Footer.spec.js`.

#### Create a Login component

Create a new folder `Login`:

* Create a functional component `Login` inside the `Login.jsx` where you move the code of the login form from the `App.jsx`.
* Move the CSS code, related to the login, from the `App.css` to a new file named `Login.css`
* Create an empty test file `Login.spec.js`.

#### Modify the shell

In the `App.jsx`:

* Along with the Notifications component, import the Header, the Login, and the Footer components
* Pass the components in the above order respectively
* Wrap the above elements inside a react `<Fragment>`

**Tests:**

In the `Header.spec.js`, `Login.spec.js`, and `Footer.spec.js`:

* Ensure that these components are rendered without crashing

Requirements:

* At this point, reloading the react app should display the exact same page layout
* The console tab from your browser shouldn’t show any errors or warnings
