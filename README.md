# FullStack Developer Challenge

Create a website that lets user browse top android apps. The website should contain
two pages - landing page and a detail page. Please see Specs section below for UI details

* On the landing page user will see a list of all top android apps. These apps will need to be scraped from Google Play Store: https://play.google.com/store/apps/top and stored in your website’s DB.
* You need to show these apps on landing page by fetching from DB.
* The landing page should also contain a button that will re-scrape all the data from the top apps page and update the entries in the DB.If new apps are available add them to your db, but do not delete the apps that have already been scraped but removed from the top apps page.
* On clicking any app on the landing page of your website, user should be redirected to the detail page of your website where more information about the app will be shown.
* You can show things like app name, package, icon, developer name, videos, screenshots etc.
* The landing page and the detail page should be on different urls on the same domain. For example, www.yourwebsite.com/ and www.yourwebsite.com/appdetails?pkg=com.whatsapp
* User should also be able to directly enter a url with app package and the website should show the details for that app package. For example - I should be able enter this url in the browser - www.yourwebsite.com/appdetails?pkg=com.supercell.brawlstars , and all the information regarding this app should be displayed on the page.
* Creating the UI in Frameworks like **AngularJs,ReactJs,VueJs** will earn you extra points.


Once you are done, please share with us:
1. Source code link (GitHub, BitBucket, etc)
2. URL where you have hosted the project

# Specs

* UI Designs specs. [Click here](https://www.figma.com/file/Sy6FoaQg8HSDUUepRPRUGs/Full-Stack?node-id=0%3A60)

# Need Help?

* How to create Repo in GitHub? [Click here](https://guides.github.com/activities/hello-world/)
* How to deploy Python App online? [Click here](https://devcenter.heroku.com/articles/getting-started-with-python)
* How to deploy NodeJs App online? [Click here]( https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* How to host your UI/HTML code online? [Click here](https://gist.github.com/TylerFisher/6127328) or [Click here](https://pages.github.com/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
