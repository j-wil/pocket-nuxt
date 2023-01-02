module.exports = {
    apps : [
      {
        name      : 'pocketbase',
        script    : 'go run pocketbase/main.go serve --dir ~/pocketbase',
        instances : 1,
        autorestart: false,
        "log_date_format" : "YYYY-MM-DD HH:mm:ss PocketBase: "
      },
      {
        name: 'nuxt dev',
        script: 'yarn dev:nuxt',
        instances: 1,
        autorestart: false,
        "log_date_format" : "YYYY-MM-DD HH:mm:ss Nuxt: "
      }
    ]
  }
  