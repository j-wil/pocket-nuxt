<div align="center">
<img
    width=40%
    src="app/public/images/logos/pocketnuxt.svg"
    alt="pocketnuxt logo"
/>

</div>

# Pocket Nuxt

Nuxt3 and PocketBase delivered in a simple binary that can be run anywhere.


## Stack
- PocketBase
- Nuxt3
- PrimeVue
- PrimeIcons


## Run Locally
This will run both a Nuxt3 dev server with hot reload and a pocketbase instance with a authentication and an api ready to go.


Clone the project

```bash
  git clone https://github.com/j-wil/pocket-nuxt
```

Go to the project directory

```bash
  cd pocket-nuxt
```

Install dependencies

```bash
  yarn install
```

Install pm2

```bash
  yarn global add pm2
```

Start the server

```bash
  yarn dev
```


## Deployment

This will create a single binary containing Nuxt and PocketBase for deployment.

```bash
  yarn build:prod
```


## Acknowledgements

 - [PocketBase](https://github.com/pocketbase/pocketbase)