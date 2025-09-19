import blogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";

interface BlogDetailsPageProps {
  params: { slug: string };
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              {blog.title}
            </h2>

            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
              <div className="flex items-center">
                <div className="mr-4 relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={blog.author.image} alt={blog.author.name} fill />
                </div>
                <span className="text-base font-medium text-body-color">
                  By {blog.author.name}
                </span>
              </div>
            </div>

            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg">
              {blog.paragraphs}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {blog.tags.map((tag) => (
                <TagButton key={tag} text={tag} />
              ))}
            </div>

            <div className="mt-8">
              <SharePost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
