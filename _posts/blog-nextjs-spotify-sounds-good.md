---
id: 8
title: 'Blog (NextJS) + Spotify: sounds good!'
date: '22-06-2022'
excerpt: 'Spotify Web API endpoints return JSON about music artists, albums, and tracks, directly from the Spotify Data Catalogue.'
cover: '/images/post8/cover.jpg'
time: '10 min'
category: 'Front end'
link: 'frontend'
language: 'en'

metakeyword: 'front end, web development, spotify'
metadescription: 'Spotify Web API endpoints return JSON about music artists, albums, and tracks, directly from the Spotify Data Catalogue.'
---

![Blog (NextJS) + Spotify: sounds good! -fullwidth](images/post8/cover.png)

Some time ago, I stumbled upon a fascinating feature on Lee Robinson's blog, where he, as Vercel's VP of Developer Experience, integrated the Next.js blog with his Spotify account. This integration intrigued me, and luckily, much like this blog, all the code was openly available on Github. You're welcome to explore the repository (which I highly recommend) or follow along with this article to understand how it operates.

![Unit testing example -fullwidth](images/post8/example1.png)

Primarily rooted in simple REST principles, the Spotify Web API endpoints furnish JSON metadata about music artists, albums, and tracks, directly sourced from the Spotify Data Catalogue. Leveraging Next.js, we can fashion a straightforward server-side application that taps into user-related data through the Spotify Web API.

Let's skip discussions about CSS or styling for now. The focal point of this article is to swiftly guide you through establishing this connection and reaching this stage:

![Unit testing example -fullwidth](images/post8/example2.png)


## Steps

- Create a Spotify App;
- Authentication and authorization;
- Using Spotify API
- Creating an API Route

## Create a Spotify App

Initially, we'll need to create a Spotify application to acquire the necessary credentials for authenticating with the API.<br/><br/>

- Go to your **[Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)** and log in.
- Click **Create an App**.
- Fill out the name and description and click **create**.
- Click **Show Client Secret**.
- Save your Client ID and Secret. You'll need these soon.
- Click **Edit Settings**.
- Add **http://localhost:3000** as a redirect URI.

And that is it! Uhul!

## **Authentication with refresh_token**

There are many types of authentication, but we are going with `refresh_token` because we only want to authenticate once.

![End to end testing example -fullwidth](images/post8/example3.png)


## Authorization Code

In the image above, you'll notice everything except the [scopes](https://developer.spotify.com/documentation/general/guides/authorization/scopes/). Scopes define what we aim to fetch from the Spotify API. Our application will request authorization by logging in with the relevant **scopes** we require. Here's an example of what the URL might resemble. Remember to replace the **`client_id`** and scopes with your own:

```
https://accounts.spotify.com/authorize?client_id=8e94bde7dd
b84a1f7a0e51bf3bc95be8&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20
user-top-read
```

Once redirected back to your designated redirect_uri, you'll notice a code query parameter in the URL. Make sure to save this value!
`

```
http://localhost:3000/callback?code=NApCCg..BkWtQ
```

Next, we'll proceed to obtain the refresh token. To do this, you'll need to generate a Base64 encoded string that combines the client ID and secret obtained earlier. Several online tools can help with this encoding process. The format should appear as client_id:client_secret. Here are a few suggestions:<br/><br/>

- [https://codebeautify.org/base64-encode](https://codebeautify.org/base64-encode)
- [https://www.base64encode.net/](https://www.base64encode.net/)
- [https://www.base64decode.org/](https://www.base64decode.org/)

Then,

```
curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
-d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

Upon encoding, you'll receive a JSON response containing a refresh_token. It's crucial to note: this token remains [valid indefinitely](https://github.com/spotify/web-api/issues/374) unless access is revoked. Therefore, it's essential to store this securely in an environment variable.

## Using Spotify API

To simplify our workflow and enhance code clarity, set up environment variables for: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN. If you're new to managing Next.js environment variables, refer to [this guide](https://nextjs.org/docs/basic-features/environment-variables).

With our client ID, client secret, and **refresh_token** in place, we're ready to request an access token.

```js
// lib/spotify.js

import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};
```

Utilize this access_token to securely request your top tracks, assuming you added the user-top-read scope initially.

```js
// lib/spotify.js

import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
```

## Creating an API Route

To test our communication with Spotify, start by creating a new file at **pages/api/now-playing.ts**. Subsequently, import the new function **getNowPLaying**.

```js
// pages/api/now-playing.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '../../lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map(_artist => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  })
}
```

This function retrieves all the song details if the user is actively playing a track. Otherwise, the function will return false for isPlaying. You can handle both conditions accordingly. If the user is playing a song, display the song details; otherwise, show "Not Playing".

```json
{
	album: "Once Upon a Time in the West",
	albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2731cb8ebda56d3dc6f926b1783",
	artist: "The White Buffalo",
	isPlaying: true,
	songUrl: "https://open.spotify.com/track/6p2yQve5trvfSlpIsMLYiS",
	title: "Stunt Driver"
}
```

That's it! Now pass this information to the relevant components and enjoy the outcome. If you have any questions or suggestions, feel free to reach out.
