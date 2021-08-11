before(()=>{
      console.log("global hook start");
      process.env.ENV3='env3';
      console.log("global hook end");   
})