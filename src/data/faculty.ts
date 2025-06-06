export interface Publication {
  title: string;
  journal?: string;
  year?: number;
  link?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  photoUrl: string;
  email: string;
  phone?: string;
  office?: string;
  bio: string;
  academicQualifications: string[];
  researchInterests: string[];
  publications: Publication[];
}

export const facultyData: FacultyMember[] = [
  {
    id: 'dr-jane-doe',
    name: 'Dr. Jane Doe',
    designation: 'Professor & Head of Department',
    photoUrl: 'https://placehold.co/400x400.png',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    office: 'Room A-101, Dental Studies Building',
    bio: 'Dr. Jane Doe is a leading expert in Orthodontics with over 20 years of experience in research and clinical practice. She is passionate about innovative dental education and mentorship.',
    academicQualifications: [
      'DDS, University of Advanced Dentistry',
      'MS in Orthodontics, Dental Institute of Excellence',
      'PhD in Craniofacial Biology, Research University',
    ],
    researchInterests: [
      'Digital Orthodontics',
      'Craniofacial Growth and Development',
      'Biomaterials in Dentistry',
    ],
    publications: [
      { title: 'Advancements in 3D-Printed Orthodontic Appliances', journal: 'Journal of Digital Dentistry', year: 2023, link: '#' },
      { title: 'Long-term Stability of Orthognathic Surgery', journal: 'Craniofacial Surgery Review', year: 2021, link: '#' },
      { title: 'The Role of Genetics in Malocclusion', journal: 'Dental Genetics Today', year: 2020 },
    ],
  },
  {
    id: 'dr-john-smith',
    name: 'Dr. John Smith',
    designation: 'Associate Professor, Periodontics',
    photoUrl: 'https://placehold.co/400x400.png',
    email: 'john.smith@example.com',
    phone: '123-456-7891',
    office: 'Room B-205, Clinical Wing',
    bio: 'Dr. John Smith specializes in Periodontal medicine and implant surgery. His research focuses on regenerative therapies for periodontal diseases and their systemic impact.',
    academicQualifications: [
      'BDS, National Dental College',
      'MSc in Periodontology, International University of Health Sciences',
      'Fellowship in Implant Dentistry',
    ],
    researchInterests: [
      'Periodontal Regeneration',
      'Implant Osseointegration',
      'Oral-Systemic Health Links',
      'Laser applications in Periodontics',
    ],
    publications: [
      { title: 'Guided Tissue Regeneration: A 10-Year Follow-up', journal: 'Journal of Periodontal Research', year: 2022, link: '#' },
      { title: 'Impact of Diabetes on Implant Success Rates', journal: 'Clinical Implant Dentistry', year: 2020 },
      { title: 'Novel Approaches to Treating Peri-implantitis', journal: 'Periodontology Now', year: 2019, link: '#' },
    ],
  },
  {
    id: 'dr-emily-white',
    name: 'Dr. Emily White',
    designation: 'Assistant Professor, Pediatric Dentistry',
    photoUrl: 'https://placehold.co/400x400.png',
    email: 'emily.white@example.com',
    phone: '123-456-7892',
    office: 'Room C-112, Children\'s Dental Center',
    bio: 'Dr. Emily White is dedicated to providing comprehensive oral healthcare for children from infancy through adolescence. Her work emphasizes preventive care and behavior management techniques.',
    academicQualifications: [
      'DMD, University of Dental Medicine',
      'Certificate in Pediatric Dentistry, Children\'s Hospital Institute',
    ],
    researchInterests: [
      'Early Childhood Caries Prevention',
      'Behavioral Guidance in Pediatric Patients',
      'Dental Pulp Therapy in Primary Teeth',
    ],
    publications: [
      { title: 'Effectiveness of Silver Diamine Fluoride in Caries Arrest', journal: 'Pediatric Dentistry Today', year: 2023, link: '#' },
      { title: 'Non-Pharmacological Behavior Management Strategies', journal: 'Journal of Dentistry for Children', year: 2021 },
    ],
  },
  {
    id: 'dr-michael-brown',
    name: 'Dr. Michael Brown',
    designation: 'Clinical Instructor, Endodontics',
    photoUrl: 'https://placehold.co/400x400.png',
    email: 'michael.brown@example.com',
    office: 'Room D-05, Advanced Endodontics Clinic',
    bio: 'Dr. Michael Brown is an experienced endodontist focused on complex root canal therapies and microsurgical techniques. He is committed to training the next generation of endodontic specialists.',
    academicQualifications: [
      'DDS, Premier Dental School',
      'MS in Endodontics, Institute of Dental Specialization',
    ],
    researchInterests: [
      'Root Canal Instrumentation Techniques',
      'Regenerative Endodontics',
      'Pain Management in Endodontic Therapy',
    ],
    publications: [
      { title: 'Comparative Study of Nickel-Titanium Rotary Systems', journal: 'Endodontic Practice US', year: 2022, link: '#' },
      { title: 'Vital Pulp Therapy: Current Concepts', journal: 'Journal of Endodontics', year: 2020 },
    ],
  },
];
