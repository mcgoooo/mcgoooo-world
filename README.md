# Motivation

I want a personal website for multiple side projects, to do some self directed learning, and hopefully show some develpoment on my personal github, as it's usually locked behind corporate walls.

I really admire cloudflare and their general profile, and the recent work they have been doing. I also have a desire to learn more providers than the usual [`AWS`, `Google`, `Microsoft`] as a way of sharpening my skills. I believe cloudflare is big enough to be abel to provide as a stable service as the big three, if maybe a few more developmental challenges, and new concepts to learn. 

I am a frequent developer of Next.js, but feel the lock in for some features causes some pain points, and am a fan of open source, so i thought i would give [OpenNext's cloudflare adaptor](https://opennext.js.org/cloudflare) a shot.

For personal projects i was also finding aws expensive on the AWS fargate/EC2 architecture i had for [minesweeper](https://github.com/mcgoooo/mine-sweeper/tree/master/infra#minesweeper-infra)


On Cloudflare, there is two ways to deploy Next.js<br/>
[cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/)<br/>
and the [new cloudflare workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/). <br/> 
you can see a supported list of features for [workers here](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/#nextjs-supported-features)

As a believer in `innovation tokens` and the following quote, i want to discard that for this project, as a purely learning experience. In profresssional work, i believe in embracing boredom, evolution over revolution, and fighting the rewrite.  

---
<br/>
"Let’s say every company gets about three innovation tokens. You can spend these however you want, but the supply is fixed for a long while. You might get a few more after you achieve a certain level of stability and maturity, but the general tendency is to overestimate the contents of your wallet. Clearly this model is approximate, but I think it helps.
<br/>
<br/>

Dan Mckinly - [choosing boring technology](https://mcfunley.com/choose-boring-technology)
<br/>
<br/>

# Architecture
I have general patterns i follow, and a wish list of features when it comes to how i develop apps. philosphical motivation can be found in a previous project [minesweeper](https://github.com/mcgoooo/mine-sweeper/tree/master/infra#minesweeper-infra) and i want to follow the same basic rules

 - On deploy to `main`, the `production` worker gets updated
 - Preview environments are created, and tests are run on them via github action
 - the deployment method should be a single script in `package.json` and able to be run locally as well on github, for debug, prototype and everything is on 🔥
 - it should be hosted in a monorepo, which each app having a subdomain

we shall use the default arhcitecture of cloudflare workers initially, which is quite nice and gives us a lot for free, such as preview enviroments.

we will use the following services

# deployments

Deployments are Handled by github actions and can be seen in the `package.json`.

Deployments shoudl be kept to a single line in the `package.json` and should have instructions for local deployment if necesarry.

It uses cloudflare wrangler, and the open-next cloudlfare adapter for deployment as seen by TODO - INSERT DOC LINK TO OPEN NEXT ADAPTER

# preview deployments

there will be a preview deployment made for each app, as can be seen in the github actions output. the preview environment will deploy, and then cypress tests will. be run TODO - INSERT CYPRESS ETC

# testing 

TODO CYPRESS/PLAYWRIGHT etc

# Overview of development steps

## step 1
### Prototype stage

This will be considered, a single developer working by himself, proving the concept,w ith full acess to all developmental sharp knives, as if the main domain and product was not live yet, bootstrap stage. 


  ❌ = not done
  ⏳ = in progress
  ✅ = done

 - [⏳] Choose technology
 - [❌] document cold start for neew developer
 - [⏳] document technology
 - [✅] get deployments working on https://mcgooo.world
 - [✅] get deployments working on preview environments
 - [❌] move to a mono-repo setup
 - [⏳] get edge and caching setup (under 1 sec to australia, needs faster)
 - [⏳] get unit, e2e, cypress and smoke tests setup
 - [❌] supbabase setup
 - [⏳] github actions
 - [⏳] process pipeline and documentation (passing tests before merge etc)
 -  [❌] get auth and users working via supabase
  - [❌] style, and daiyui or tailwind
 - [❌] (stretch) add a kit to make a new next.js udner a sub domain in one command

## step 2
### first app

this stage will represent past the prototype stage, and will be considered an mvp. By this stage, the inidivudal developer prototype stage would be over, and the project should be able to introduce other develoeprs, if this was not a toy.

Development should be easy to onboard someone new as a developer, and have all the necesarry tools to easily make a new app.

the first app will be in the same vain as [sort Your Music](http://sortyourmusic.playlistmachinery.com/) and [Tune My Music](https://www.tunemymusic.com/) and it will be called `delete your music` and will have one purpose. 

This purpose is to easily delete, a lot of playlists. The motivation behind this is, i have over 800 playlists, duplciated across multiple platofroms. Now i use Tidal for DJ'ing via rekordbox. I want to be able to have a fully clean tidal, and be careful about when i import, and to be able to easily delete playlists, on bulk. This is so it shows up in rekordbox easily, and i can make dj'ing easier.



## step 3
deploy the above, as an actual app, and do minor promotion.


# further app ideas (in order i would build)

### second app

MapMyGpx

be able to export gpx from strava and komoot, and display them on a map and you can choose either open street map, google or apple, if all possible. This is to help a 1100 person whatsapp community i am part of, to be able to plan group rides together. 

### third app

MapMyMusic

using the two above features, take [`spotify`,`tidal`] currently playing and save that against your user. find a way to track your location, and take your currently playing, so you can remember songs that where playing, by location.

This is to make an interesting mashup. We do a ride every Tuesday, use this to map the ride. On the map, will show what song was playing when, so you can remember where you where on the ride, and get the song name by that. 

This may need to take a .cue file from rekordbox, but mvp will use spotify.

### fourth app

BackupMyPhotos

I want to backup my photos, And do it myself, as these are valuable memories. Build a personal photo upload. Take the metadata, get the location. Put it on the `mapMyMusic` as well.

Give the `lisbora` cycling communtiy a way to upload photos.

We then have a full interactive map of the ride, with photos, location, and the music that was playing then. 

## Getting Started

First, run the development server:

```bash
npm run dev
```
