start sass ./src/Assets/css/index.scss ./src/Assets/css/index_scss.css -w --embed-source-map -c --trace 
start npx tailwindcss -i ./src/Assets/css/index_scss.css -o ./src/Assets/css/index.css --watch
npm start 