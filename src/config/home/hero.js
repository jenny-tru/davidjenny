// Hero configuration on the homepage

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="fancy">BABY</span><span class="extra-fancy extra-fancy-spaced"> it's Cold Outside</span><span class="fancy"></span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="fancy">Please join us to celebrate our new baby due February 2026! Afternoon tea, tacos, snacks, raffles, and games with prizes are planned. RSVP by Dec 1.</span>`,
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: true,
    // CTA text
    text: 'RSVP Here',
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
    alt: 'David is holding a macchiato cup and Jenny holding a donut with a photo of an ultrasound on the table',
    fit: 'contain',
    background: 'transparent',
  },
};

export default hero;
