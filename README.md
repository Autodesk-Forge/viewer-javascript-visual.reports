# Visual Reports

# NOTE: This sample has been outdated for quite sometime and it has been move into maintance mode. We have 2 samples that create the similar workflow you are looking for. 

![Visual Reports](https://forge-rcdb.autodesk.io/configurator?id=57f3739777c879f48ad54a44)
![BIM 360 Visual Reports](https://bim360reports.autodesk.io/)

# You can find the github repositories for either sample linked in the top right.

[![Viewer](https://img.shields.io/badge/Viewer-v2.14-green.svg)](http://developer.autodesk.com/)

![thumbnail](https://cloud.githubusercontent.com/assets/3713384/24001560/b345d76c-0a1b-11e7-8a25-b084652f7730.png)

## Description

This example demonstrates the reporting capability of Autodesk Forge Viewer. Select the model from the dropdown box in the right pane to see the 2D and 3D representations of the model in the left pane. If the model has a 2D sheet, it will also be loaded along with a visual report showing the vital statistics of the model.

Additionally, you can view charts representing the quantity of the objects based on the selected attributes, such as types or materials. You can click on a wedge in the pie chart to highlight the corresponding objects in the model.

Note that not all report types (attributes) work for every model type. For instance, a Fusion model doesn't have an attribute for "Level" unlike a Revit model. In general, the initial half of the reports is suitable for Revit models and the latter half is suitable for Manufacturing models (Fusion, Solidworks, Inventor, etc.).

## Setup

`cd` into the directory and type `npm install`

## Develop

This demo uses webpack to bundle `.js` files

__Writing JavaScript__: add your file in `src/scripts` and require it in `src/scripts/app.js`

## To build and run browsersync

`npm run gulp`

## Deployment

Open index.html in your browser to see the application in action.

To make a quick deployment of this application to Heroku you may use the button below.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Credits

Create and maintained by Autodesk.
