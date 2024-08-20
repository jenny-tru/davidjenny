// Hero configuration on the homepage

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="fancy">David</span><span class="extra-fancy extra-fancy-spaced"> & </span><span class="fancy">Jenny</span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="fancy">Saturday November 16, 2024! Please join us by RSVP'ing.</span>`,
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: true,
    // CTA text
    text: 'RSVP',
    // CTA link
    href: '/rsvp',
    // Target html <a> tag
    target: '_self',
    // Rel html <a> tag
    rel: 'noopener',
    // CTA icon
    icon: 'tabler:calendar',
  },

  // Second CTA block (optional)
  callToAction2: {
    // Enable or disable second CTA
    enabled: false,
    // CTA text
    text: 'Learn more',
    // CTA link
    href: '#features',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    icon: 'tabler:book',
  },

  // Hero image
  image: {
    // If the image should be enabled or not
    enabled: true,
    // Image source
    src: import('~/assets/images/hero.jpg'),
    // Image alt text
    alt: 'David and Jenny in the swiss mountains at interlaken',
  },
};

export default hero;
