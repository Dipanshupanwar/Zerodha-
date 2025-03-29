require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ Correct CORS Configuration (Place before routes)
app.use(
  cors({
    origin:["http://localhost:3000", "http://localhost:3001"], // ✅ Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // ✅ Required for cookies and authentication
  })
);

// ✅ Middleware (Place before defining routes)
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// ✅ Connect to MongoDB before starting the server
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.error("DB Connection Error:", err));

// ✅ Authentication Routes
app.use("/api/auth", authRoutes);

// ✅ Get all holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// ✅ Get all positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ✅ Get all orders
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

// ✅ Create a new order
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// ✅ Start Server (Do this at the end)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
