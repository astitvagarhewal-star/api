// This function runs every time someone visits /api/chat
export default function handler(req, res) {
  // res.status(200) means "Everything is OK"
  // .json(...) is the data we are sending back
  res.status(200).json({ 
    reply: "Hello from Nexa",
    methodUsed: req.method // This tells you if it was a GET or POST
  });
}
