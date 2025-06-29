import content from '@/data/content';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">My Blogs</h1>
      <hr className="my-4" />
      <div className="flex gap-2 flex-wrap">
        {content.map((item) => (
          <div
            key={item.title}
            className="max-w-md mx-auto rounded-lg shadow-md p-6 mb-6 border bg-primary/10"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className=" mt-2">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm">
                Published on:{' '}
                {new Date(item.publised_date).toLocaleDateString()}
              </span>
              <a
                href={item.url}
                className=" hover:underline block text-primary"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
