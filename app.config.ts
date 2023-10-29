export default defineAppConfig({
  docus: {
    title: 'Frontend Journey 101',
    description: 'Your Day-by-Day Frontend Journey from Absolute beginners to ultimate professional.',
    image: '/cover.png',
    socials: {
      twitter: 'shamscorner',
      github: 'shamscorner',
    },
    github: {
      dir: 'content/',
      branch: 'main',
      repo: 'frontend-journey',
      owner: 'shamscorner',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
