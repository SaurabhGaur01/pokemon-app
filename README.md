# Frontend Test Application

This application will display the Pokemon Catalog along with filtering and sorting features based on name, ability and dimensions. The view list also include pagination which gives an option to navigate and select rows per page and routing for viewing pokemon details.

This application utilises - React, Redux, Thunk, Jest & Enzyme Testing, Bootstrap, Material UI.

Click on [Demo](https://saurabhgaur01.github.io/pokemon-app/) for quick view.
## Installation & Usage

Use the package manager [Node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to run this project on your local. After installing, run below command to install all dependencies-

```bash
npm install
```

This will create node_modules  folder on your root where you downloaded this project. Now, run -

```bash
npm start
```
This command will run your server on your localhost. You can access then on your browser via -

```bash
http://localhost:3000/
```

To run test suit, you need to run -

```bash
npm test
```
This will test entire application including components, ducks, thunks, utils functions used throughout using _Jest and Enzyme_ library. Snapshots already available under _test_ folder.


## Contributing
1. Fork it ( https://github.com/SaurabhGaur01/pokemon-app/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
