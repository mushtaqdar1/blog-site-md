import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <hr className="my-4" />
      <div className="mt-6 space-y-8">
        <div className="w-full">
          <Image
            className="mx-auto rounded-full"
            src="/profile.png"
            width={200}
            height={200}
            alt="photo"
          />
        </div>
        <section>
          <h3 className="text-xl text-primary font-semibold mb-1">
            Scholarships
          </h3>
          <ul className="list-inside space-y-1">
            <li>British Council Scholarship [2022-23]</li>
            <li>Youth for India</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl text-primary font-semibold mb-1">
            Work Experiences
          </h3>
          <ol className="list-inside space-y-1">
            <li>GDC Khansahib: Apr 2023 - Nov 2023</li>
            <li>Chandigarh: Feb 2011 - Feb 2016</li>
            <li>Kashmir University: Mar 2016 - Jan 2019</li>
            <li>Kashmir University: May 2022 - Mar 2023</li>
            <li>GCET Kashmir: Feb 2024 - July 2024</li>
          </ol>
        </section>

        <section>
          <h3 className="text-xl text-primary font-semibold mb-1">Clients</h3>
          <ul className="list-inside space-y-1">
            <li>UIDAI-JK SSA</li>
            <li>JK Sainik School Manasbal</li>
            <li>GD-Goenka Srinagar</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl text-primary font-semibold mb-1">
            Certification
          </h3>
          <ul className="list-inside space-y-1">
            <li>Python programming Certified from NIT Warangal</li>
            <li>.NET Certified from Microsoft</li>
            <li>Tally ERP certified from Tally Solutions</li>
            <li>Member Certification from J&amp;K Engineers Association</li>
            <li>UIDAI GOI certified as a Supervisor for UIDAI</li>
          </ul>
        </section>

        <section className="border-l-4 border-primary pl-4 italic text-foreground/70">
          “Welcome to a world of Mushtaq’s musings, where every thought ignites
          curiosity and every word paints a story. This is not just a blog—it’s
          an experience, a journey into passion, perspective, and the
          extraordinary in the everyday.”
        </section>
      </div>
    </div>
  );
};
export default AboutPage;
