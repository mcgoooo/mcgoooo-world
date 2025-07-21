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

# deployments

Deployments are Handled by github actions and can be seen in the `package.json`.

Deployments should be kept to a single line in the `package.json` and should have instructions for local deployment if necessary.

It uses cloudflare wrangler, and the open-next cloudflare adapter for deployment, more info [HERE](https://opennext.js.org/cloudflare)

# preview deployments

there will be a preview deployment made for each app on pull request, as can be seen in the github actions output, this will also run the playwright end to end tests, and a cloudflare worker. This means you can test your changes on a live server on all pull requests, check the github aciton for output. 

# testing 

Playwright tests run on all pull requests, and are also able to run locally, check the artifacts for output. If your PR fails, there should be a video and trace attached to the report in github actions. 

## Getting Started

##### copy dev ENV vars, and then edit.
Comments should point you to where to get them, how to set

```
cp .dev.vars.example .dev.vars
```

install prerequisites
```bash
npm install
npm run playwright:install
```

# Overview of development 

## step 1

### get infra working, develop first app

This will be considered, a single developer working by himself, proving the concept, with full access to all developmental sharp knives, as if the main domain and product was not live yet, bootstrap stage. 

This will be considered a throwaway. in production, prototypes never make it to production, right? the non prototype will be within a mono repo.



  ❌ = not done
  ⏳ = in progress
  ✅ = done

 - [❌] Document cold start for new developer
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






