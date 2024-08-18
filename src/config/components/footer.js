// Configuration for the footer component on all pages

// ----------- imports -----------
// import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const footerData = {
  // List of links to be displayed in the footer
  links: [
    {
      // List of links to be displayed in the section
      links: [
        { text: 'RSVP', href: '/rsvp' },
        { text: 'Schedule', href: '/schedule' },
        { text: 'Travel + Hotel', href: '/travel-and-hotel' },
        { text: 'Gifts', href: '/gifts' },
        { text: 'Photos', href: '/gallery' },
        { text: 'FAQs', href: '/faqs' },
      ],
    },
  ],

  // Secondary links to be displayed in the footer
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

  // The footnote to be displayed in the footer (can contain HTML)
  footNote: `
    Made by <a class="text-sage-800 hover:underline dark:text-gray-200" target="_blank" href="https://github.com/jenny-tru/davidjenny"> David and Jenny</a> with ❤️
  `,
};

export default footerData;
