const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-lazerbeam",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://pnvwm4rmhk.execute-api.us-east-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Cn4hsnDKH",
      APP_CLIENT_ID: "5nfaa0nuk2ccfv2cvglbqpo5mr",
      IDENTITY_POOL_ID: "us-east-1:b2ba2048-32a2-4bf3-91ba-e910b914f3d9",
    },
  };
  
  export default config;