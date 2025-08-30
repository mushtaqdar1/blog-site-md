import React from 'react';
import Marquee from 'react-fast-marquee';

interface Announcement {
  title: string;
  description: string;
  url: string;
  image: string;
  publised_date: string;
}

export function BlogPage(): JSX.Element {
  return (
    <>
      <Marquee speed={50} gradient={false}>
        <h1>Welcome to the Announcements Page!</h1>
        {announcements.map((item: Announcement, index: number) => (
          <a
            key={index}
            href={item.url}
            style={{ marginRight: '40px', textDecoration: 'none' }}
          >
            <strong>{item.title}</strong>: {item.description}
          </a>
        ))}
      </Marquee>
    </>
  );
}

const announcements: Announcement[] = [
  {
    title: 'B.Tech 3rd',
    description:
      'SEMESTER_3 CSE_GOOGLE CLASS for  students',
    url: 'https://classroom.google.com/c/Nzc1MDA0MDM2ODg1,
    image: 'assets/poetry.png',
    publised_date: '2025-06-25',
  },
  {
    title: 'GCET 7th CSE_Minors 2025',
    description:
      '7th CSE_Minors for the information of the students',
    url: 'https://drive.google.com/file/d/1OZoLIPqGUEi1Bkf9FDoXal8WAU849iAY/edit',
    image: 'assets/poetry.png',
    publised_date: '2025-06-25',
  },
  {
    title: 'Tutorial_1 for the Python programming course scheduled',
    description: 'on April 21, 2025, Venue-CS1, Timing: 10:15am',
    url: 'https://classroom.google.com/w/NzUzMDI2NDMxNjk0/t/all',
    image: 'assets/poetry.png',
    publised_date: '2025-04-20',
  },
  {
    title: 'GCET 7th Industrial Training 2025',
    description:
      'CSE 7th Semester Industrial Training for the information of the students',
    url: 'https://docs.google.com/forms/d/1AuDGiHXPtv5EFwZt1KRVwQyR4CznEc7aAm9vnxdJwS0/preview',
    image: 'assets/poetry.png',
    publised_date: '2025-04-15',
  },
  {
    title: 'GCET 5th Semester SE/PP Topics',
    description:
      'Presentation topics for the 5th Semester Software Engineering and Python programming',
    url: 'https://docs.google.com/forms/d/1-H5io1u_zKjh-QINOnYm_tOycRrtsrhWZtb1Wgl6EG4/preview',
    image: 'assets/poetry.png',
    publised_date: '2025-05-26',
  },
  {
    title: 'GCET 5th Sem CSE Syllabus 2025',
    description:
      'Updated syllabus for the 2025 academic year for the CSE department',
    url: 'https://mushtaqdarblog.wordpress.com/wp-content/uploads/2025/04/cse-2022-onwards-syllabus-_mushtaq.pdf',
    image: 'assets/poetry.png',
    publised_date: '2025-05-10',
  },
];

export default announcements;
