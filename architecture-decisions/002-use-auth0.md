# Background
I am looking for a backend for mcgoooo-world, and the same as the frontend, i am looking to do this as cheaply as possible.

For this reason, i have chosen to use fly.io, as it has a free plan for a rails app, which is very generous, and a pay as you go model

I also want to show multi system authentication, and want to plan for a mobile app etc.

This will belong be a new repo `mcgoooo-world-rails-backend`


# decision making process

Ultimately, supabase, while can do a lot of things, was somewhat confusing, and seemed a bit overkill for what i need 

Rails has made a lot of improvements i want to try, namely 
[New built in authentications system generators](https://blog.appsignal.com/2024/10/07/whats-new-in-ruby-on-rails-8.html#built-in-authentication-made-simple) which should make users easy.

The three imrpovements i like are

the Solid Trifecta:
 - https://github.com/rails/solid_queue
 - https://github.com/rails/solid_cache
 - https://github.com/rails/solid_cable


I am also going to use sqlite, as i never have, and the baove tools should work with it i believe. 
The idea to be able to downlaod the databse as a file is quite appealing, and this is a low volume website.
At the first sign of trouble, switch this out for postgres


this along with the deployment tools
[Kamal](https://github.com/basecamp/kamal)
by Basecamp, rails inventors as well as
[Thruster](https://github.com/basecamp/thruster)

gives solid things to explore in the future, currently however i want to concentrate on features, rails generators wins, and quick feautes.

# Acceptance criteria

- A rails app is generated with basic users
- Find a way to securely get the User within the next.js app, Auth0 has a free plan


