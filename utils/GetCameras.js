import { config } from "dotenv";
import CameraHandler from "./CameraHandler.js";

const dotEnvConfig = config().parsed;

export default (proxy) => {
    const cameras = new Map();
    
    for (const [key, value] of Object.entries(dotEnvConfig)) {
        if (key.startsWith('CAMERA_') && /^\d+$/.test(key.split('_')[1])) {
            const cameraId = key.split('_')[1];
            if(!cameras.has(cameraId)) cameras.set(cameraId, {});
            const cameraPropertyType = key.split('_')[2];
            cameras.get(cameraId)[cameraPropertyType] = value;
        }
    }

    return Array.from(cameras.values())
        .filter(f => typeof(f["IP"]) !== "undefined" && typeof(f["USER"]) !== "undefined" && typeof(f["PASSWORD"]) !== "undefined")
        .map(({ IP, USER, PASSWORD }) => CameraHandler(proxy, USER, PASSWORD, IP))
};