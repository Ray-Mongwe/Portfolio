export const projects = [
  {
    title: 'Afrosurance Client Test',
    tagline: 'Online assessment platform with an admin dashboard',
    details: 'A full-stack assessment platform for running candidate tests end to end. Admins create timed tests, schedule when they go live and close, and share them through access codes, links and QR codes. Candidates can take a test on any device, and their progress autosaves, so a refresh does not lose their place. Scoring is done on the server, and admins get a dashboard with analytics, a full review history for every submission, batch access codes for tracking groups of candidates, and a CSV export that protects against spreadsheet formula injection. I built the whole stack: the Vue 3 frontend, the Express REST API, the MongoDB data layer, and JWT-based admin authentication.',
    tech: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Vue 3', icon: 'devicon-vuejs-plain colored' },
      { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      { name: 'Axios', icon: 'devicon-axios-plain colored' },
      { name: 'Node', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Mongoose', icon: 'devicon-mongoose-original colored' }
    ],
    image: '/raslogo.png',
    liveUrl: 'https://mock-afrosurance-client-test.vercel.app/',
    expanded: false
},
  {
    title: 'Heart Of Mopani',
    tagline: 'Where culture, nature, and local life meet',
    details: 'Heart Of Mopani is a tourism platform showcasing travel experiences in the Mopani region. The site features destination listings, itinerary planning, and a contact form. Built with Next.js for server side rendering which is important for SEO on a content heavy tourism site. PostgreSQL manages the structured data for destinations, bookings, and user accounts.',
    tech: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Next', icon: 'devicon-nextjs-plain' },
      { name: 'Node', icon: 'devicon-nodejs-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'Express', icon: 'devicon-express-original colored' }
    ],
    image: '/Firefly_RemoveBackground.png',
    liveUrl: 'https://mopani-travel.vercel.app/',
    expanded: false
},
  {
    title: 'Afrosurance',
    tagline: 'Fintech for the African informal economy',
    details: 'Afrosurance is a fintech platform built to bridge the gap between formal financial services and the African rural and informal economy. The platform handles user authentication, policy management, and payment integration. The backend was built by the team on Node, MongoDB and GraphQL. I built the entire frontend on my own, including the components, the connection to the REST API, and the dashboard UI.',
    tech: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Vue', icon: 'devicon-vuejs-plain colored' },
      { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
      { name: 'Vuetify', icon: 'devicon-vuetify-plain colored' },
      { name: 'Axios', icon: 'devicon-axios-plain colored' }
    ],
    image: '/raslogo.png',
    liveUrl: 'https://afrosurance.vercel.app/#/',
    expanded: false
},
  {
  title: 'Yarona Motion Pictures',
  tagline: 'Sharing your vision, one frame at a time',
  details: 'Yarona Motion Pictures is a portfolio and booking site for a film production company. Currently a frontend-focused build showcasing their work and services. The stack is intentionally lean since the site is mostly static content, but built with scalability in mind. Next.js, Express and PostgreSQL are included to support future features like a dynamic gallery CMS, event listings, and a booking system as the client grows.',
  tech: [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Node', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express', icon: 'devicon-express-original colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' }
  ],
  image: '/coming-soon.jpg',
  liveUrl: '#',
  expanded: false
}
]