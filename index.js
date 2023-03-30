import express from "express";
import rtsp from "rtsp-relay";

import GenerateCanvas from "./utils/GenerateCanvas.js";
import GetCameras from "./utils/GetCameras.js";

const app = express();
const { proxy, scriptUrl } = rtsp(app);

app.use(express.static("public"));

const cameras = GetCameras(proxy);

app.ws('/api/stream', (res, req) => {
    const { cameraId } = req.query;
    if(typeof(cameraId) === "undefined") return;
    cameras[cameraId](res);
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <script src='${scriptUrl}'></script>
                <link rel="stylesheet" href="assets/index.css" />
            </head>
            <body>
                ${cameras.map((_, index) => GenerateCanvas(index)).join("")}
            </body>
        </html>
    `);
});

app.listen(3000, () => console.log("Listening on port 3000"));