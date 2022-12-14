# Upload to cloud storage:
gsutil -m rm -r gs://www.ouroboros.gold/\*
cd build
gsutil cp -r . gs://www.ouroboros.gold/
gsutil web set -m index.html gs://www.ouroboros.gold/

to grant bucket public access:
https://cloud.google.com/storage/docs/access-control/making-data-public#:~:text=Terraform%20REST%20APIs-,In%20the%20Google%20Cloud%20console%2C%20go,the%20Cloud%20Storage%20Buckets%20page.&text=In%20the%20list%20of%20buckets,the%20person_add%20Grant%20access%20button.

to setup google domain to point to bucket:
https://stackoverflow.com/questions/40735724/connect-google-domain-to-google-cloud-bucket


> >this is an important  message

<table>
<tr><td style="background-color: aqua">aaa</td><td>bbb</td></tr>
<tr><td>aaa</td><td>bbb</td></tr>
</table>
<div style="page-break-after: always"></div>

# Getting Started with Create React Index

This project was bootstrapped with [Create React Index](https://github.com/facebook/create-react-app).

## Available Scripts

In the project *****direc **to **tory*, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React Index documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
