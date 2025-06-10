import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { trigger, style, transition, animate } from '@angular/animations';
@Component({
  standalone:false,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class ProjectsComponent {
  projects: Project[] = [
  {
    title: 'WordCraft AI',
    description: 'An AI-driven markdown enhancer.',
    technologies: ['Angular', 'Spring Boot', 'Flask'],
    link: 'https://github.com/J-DHARANEESH/Word-Craft-AI',
    image: 'assets/images/wordcraft.PNG'
  },
  {
    title: 'Pod-Stream',
    description: 'Online Podcast Application.',
    technologies: ['Angular','Java'],
    link: 'https://github.com/J-DHARANEESH/Pod-Stream',
    image: 'assets/images/pod-stream.PNG'
  },
  {
    title: 'Pressure Prophet',
    description: 'Pore Pressure Proxy Modelling.',
    technologies: ['Python'],
    link: 'https://github.com/J-DHARANEESH/Pore-Pressure-Proxy-Modelling',
    image: 'assets/images/pore-pressure.PNG'
  },
  {
    title: 'CrashCast',
    description: 'Accident Severity Predictor.',
    technologies: ['Python', 'Flask'],
    link: 'https://github.com/J-DHARANEESH/CrashCast-Accident-Severity-Predictor',
    image: 'assets/images/crashcast.png'
  },
  {
    title: 'BioBits & Qubits',
    description: 'Genomic Clustering: Classical vs Quantum ML.',
    technologies: ['Python','Qiskit'],
    link: 'https://github.com/J-DHARANEESH/Genomic-Clustering-Classical-vs-Quantum-Inspired-Machine-Learning-on-HMP-Data',
    image: '../assets/images/genomic-clustering.PNG'
  }
];


  openLink(url: string) {
  window.open(url, '_blank');
}

}
