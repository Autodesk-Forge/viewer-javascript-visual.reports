#Visual Reports

##Description

This example demonstrates the reporting capability of Autodesk Forge Viewer. Select the model from the dropdown box in the right pane to see the 2D and 3D representations of the model in the left pane. If the model has a 2D sheet, it will also be loaded along with a visual report showing the vital statistics of the model.

Additionally, you can view charts representing the quantity of the objects based on the selected attributes, such as types or materials. You can click on a wedge in the pie chart to highlight the corresponding objects in the model.

Note that not all report types (attributes) work for every model type. For instance, a Fusion model doesn't have an attribute for "Level" unlike a Revit model. In general, the initial half of the reports is suitable for Revit models and the latter half is suitable for Manufacturing models (Fusion, Solidworks, Inventor, etc.).

## Setup
`cd` into the directory and type `npm install`

## Develop
This demo uses webpack to bundle `.js` files

__Writing JavaScript__: add your file in `src/scripts` and require it in `src/scripts/app.js`

## To Build
`gulp`

##Deployment

Open index.html in your browser to see the application in action.

To make a quick deployment of this application to Heroku you may use the button below.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

##Credits

This example is based on an application created by [Jim Awe](https://github.com/JimAwe). The original application can be found [here](https://github.com/JimAwe/LmvNavTest).
