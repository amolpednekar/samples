# openapi-sample
<p align="center">
  <img src="https://www.corda.net/wp-content/uploads/2016/11/fg005_corda_b.png" alt="Corda" width="500">
</p>

## Introduction

This sample is a developer preview of setting up a React front-end using Braid server and OpenAPI generator. 
Project Braid is a web server which can automatically detect Corda flows and generate api template in json format. Then, we can use OpenAPI generator to transalate into API libraries in more than 40+ different languages, including javascript, GO, Ruby, and etc. Read this blog to have an overview of Braid: https://medium.com/corda/a-road-to-less-coding-auto-generate-apilibrary-bcbe2def7b30

More information about Braid and OpenApi generator can be found at:

Braid: https://gitlab.com/bluebank/braid

OpenApi-generator: https://github.com/OpenAPITools/openapi-generator



## Tools you need
- Nodejs : https://nodejs.org/en/download/

⚠️ You need follow the order of the instructions: Start Corda node -> braid server -> React WebApp
## Step1: Downloads and setting up bootstrap Corda network
### Download openapi-generator. 
Find more details at: https://github.com/OpenAPITools/openapi-generator
```
npm install @openapitools/openapi-generator-cli -g
```
### Download and Start the Cordapp. 
For this Demo, we are using a modified version of my bootcamp Cordapp. Links:https://github.com/corda/bootcamp-openapi
Commands to build & start your nodes:
```
git clone https://github.com/corda/bootcamp-openapi.git
cd bootcamp-openapi
./gradlew deployNodes
./build/nodes/runnodes
```
If you need more information on running the Cordapp, please visit our docs at: https://docs.corda.net/tutorial-cordapp.html

Right now, you should have 4 nodes running in your terminal including PartyA, PartyB, PartyC and Notary. 
Go to the PartyA's node crash shell, you will see the the RPC connection address:
```
Advertised P2P messaging addresses      : localhost:10003
RPC connection address                  : localhost:10004
RPC admin connection address            : localhost:10005
```

## Srep 2: Start Braid StandAlone Server 
At the same directory run:
```
./gradlew startBraidPartyA
```

You should have Braid Server running on http://localhost:9004/. And you should see the following in you IntelliJ's console:
```
io.bluebank.braid.corda.rest.RestMounter - swagger json bound to http://localhost:9004/swagger.json
INFO  io.bluebank.braid.corda.rest.RestMounter - Swagger UI bound to http://localhost:9004/
INFO  io.bluebank.braid.corda.server.BraidCordaStandaloneServer - registering: /cordapps/bootcamp-cordapp/flows/bootcamp.TokenIssueFlowInitiator
INFO  io.bluebank.braid.corda.rest.RestMounter - REST end point bound to http://localhost:9004/api/rest
INFO  io.bluebank.braid.corda.BraidVerticle - BraidVerticle.setupRouter complete -- 2775 msec
io.bluebank.braid.corda.BraidVerticle - BraidVerticle.setupWebserver complete -- 5177 msec
INFO  io.bluebank.braid.corda.BraidVerticle - Braid server started on
INFO  io.bluebank.braid.corda.BraidVerticle - Braid service mounted on http://localhost:9004/api/
INFO  io.bluebank.braid.corda.BraidServer - Braid server started successfully on 9004
```

## Step 3: To continue the example, you have two options. 
- Option 1: Use pre-generated API Libary, and run the react front-end.
- Option 2: Use openapi generator to generate an API library yourself.

### Opt1: Use pre-generated API Libary, and run the react front-end.
Download the React front-end at https://github.com/corda/openapi-sample.git
```
git clone https://github.com/corda/openapi-sample.git
cd openapi-sample
npm install
```
At the `src/code-gen/io.generated.api` folder, it sits the pre-generated APIs.
Now, start the react webapp by running:
```
npm start
```
The app should be running localhost:3000. 
And now, you have your corda nodes talking to the React frontend using auto-generated API library!

### Opt2: Generate JS API Library using openapi-generator yourself
Generate your own version of API library, by running in terminal: 
```
openapi-generator generate -i http://localhost:10200/swagger.json -g javascript -o ./code-gen --api-package io.generated.api --model-package io.generated.model
```
- -i :The json file that is generated by Braid. (You can find address from IntelliJ's terminal)

- -g which languages do you want your API to be in, (Openapi support more than 30+ server languages)

- -o :where you are saving the API library

- --api-package io.generated.api --model-package io.generated.model: Renaming the package for better sighting. 

Now, drop this API library into your desired front-end framework, and now you can call the functions just as a normal API Library call!

Quick fix with the current braid build:
If you are doing the code-gen yourself, you need to change:
- Line#62 in NetworkApi.js needs to be change from `'x500-name': opts['x500Name']` to `'x500-name': opts['x500-name']` or change it at the tableList.js.
- Comment out all the APIs related to VaultQuery in `/code-gen/src/index.js` including both the import and export



