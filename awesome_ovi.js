import { Name } from 'AwesomeDeveloper';
import { Skills, Interests, Passion } from 'CodingWorld';

const bio = {
  name: 'Ovi_ren',
  location: 'dhaka',
  profession: 'web_programmer',
  about: "i'm a writer. i write scripts.",
  skills: [
    'nodejs',
    'python',
    'linux',
    'language_explorer',
    'mongodb',
    'git',
    'problem_solver_through_internet'
  ],
  social: {
    github: 'https://github.com/iamovi',
    website: 'https://iamovi.github.io',
  },
  sayBye: () => {
    console.log('bye universe!');
  },
};

export default bio;