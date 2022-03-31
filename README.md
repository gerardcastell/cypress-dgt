# cypress-dgt

First of all, we need to install dependencies so run the following command:

```
npm i
```

To exec the script to visit the DGT page and download the previous month data run the command below. The download zip may be found at **_"cypress/downloads"_**
:

```
npm run start
```

To upload first file generated at **_"cypress/downloads"_** to AWS S3:

```
npm run upload
```

To exec test in watch mode run:

```
npm run watch
```
