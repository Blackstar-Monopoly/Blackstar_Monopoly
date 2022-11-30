start sass ./src/assets/css/index.scss ./src/assets/css/index_scss.css -w --embed-source-map -c --trace 
start npx tailwindcss -i ./src/assets/css/index_scss.css -o ./src/assets/css/index.css --watch
npm start 

