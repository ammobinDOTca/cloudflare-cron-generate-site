# cloudflare-cron-generate-site

## what
make post request on a cron schedule to cloudflare app generate to regenerate ammobin.ca (or whatever)

## why
will refresh the static html to include today's prices

## reqs
1. nodejs
2. wrangler
3. ```wrangler secret put cloudflare-cron-generate-site```

started from https://github.com/cloudflare/worker-typescript-template