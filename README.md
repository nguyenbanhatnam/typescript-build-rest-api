dotnet new gitignore
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install -g yarn
yarn init
yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D

yarn dev
npx tsc --init
