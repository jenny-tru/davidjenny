// Configuration for the steps component on the homepage

const steps = {
  // Whether the component is enabled or not
  enabled: false,

  // The title text of the component
  title: 'Get your dream website up and running in no time with AstroWind.',

  // Subtitle text of the component
  subtitle: 'Lorem ipsum dolor sit amet',

  // Items to be displayed as steps
  items: [
    {
      title: 'Step 1: <span class="font-medium">Download</span>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.',
      icon: 'tabler:package',
    },
    {
      title: 'Step 2: <span class="font-medium">Add content</em>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: 'tabler:letter-case',
    },
    {
      title: 'Step 3: <span class="font-medium">Customize styles</span>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: 'tabler:paint',
    },
    {
      title: 'Ready!',
      icon: 'tabler:check',
    },
  ],

};

export default steps;
