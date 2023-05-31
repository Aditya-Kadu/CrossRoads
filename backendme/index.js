const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/Volunteer");
const Event = require("./db/events");
const NGO = require("./db/ngo");
const app = express();
const Reg = require("./db/registration");

app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let user = User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.userPassword;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.emailId && req.body.userPassword) {
    let user = await User.findOne(req.body).select("-userPassword");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "User not found" });
    }
  } else {
    resp.send({ result: "Enter all fields" });
  }
});
// NGO
app.post("/register-ngo", async (req, resp) => {
  let ngo = NGO(req.body);
  let result = await ngo.save();
  result = result.toObject();
  delete result.ngoPassword;
  resp.send(result);
});

app.post("/login-ngo", async (req, resp) => {
  if (req.body.ngoEmailId && req.body.ngoPassword) {
    let ngo = await NGO.findOne(req.body).select("-userPassword");
    if (ngo) {
      resp.send(ngo);
    } else {
      resp.send({ result: "User not found" });
    }
  } else {
    resp.send({ result: "Enter all fields" });
  }
});
// // //////////

// app.listen(3121);
// var http=require('http');

// var server=http.createServer(function(req,res){
//     res.end('test');
// });

// app.on('listening',function(){
//     console.log('ok, server is running');
// });

app.post("/add-event", async (req, resp) => {
  let event = new Event(req.body);
  let result = await event.save();
  resp.send(result);
});

app.get("/events", async (req, resp) => {
  const event = await Event.find();
  if (event.length > 0) {
    resp.send(event);
  } else {
    resp.send({ result: "No event found" });
  }
});

app.delete("/events/:id", async (req, resp) => {
  let result = await Event.deleteOne({ _id: req.params.id });
  resp.send(req.params);
});

app.get("/regevents/:id", async (req, resp) => {
  let result = await Event.findOne({ _id: req.params.id });
  resp.send(result);
});

app.post("/showreg", async (req, resp) => {
  let reg = new Reg(req.body);
  let result = await reg.save();
  resp.send(result);
});

app.get("/allreg", async (req, resp) => {
  const reg = await Reg.find();
  if (reg.length > 0) {
    resp.send(reg);
  } else {
    resp.send({ result: "No event found" });
  }
});

app.get("/eventsspecific/:userId", async (req, resp) => {
  const event = await Event.find({ userId: req.params.userId });
  if (event.length > 0) {
    resp.send(event);
  } else {
    resp.send({ result: "No event found" });
  }
});

app.get("/reg/:regId", async (req, resp) => {
  const reg = await Reg.find({ regId: req.params.regId });
  if (reg.length > 0) {
    resp.send(reg);
  } else {
    resp.send({ result: "No event found" });
  }
});

app.get("/regngo", async (req, resp) => {
  const ngo = await NGO.find();
  if (ngo.length > 0) {
    resp.send(ngo);
  } else {
    resp.send({ result: "No event found" });
  }
});

app.listen(3175);
