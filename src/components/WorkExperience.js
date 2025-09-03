import movesSmall from '../media/moves.png';
import movesMedium from '../media/moves2x.png';
import movesLarge from '../media/moves4x.png';
import tanolabsSmall from '../media/tanolabs.png';
import tanolabsMedium from '../media/tanolabs2x.png';
import tanolabsLarge from '../media/tanolabs4x.png';
import '../styles/Work.css';
import '../styles/Main.css';
import { Work } from './Work';

export const WorkExperience = () => {
  const allWork = [
    {
      workImageSmall: movesSmall,
      workImageMedium: movesMedium,
      workImageLarge: movesLarge,
      companyName: 'Moves',
      timeline: 'May 2022 - Dec 2023',
      role: 'Junior Software Developer | Intermediate Software Developer',
      description:
        'As a Software Developer, I collaborated closely with product, design, engineering, and QA teams to groom, implement, test, and support new features, creating a seamless integration and optimal user experience. I also successfully led initiatives and projects including major front-end re-brandings, consolidating and aggregating thousands of data points from multiple vendors to present an annual view, and introducing both an in-app update and in-app review nudge for the mobile app.',
      tools: [
        'TypeScript',
        'React Native',
        'Redux',
        'Node.js',
        'MongoDB',
        'Amplitude',
      ],
    },
    {
      workImageSmall: tanolabsSmall,
      workImageMedium: tanolabsMedium,
      workImageLarge: tanolabsLarge,
      companyName: 'Tano Labs',
      timeline: 'Oct 2024 - Jan 2025',
      role: 'Software Developer',
      description:
        'Leveraging OpenAI’s GPT-4, I helped create an adaptive system that delivered tailored car recommendations based on voice and text user input, improving user engagement and satisfaction. Additionally, I refined UI features such as the progress bar to track and reflect user responses in real time, ensuring clear indication of conversation flow and question completion.',
      tools: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI GPT-4'],
    },
  ];

  return (
    <div className="work-container">
      <div className="work-subheading-container">
        <h1 className="subheading">Work</h1>
      </div>
      {allWork.map((work) => {
        return (
          <div key={work.companyName}>
            <Work
              workImageSmall={work.workImageSmall}
              workImageMedium={work.workImageMedium}
              workImageLarge={work.workImageLarge}
              companyName={work.companyName}
              timeline={work.timeline}
              role={work.role}
              description={work.description}
              tools={work.tools}
            />
          </div>
        );
      })}
    </div>
  );
};
