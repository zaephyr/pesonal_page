---
title: FPL App
description: app gets data from official Fantasy Premier League API
live: https://immense-woodland-89360.herokuapp.com/
github: https://github.com/zaephyr/fpl_app/ 
color: green
---

<div class="bg-beige bg-opacity-40 px-10 py-1 rounded-lg text-sm mx-auto w-4/5  md:w-2/3">

#### _tl:dr_
 _I have made a test account for quick lookup of an app._
 
 **e-mail:** _test@testing.com_       
 **password:** _asdfasdf_


</div>

---

## Introduction
This is my first more complicated project that is not part of some curriculum. App uses official [Fantasy Premier League](https://fantasy.premierleague.com/) API to get some additional data, like showing choosen captains by FPL managers and ownership of footballers in specific league and a new version of the game.

### Endpoints used

> https://fantasy.premierleague.com/api/bootstrap-static/

On this endpoint you can get generic information:

* A summery of all 38 gameweeks
* Basic info on all 20 Premier League teams
* Basic info on all Premier League players


> https://fantasy.premierleague.com/api/entry/{manager-id}/event/{GW}/picks/

On this endpoint you can get picks from certain FPL manager for certain gameweek. Replace `{manager-id}` with, well, FPL player ID. For example here's an ID of one of the most famous FPL managers, a chess champion, Magnus Carlsen - `76862`. In place of `{GW}` choose a number between 1 and 38, would recommend earlier numbers as later gameweek might not happen yet.


> https://fantasy.premierleague.com/api/leagues-classic/{league-id}/standings/

FPL league's standings and it's overall info are avaible on this endpoint. Replace `{league-id}` with specific league's ID. For example, use an ID of one of the feirciest leagues - #Elite64 - `21004`.

## Built with
* [Nuxt.js](https://nuxtjs.org/)
* [Vue.js](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Firebase](https://firebase.google.com/)

## Usage

On left-side there's a menu. `Add username` where you can choose your username, it's required to join Free Hit League.
`FPL UserID` saves official FPL user ID, currently this is not really used in app so it's not required. `Add League` either takes FPL league ID (_number_) or Free Hit league name (_string_). When league is added additional options can be seen. FPL league name and/or Free Hit League.


### FPL standings
Choosing FPL league will rander said league standings.

<img src="https://res.cloudinary.com/dxeymvpta/image/upload/c_scale,w_500/v1609679938/portfolio/fpl_standings_xtsqwb.png">

* Player: FPL manager username
* GW points: registered points in current gameweek so far. API updates this around midnight.
* Total: calculated total points so far this season
* Live Total: placeholder for live points ie. points update even during the game.
* Captain: footballer chooses as captain by FPL managers. Captain provides double the points.

### FPL ownership
Selecting ownership tab will rander player ownership throughout said league.

<img src="https://res.cloudinary.com/dxeymvpta/image/upload/c_scale,w_500/v1609679937/portfolio/fpl_ownership_sepneq.png">

* Name: footballers name
* Owned: percentage of teams that own said footballer
* EO%: effective ownership - ownership + % of times said player was choosen as captain. For example if you own a player, that is not captained, with EO% > 100% you are gaining less points compared to the league average with said player.
* (C): percent of time said player is captained

### Free Hit League
Standings tab is the same as in FPL league. In `Pick a Team` tab you can pick a team of eleven player with a total maximum cost of 83 that you think will do best in next gameweek.

<img src="https://res.cloudinary.com/dxeymvpta/image/upload/c_scale,w_500/v1609679942/portfolio/pick-a-team_ol49ii.gif">



