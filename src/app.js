import express from 'express';

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', (req: any, res: any) => {
  console.log('hi')
  res.send("hi")
})

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"))
});
