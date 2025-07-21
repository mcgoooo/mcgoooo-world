# Elevator Pitch

A personal website of Andrew Hilton, also known as McGoooo for a couple of decades in my personal life.  
It will primarily be centred around, Bikes, Maps and Music to begin with. 

Primarily as an outlet for storing and displaying my own creative output. 

# Getting Started

## Copy dev ENV vars, and then edit.
```
cp .dev.vars.example .dev.vars
```

install prerequisites
```bash
npm install
npm run playwright:install
```


## Testing 

#### Jest - Unit Test
```
npm run test 
```
### E2E

Ensure the server is running before starting the E2E. These will be run by playwright, be sure to run `npm run playwright:install` to install prerequisites. 

Videos and traces will be kept only on failures. You can change these settings in the [playwright.config.ts](playwright.config.ts), and it might be wise to familiar yourself with this config. 

#### Playwright - E2E - With UI
```
npm run e2e:headed
```
#### Playwright - E2E - CLI
```
npm run e2e
```


# Motivation

I want a personal website for multiple side projects, to do some self directed learning, and hopefully show some development on my personal github, as it's usually locked behind corporate walls.

I really admire cloudflare and their general profile, and the recent work they have been doing. I also have a desire to learn more providers than the usual [`AWS`, `Google`, `Microsoft`] as a way of sharpening my skills. I believe cloudflare is big enough to be abel to provide as a stable service as the big three, if maybe a few more developmental challenges, and new concepts to learn. 

I am a frequent developer of Next.js, but feel the lock in for some features causes some pain points, and am a fan of open source, so i thought i would give [OpenNext's cloudflare adaptor](https://opennext.js.org/cloudflare) a shot.

For personal projects i was also finding aws expensive on the AWS Fargate/EC2 architecture i had for [minesweeper](https://github.com/mcgoooo/mine-sweeper/tree/master/infra#minesweeper-infra)



On Cloudflare, there is two ways to deploy Next.js<br/>
[cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/)<br/>
and the [new cloudflare workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/). <br/> 
you can see a supported list of features for [workers here](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/#nextjs-supported-features)

As a believer in `innovation tokens` and the following quote, i want to discard that for this project, as a purely learning experience. In professional work, i believe in embracing boredom, evolution over revolution, and fighting the rewrite.  

---
<br/>
"Let’s say every company gets about three innovation tokens. You can spend these however you want, but the supply is fixed for a long while. You might get a few more after you achieve a certain level of stability and maturity, but the general tendency is to overestimate the contents of your wallet. Clearly this model is approximate, but I think it helps.
<br/>
<br/>

Dan Mckinly - [choosing boring technology](https://mcfunley.com/choose-boring-technology)
<br/>
<br/>

# Architecture
I have general patterns i follow, and a wish list of features when it comes to how i develop apps. philosophical motivation can be found in a previous project [minesweeper](https://github.com/mcgoooo/mine-sweeper/tree/master/infra#minesweeper-infra) and i want to follow the same basic rules

 - On deploy to `main`, the `production` worker gets updated
 - Preview environments are created, and tests are run on them via github action
 - the deployment method should be a single script in `package.json` and able to be run locally as well on github, for debug, prototype and everything is on 🔥
 - it should eventually, when the time requires be a  mono-repo, which each product domain having it's own subdomain

we shall use the default architecture of cloudflare workers initially, which is quite nice and gives us a lot for free, such as preview environments.


we will use the following services

# Deployments

Deployments are Handled by github actions and can be seen in the `package.json`.

Deployments should be kept to a single line in the `package.json` and should have instructions for local deployment if necessary.

It uses cloudflare wrangler, and the open-next cloudflare adapter for deployment, more info [HERE](https://opennext.js.org/cloudflare)

# Preview deployments

there will be a preview deployment made for each app on pull request, as can be seen in the github actions output, this will also run the playwright end to end tests, and a cloudflare worker. This means you can test your changes on a live server on all pull requests, check the github aciton for output. 



# Overview of development 

## Step 1

### Get infra working, develop first app

This will be considered, a single developer working by himself, proving the concept, with full access to all developmental sharp knives, as if the main domain and product was not live yet, bootstrap stage. 

This will be considered a throwaway. in production, prototypes never make it to production, right? the non prototype will be within a mono repo.



  ❌ = not done
  ⏳ = in progress
  ✅ = done

 - [⏳ ] Document cold start for new developer
 - [⏳] Document technology
 - [✅] deployments working on https://mcgooo.world
 - [✅] Deployments working on preview environments
 - [✅] E2E, Playwright setup
 - [✅] Linting, Jest etc
 - [✅] Github actions
 - [⏳] Process pipeline and documentation (passing tests before merge etc)
 - [❌] Supabase setup
 - [❌] Get auth and users working via Supabase
 - [❌] Style, and daisyui or tailwind
 - [❌] Choose first app


### app ideas
The app ideas can be found in [ideas/README.md](ideas/README.md)






