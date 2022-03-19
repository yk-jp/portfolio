const linkedIn: string = process.env.LINKEDIN;
const gitHub: string = process.env.GITHUB;
const email: string = process.env.EMAIL;

const privateInfo = {
  linkedIn: linkedIn,
  gitHub: gitHub,
  email: email,
};

const config = {
  privateInfo: privateInfo,
};

export default config;
