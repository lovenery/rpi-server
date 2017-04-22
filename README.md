# RPi Server
part of my college independent study project

## Requirements
- Raspberry Pi 3 Model B
- Raspberry Pi Camera Module v2 (does NOT support USB camera)
- RaspiMJPEG [GitHub](https://github.com/roberttidey/userland/tree/master/host_applications/linux/apps/raspicam)
- Node.js 6.x or higher
- Redis
- https://github.com/lovenery/rpi-sensor

## Install
```bash
git clone git@github.com:lovenery/rpi-server.git
cd rpi-server
npm install
cp .env.example .env
npm start
```

## Deploy
```bash
sudo npm i pm2 -g
sudo pm2 start index.js --name="ha"
sudo pm2 restart ha
sudo pm2 list

sudo pm2 stop index.js
sudo pm2 delete index.js
sudo pm2 startup
sudo pm2 unstartup
```

## PIN
motor pin: 35, 37 && 38, 40
