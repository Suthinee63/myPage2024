
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
 const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'student_database',
 }); 

 // เปิด connection ไปที่ database
 connection.connect();

 connection.query('SELECT * from students where id =3', (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

 // ปิด connection
 connection.end();
});


// ทำ POST /students สำหรับข้อมูล student 1 คน
// JSON Body-Parser 
/*
{
    "name":"Oak",
    "age":"22",
    "phone":555,
    "email":"oak@email.com"
}
*/
app.post("/students", async (req, res) => {
  // ส่งข้อมูลผ่าน body-parser (Middleware)
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const email = req.body.email;

  const connection = await dbConn
  const rows = await connection.query("insert into students (name,age,phone,email) values('"+name+"','"+age+"',"+phone+",'"+email+"')")
  res.status(201).send(rows)
})

// PUT
/*
{
  "name":"Oak",
  "age":"22",
  "phone":555,
  "email":"oak@email.com"
}
*/
app.put("/students/:id", async (req, res) => {
  // รับ id จาก params
  const id = req.params.id;
  // ส่งข้อมูลผ่าน body-parser (Middleware)
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const email = req.body.email;

  const connection = await dbConn
  const rows = await connection.query("Update students set name = '"+name+"', age = '"+age+"', phone = "+phone+", email = '"+email+"' where id = "+id+" ")
  res.status(201).send(rows)
})



app.get("/query-1", async (req, res) => {
  const connection = await dbConn
  const rows = await connection.query('SELECT * from students')
  res.send(rows);
})

app.get("/query-2", async (req, res) => {
  const connection = await dbConn
  const rows = await connection.query('SELECT * from students')
  res.send(rows);
})

app.listen(3000, () => {
  console.log("Server is running at port 3000")
})

