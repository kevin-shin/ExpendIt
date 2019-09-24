# ExpendIt

### TO DO

**The app currently is not connected to an available hosted Mongo database. Please check back in soon for this implementation!**

### Introduction

ExpendIt is a web application which allows users to record their expenditures by category and price, which is then used as the data for various statistical interfaces on the application. 

### To Start
Clone this repository 
```
git clone https://github.com/kevin-shin/ExpendIt.git
```
Change directory to the main folder
```
cd ~/location/locationSubfolder/ExpendIt
```
Run the program
```
node app.js
```

Note: This app currently employs `Passport.js` authentication. If this is your first time to the app, you'll need to sign up for an account.


### Features
1. (Main) Pie Chart to visualize totals by category
2. (Report) Statistical interface which provides standard deviation, average, maximum
3. (Report, *Coming Soon*) Plot of reported expenses by date
4. (Report, *Coming Soon*) Filter feature to narrow down items by category, price, etc.

### Libraries

This project is thanks to many cool open-source libraries which provides the buttress of the app's features. These include, but are not limited to, [plotly.js](https://plot.ly/javascript/) and [D3.js](https://d3js.org/).

### Bug Reporting

This project welcomes commentary on perceived bugs, feature ideas, and general guidance. Please open an issue—the more thorough the desription, the more helpful!
