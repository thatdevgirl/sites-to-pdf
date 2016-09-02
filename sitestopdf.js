var siteToPdf = {
  page: require('webpage').create(),

  /* -----
   * Function to set up the page.
   */

  setup: function() {
    this.page.paperSize = {
      width: '8.5in',
      height: '11in',
      margin: '0.5in'
    }
  },

  /* -----
   * Function to get list of sites from a file and create array of sites.
   */

  getSites: function() {
    var fs = require('fs');
    var system = require('system');

    if (system.args.length === 1) {
      console.log('Usage: ./phantomjs sitestopdf.js SITEFILE');
      phantom.exit();
    }

    // Open the file containing list of sites.
    var file = fs.open(system.args[1], 'r');
    var contents = file.read();

    // Split the file into an array.
    this.sites = contents.trim().split(/[\r\n]+/g);
  },

  /* -----
   * Render function to traverse the sites array and create individual PDFs.
   */

  render: function(i) {
    var _this = this;

    this.page.open(this.sites[i], function() {
      var filename = 'pdfs/site_' + i + '.pdf';

      // Create the PDF.
      _this.page.render(filename, {format: 'pdf'});

      // Increment the counter.
      i++;

      // If the counter is less than the array length, render the next PDF.
      if (i < _this.sites.length) {
        _this.render(i);
      } else {
        // Otherwise, exit.
        phantom.exit();
      }
    });
  },

  /* -----
   * Init function.
   */

  init: function() {
    this.getSites();
    this.setup();
    this.render(0);
  }
}

siteToPdf.init();
