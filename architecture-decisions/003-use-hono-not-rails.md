# Background
I tried using Rails, But the pricing for Fly.IO was larger than anticipated, and also not as fun as anticpated.
Cloudflare has an extremely generous free package, and i have had great success so far, so i am going to continue to use it.



# new architecture

I have chosen to use [Hono](https://hono.dev/) as my web framework, as it is built on web standards, apparently. It has the added benefit that the same code runs on all platforms, so i can switch providers.

Teh new repositiory will deposit the access token needed in a secure `httpOnly` cookie, and will provide an api for the first `app` whatsMyBpm.

I have deployed this to spotify.mcgooo.world and the code is here
https://github.com/mcgoooo/mcgoooo-world-spotify


I will continue to use this repo for decisions, so they are in one place
