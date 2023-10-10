# Next.js


## next commands
- npm run dev -> start the developments server
- npm run build -> create production ready build
- npm run start -> serve production build

## Key Features
- Server Side Rendering
  - automatic page pre-rendering: Great for SEO and inital load
  - Blending client-side and server side: fetch data on server and render finished pages
- File-based Routing -> in-built file-based routing, no extra package required
  - defines pages and routes with files and folders instead of code
  - less code, less work, highly understandable
- Fullstack React App
  - easily ass backend (server-side) code to your Next/React apps
  - Storing data, getting data, authentication etc. can be added to react projects

## Types of Router in Next
- Pages Router
- App Router

### 01-first-app
- create app using following command
  - npx create-next-app@latest
  - kept all option 'No' asked by the command
  - not using App Router



### 02-events-app



#### Page Pre-Rendering & Data Fetching
- Static Generation
  - Pre-generate a page (with data prepared on the server-side) during build time
  - Pages are prepared ahead of time and can be cached by the server/CDN serving the app
  - export async function getStaticProps(context) { ... server side code }
  - Next JS pre-renders static file by default
- Server Side Rendering