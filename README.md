# A simple YouTube clone built with ReactJS

---

# How to run -

- Clone the repo to your local machine
- Run `npm i` from a terminal in the project directory to install dependencies
- Now run `npm start` to open the app in a local server

---

## Features -

- YouTube home feed with videos from the YouTube API (rate limited to 50 videos at a time)
- Single video page with video watch functionality and a "related" videos column at the right to navigate to other videos
- Search funcionality that auto-populates with real-time search suggestions from YouTube/Google
- Debouncing implemented in the search bar to optimise API calls
- Routing between pages handled by React Router v6
- Two fun, demo paths in the sidebar to get a quick intro to `useMemo` and `useRef` hook - documented as part of the learn-by-building process
