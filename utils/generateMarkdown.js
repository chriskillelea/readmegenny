// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

  function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    ${license}`
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateMarkdown = async data => {
  console.log("generate markdown")
  console.log(data)

  let addSections = "";

  // TITLE
  if (data.title) { //it's required!!
    addSections += `# ${data.title}
`
  }
}

module.exports = generateMarkdown;
