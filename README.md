[![CircleCI](https://circleci.com/gh/AlexIncarnati/react-light-boilerplate.svg?style=svg)](https://circleci.com/gh/AlexIncarnati/react-light-boilerplate)

# React Light Boilerplate

A light and responsive boilerplate to build ReactJS applications that includes ReactJS 16, SASS, Webpack 4, Babel / Eslint, JEST and Enzyme.
It's a good ReactJS starter pack if you don't want to use the create-react-app package and you need something quick and lighter ready to use with everything preinstalled.

![React](https://github.com/AlexIncarnati/react-light-boilerplate/raw/master/images/react.png)    ![ES6](https://github.com/AlexIncarnati/react-light-boilerplate/raw/master/images/es6.png)  ![Webpack](https://github.com/AlexIncarnati/react-light-boilerplate/raw/master/images/webpack.png)    ![ES6](https://github.com/AlexIncarnati/react-light-boilerplate/raw/master/images/sass.png)


### Prerequisites

Node.js and npm installed locally

### Installing

Step by step on your terminal

```
mkdir new_directory
cd new_directory
npm install
```

## Running the app on your local environment

After installation please run

```
npm run start
```

## Running the tests

At the moment you can run some snapshot testing with Jest and Enzyme

```
npm run test
```

## Create a build of the app

You can create a build version of the app by running this command on your terminal, you can find the configuration on webpack.config.js. You will find the built files inside the /dist folder.

```
npm run build
```

## FEATURES

* Quick mock up a fully functional React app with 1 parent React Component (AppMain.js) and 3 children stateless Components (Header.js, Content.js. Footer.js)
* Uses Webpack 4.2.20
* Uses ESLINT for parsing JS
* All components have been tested with JEST and ENZYME
* Layout written in SASS with flexbox
* Normalized css with Bootstrap Reboot 2018
* Fully responsive, supports well all devices with media queries, mobile first approach

## Authors

* **Alessandro Incarnati** - *v. 1.0.0* - Not many hours of work into this, I wish I had more time.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
