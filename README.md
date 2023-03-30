# Camera App

#### With this simple **NodeJS** script you can view camera(s) in the web browser by accesing your local ip address (also you can forward it)

## <ins>Setup</ins>:
1. First of all clone this repository to your local machine
2. Install all dependencies with `npm install` command
3. Create a copy with `.env.example` and rename it to `.env`

### <ins>FAQ</ins>:

#

##### **Q**: How can I add a camera ?
##### **A**: You can add a camera by editing the `.env`

#

##### **Q**: Can I add more that one camera ?
##### **A**: Sure! You can add how many want, just follow the example from `.env` (for example `X = the camera ID`, so you need to declare it in `.env` in this format: `CAMERA_X_IP="value"`, `CAMERA_X_USER="value"`, `CAMERA_X_PASSWORD="value"`)

#

##### **Q**: Supported cameras ?
##### **A**: I only tested with the <A href="https://icseeapp.com/">iCSee</a> camera
