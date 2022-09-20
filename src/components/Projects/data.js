
import projecManagementImage from '@/assets/images/projects/project_management.jpg'
import pomodoroAppImage from '@/assets/images/projects/pomodoro-app.png'
import mergeSortAnimationImage from '@/assets/images/projects/merge_sort_animation.jpg'

const projectsList =  [
  {
    name: 'Project Management',
    key: 'project-management',
    description: 'Is a system that aims to simplify the tracking of requests from a company to the IT department.',
    urls: {
      imageUrl: projecManagementImage,
      liveProjectUrl: '#',
      sourceCodeUrl: 'https://github.com/MiguelBarreraDev/project-management'
    }
  },
  {
    name: 'Merge Sort Animation',
    key: 'merge-sort-animation',
    description: 'It is an interactive application that shows, exemplifies, animates the MERGE-SORT sorting algorithm, whose purpose was to accentuate my knowledge about FRONT-END technologies and programming logic.',
    urls: {
      imageUrl: mergeSortAnimationImage,
      liveProjectUrl: 'https://miguelbarreradev.github.io/MergeSortAnimation/',
      sourceCodeUrl: 'https://github.com/MiguelBarreraDev/MergeSortAnimation'
    }
  },
  {
    name: 'Pomodoro',
    key: 'pomodoro',
    description: 'This application allows you to use the pomodoro technique, which allows you to increase your productivity at work, study, etc.',
    urls: {
      imageUrl: pomodoroAppImage,
      liveProjectUrl: 'https://pomodoro-app-virid.vercel.app',
      sourceCodeUrl: 'https://github.com/MiguelBarreraDev/pomodoro-reactjs'
    }
  }
]

export default projectsList
