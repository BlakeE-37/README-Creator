// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// choices: ['MIT License', 'IBM', 'ISC', 'Eclipse', 'Creative Commons', 'Apache', 'Mozilla', 'Perl'],
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License': return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
    case 'IBM': return ('[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)')
    case 'ISC': return ('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)')
    case 'Eclipse': return ('[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)')
    case 'Creative Commons': return ('[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)')
    case 'Apache': return ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
    case 'Mozilla': return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)')
    case 'Perl': return ('[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)')
    default: return ('')
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license)
  // let link = renderLicenseLink(data.license)
  // let licenseSection = renderLicenseSection(badge, link)

  return `
  ${badge}
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
[My Github Profile](${data.github})
For Questions, you can email me at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
