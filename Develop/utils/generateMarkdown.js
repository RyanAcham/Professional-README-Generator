// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseOption = `${data.license}`;
  
  let licenseLink = '';
  //check license choice
  if (licenseOption === 'GNU AGPLv3') {
    licenseOption = 'GNUAGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenseOption === 'GNU GPLv3') {
    licenseOption = 'GNUGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseOption === 'GNU LGPLv3') {
    licenseOption = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseOption = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseOption === 'Apache License 2.0') {
    licenseOption = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOption === 'Boost Software License 1.0') {
    licenseOption = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseOption === 'The Unlicense') {
    licenseOption = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };
  //im just going to use template literals to add stuff to instead of using fucntions
  let markdownTemplate =
    
  //title, badge, and description
    
  `# ${data.title}
  ## Description
  ${data.desc}
  ![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)
  More badges at [shields.io](https://shields.io)

  ## Table of Contents
  * [Installation](#install)
  * [Usage](#instruct)
  * [Contribution](#contr)
  * [Testing](#test)
  * [Contact Info](#contact)
  * [License](#license)
  ## Installation
    _Follow the steps to install:_

    ${data.install}
  
  ## Usage
    _Follow the steps to use:_

    ${data.instruct}
   
  ## Contribution
    _Follow the steps to contribute:_

    ${data.contr}
  ## Usage
    _Follow the steps to test:_

    ${data.test}
  ## Contact Info
    _How to contact the author(s):_

    ${data.contact}

    Git: [${data.user}](https:/gitub.com/${data.user})
    Email: [${data.email}](mailto:${data.email})

  ## Liscense

    _This program is under the ${data.license} liscense._

    For more information, please see [liscense description](${licenseLink}).
  `;
  return markdownTemplate;
}

module.exports = generateMarkdown;
