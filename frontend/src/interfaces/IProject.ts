export default interface IProject {
  image: string;
  title: string;
  description: string;
  whatILearnt: string;
  projectDifficulties: string;
  techStack: string[];
  link: {
    visitWebsite: string | null;
    gitHub: string;
  }
}