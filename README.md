### Faker JS

You can create massive amounts of fake data for your application. This is useful for testing, demoing, and populating databases.

### Mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

### Dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

### Models

The models are defined in the `models` folder. The models are defined using the mongoose schema.

#### How to use

```js
git clone https://github.com/gomeznahuel/faker-mongoose.git
cd faker-mongoose
pnpm install
```

#### Setup .env

```js
create a .env file in the root folder or edit the .env.example file and rename it to .env
fill the .env file with your credentials
```

#### How to run

```js
cd libs/faker or libs/mongoose
node --watch faker.js or mongoose.js
```