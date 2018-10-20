# Fenders Website
- The Fenders Perth Meetup website.

## TODO
Check issues for current items or create an issue if you have anything in mind.

## Meetup events
Events are pulled from the Meetup API using this endpoint:
https://www.meetup.com/meetup_api/docs/:urlname/events/#list

### Required
:urlname = Front-End-Web-Developers-Perth

This means supplying an env variable `MEETUP_API` in dev and prod.
Meetup API Key: https://secure.meetup.com/meetup_api/key/

## Running in development
`MEETUP_API={API KEY} yarn start`

## Git Workflow
Get in touch with one of the organisers to get access to the repository :smiley:
1. To make changes, create a new branch off `dev` as a `feature-branch` to perform the work
2. Submit a PR to merge your `feature-branch` into `dev`, and get someone from `fendersperth/fenders-website` to approve it (add them to the review and they'll get a notification)
3. Once someone has approved the request, merge it into `dev` :+1:
4. When you've merged it, someone from `fendersperth/fenders-website` will submit a PR to merge from `dev` into `master`
5. Someone else from `fendersperth/fenders-website` or one of the organisers will then approve the request to merge into `master` and deploy the site, pending whether status checks pass :tada:

## Getting approval access
Want to help us on the website? We'd love you to help!
Contact one of the Fenders Organisers and we can discuss adding you as a maintainer on the website
