// // server.js
// const express = require('express');
// const { ModernWarfare2 } = require('call-of-duty-api');
// const app = express();
// const port = 4000;

// // Example route to get ModernWarfare2 data
// app.get('/api/warfare-data', async (req, res) => {
//     try {
//         // const unoId = req.query.unoId;  // Assume unoId is passed as a query parameter
//         const data = await ModernWarfare2.fullData();
//         res.json({ data: data });


//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
