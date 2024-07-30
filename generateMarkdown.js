// Function to render the license badge
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL 3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
      return '';
    }
}

// Function to render the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL 3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
    } else {
      return '';
    }
}

// Function to render the license section of README
function renderLicenseSection(license) {
  if (license) {
      return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license. ${renderLicenseBadge(license)}`;
  } else {
      return '';
  }
};


// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, tableOfContents, installation, usage, license, contributing, tests, email, questions } = data;

  // Generate Table of Contents if it's provided
  const tableOfContentsContent = tableOfContents ? `## Table of Contents\n${tableOfContents}\n` : '';

  // Generate License section if license is provided
  const licenseSection = renderLicenseSection(license);

  return `# ${title}

## Description
${description}

${tableOfContentsContent}

## Installation
${installation}

## Usage
${usage}

${licenseSection}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, please reach out to [${email}](mailto:${email}).

## Additional Information
${questions}
`;
};

export default generateMarkdown;