# LmvNavTest
Demonstration of how to write a "Visual Report" with LMV.  Currently, I just have a simple PieChart and BarChart representing Quantites in the model based on some attribute (e.g., "Volume").  If you click on a wedge of the PieChart (or BarChart), it should highlight where those objects are in the model.  You can also select an object in 3D and it will show you where it is on the 2D sheet (assuming it is on the sheet currently loaded into the bottom viewer).  Likewise, you can select an object in 2D and it should Isolate and Fit that object in the 3D view.

Not all report types work for each type of model.  For instance, a Fusion model doesn't have an attribute for "Level" as a Revit model would.  In general, the top half of the reports are suitable for Revit and the bottom half are suitable for Manufacturing models (Fusion, Solidworks, Inventor, etc.).

I will evolve this to include other "Bubble Navigation" interaction in the future...
