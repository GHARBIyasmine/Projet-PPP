# Projet-PPP
## Overview :
Network security is still a top priority in today's world of interconnectedness and fast data interchange. Network-based Attacks are becoming more complex which highlights the need for more advanced, fast and efficient solutions to detect them.
In this project, we created a machin learning model to predict whether the packets are begnin or malicious based its patters. In case of an attack is ditected, the model proceeds to the classificaion of the attack.

The attack categories in the dataset are divided into nine groups: Fuzzers, Analysis, Backdoors, DoS, Exploits, Generic, Reconnaissance, Shellcode, and Worms. However the classification will be done through 5 classes only which are  : 
+ Exploits
+ Fuzzers
+ Generic
+ Other
+ Reconnaissance

The reason being their higher data availability compared to other attack types. And the rest are grouped in the class ‘Other’. 

## Walkthrough of the repository
### Machine Learning Model Build Directory 
This directory contains the building process of the model as early as data cleaning until the training phase. It includes 5 notebooks : 
+ Data Cleaning Notebook : This python script includes the phase responsible for dataset correction like missing values and splitting the data into training and testing data.
+ EDA Notebook : This notebook contains the Exploratory Data Analysis which enables us to understand the structure and characteristics of the dataset like patterns, relationships, anomalies, and insights.
+ Preprocessing Notebook : This involves transforming raw data into a format suitable for further analysis or modeling.
+ Lgbm-model-attack prediction notebook : This is a model that predicts whether the traffic is benign or malicious 
+ Attack type prediction notebook : This is a model that classifies the attack. 

### Docer image Directory
This directory contains the necessary code that is set to be contained into a docker container and involves the model and the APIs responsible for connecting to the database as well as CRUD functions necessary for our project.

+ Database_connection : establishes a connection with the database server
+ Model1 and Model2 are classes that follow the architecture of the databases 
+ Predict.py contains the prediction functions.
+ Ann_model.h5 and lightgbm_model.txt contain the mode configuration
+ Main.py . this is the script that binds everything together and contains the necessary APIs
+ ohe_service .pkl provides the OneHotEncoding service  

### React Web App - NetGuardiaN Directory 
This directory contains the ReactJs website that shows the analytics and findings of the project. It was developed using the Horizon UI Chakra template.





