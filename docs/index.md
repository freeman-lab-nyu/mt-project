# Mousetracking Project

## Overview of Technologies Used

* [Node.JS API](https://github.com/freeman-lab-nyu/node-api) - an application built using Node.JS to allow transfer of data
* [R API](https://github.com/freeman-lab-nyu/r-api) - an API to execute R code
* PostgreSQL database on AWS
* [Heroku](https://devcenter.heroku.com/) - cloud platform used to build, deploy, and host applications

## Description of Data Flow

The ```Task.js``` file in a webmt study calls the Node.JS API with MT data throughout the study. This data gets saved in the PostgreSQL database (hosted in AWS on an EC2 instance). After the study is complete, the R API is called to process the MT data to return maximum deviation, area under curve, and response time. The script 'process.js' reads from a .CSV file provided by the researcher to determine how the results should be analyzed and, ultimately, a relative implicit bias "score" for the user.

## How to Use and Access

### Changes in current webmt study code
The code changes to write the data to the database are in files ```MT.js``` and ```Task.js```. Most studies use a local version of MT.js that sits in the study’s folder. To save data from the study into the PostgreSQL database, use the files ```/scripts/MT_SQL.js``` and ```/scripts/Task.js```. The functionalities unrelated to the database remain the same, so the data will also save to a .MT file in /responses folder as it does now.

### CSV file
```process.js``` reads from a CSV file to determine how the analyzed MT data should be interpreted. This CSV file is provided by the researcher and accepts the following parameters:
* mad, auc, or rt
* minus, plus, or x (symbolizing multiplication)
* condition 1
* condition 2
* number of bins
* value/range of bins

Please see ```example.csv``` for details.

### Accessing the Database

The data from webmt studies is stored in a ```response``` table in the PostgreSQL database that is hosted in the cloud by AWS. 

To view the database and its data, download Postgres and a GUI to interface with it onto your local machine. A popular, recommended GUI is [pgAdmin](https://www.pgadmin.org/). Once both are installed, you can connect to the database in AWS in pgAdmin. Please contact the lab manager for credential information.

### APIs

For more information on the [Node.JS API](https://github.com/freeman-lab-nyu/node-api) and [R API](https://github.com/freeman-lab-nyu/r-api), please see the documentation on the Github repositories.
