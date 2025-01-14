const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "camping"
});
app.post('/booking', (req, res) => {
    const sql = "INSERT INTO booking (name,nic,phone_number,arrival_date,departure_date,location_number,number_of_nights,number_of_members) VALUES (?)";
    const values = [
        req.body.Name,
        req.body.Nic,
        req.body.phoneNumber,
        req.body.arrivalDate,
        req.body.departureDate,
        req.body.locationNumber,
        req.body.Nights,
        req.body.Members,
       
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error");
        }
        return res.json(data);
    });
});
app.get('/booking', (req, res) => {
    const currentDate = new Date().toISOString().split('T')[0]; 
    const sql = "SELECT * FROM booking WHERE departure_date >= ?";     db.query(sql, [currentDate], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error fetching bookings");
        }
        res.json(results);
    });
});
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
