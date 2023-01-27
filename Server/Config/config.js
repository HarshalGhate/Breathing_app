// var mysql=require('mysql')

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database:'demodata'
// })

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

//   module.exports=con;



//// if mariadb is installed on linux server overthrough the mysql need to use the below
//// And the below host is used for the aws db instance.

var mariadb = require('mariadb/callback')
const con = mariadb.createConnection({
  //----this section is for local host
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'breathing'
  // database: 'h'
  //----

  //// This secton is for the aws db instance
  // host: 'gsdemodata.cwfyesyekrve.ap-south-1.rds.amazonaws.com',
  // user: 'admin',
  // password: 'gswelcome1',

})

con.connect(err => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + con.threadId);
  }
});

module.exports = con;
