npx create-react-app game-frontend --template typescript
npx create-react-app blog-frontend --template typescript
npx create-react-app account-frontend --template typescript

cd game-frontend
npm install --save --legacy-peer-deps tailwindcss postcss autoprefixer @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom react react-dom react-scripts typescript web-vitals react-elastic-carousel react-typed styled-components @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome 
npm i -D --legacy-peer-deps @tsconfig/node16 @types/jest @types/node @types/react @types/react-dom autoprefixer concurrently postcss postcss-nesting react-router-dom tailwindcss 
cd ../blog-frontend
npm install --save --legacy-peer-deps tailwindcss postcss autoprefixer @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom react react-dom react-scripts typescript web-vitals react-elastic-carousel react-typed styled-components @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome 
npm i -D --legacy-peer-deps @tsconfig/node16 @types/jest @types/node @types/react @types/react-dom autoprefixer concurrently postcss postcss-nesting react-router-dom tailwindcss 
cd ../account-frontend
npm install --save --legacy-peer-deps tailwindcss postcss autoprefixer @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom react react-dom react-scripts typescript web-vitals react-elastic-carousel react-typed styled-components @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome 
npm i -D --legacy-peer-deps @tsconfig/node16 @types/jest @types/node @types/react @types/react-dom autoprefixer concurrently postcss postcss-nesting react-router-dom tailwindcss 
cd ..

touch game-frontend/Dockerfile
touch blog-frontend/Dockerfile
touch account-frontend/Dockerfile

mkdir backend/search-service
cd  backend/search-service
npm init -y
cd ../..
touch backend/search-service/Dockerfile
mkdir backend/accounts-service
cd  backend/accounts-service
npm init -y
cd ../..
touch backend/accounts-service/Dockerfile
mkdir backend/multiplayer-coordination-service 
cd backend/multiplayer-coordination-service 
npm init -y
cd ../..
touch backend/multiplayer-coordination-service/Dockerfile
mkdir backend/database-service
cd backend/database-service
npm init -y
cd ../..
touch backend/database-service/Dockerfile
mkdir backend/event-orchestrator-service
cd backend/event-orchestrator-service
npm init -y
cd ../..
touch backend/event-orchestrator-service/Dockerfile
mkdir backend/front-api-service
cd backend/front-api-service
npm init -y
cd ../..
touch backend/front-api-service/Dockerfile
mkdir backend/proxy-service
cd backend/proxy-service
npm init -y
cd ../..
touch backend/proxy-service/Dockerfile
mkdir backend/transactions-api-service
cd backend/transactions-api-service
npm init -y
cd ../..
touch backend/transactions-api-service/Dockerfile

mkdir dev/certs dev/log dev/docker

touch docker-compose.yaml