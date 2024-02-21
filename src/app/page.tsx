import { getAllPosts } from "../database/firestore";
import { BlogPost } from "../models/blogPost";
import LeadCard from "../components/Card/lead";
import DefaultCard from "../components/Card/default";

export default async function Home() {
  const result = await getAllPosts();
  return (
    <div className="-m-6 flex flex-wrap justify-between">
      {result?.docs.map((docSnapshot, index) => {
        const document = docSnapshot.data() as BlogPost;
        const documentID = docSnapshot.id;
        if (index === 0) {
          return (
            <LeadCard
              key={index}
              blogPostData={document}
              articleID={documentID}
            />
          );
        }
        return (
          <DefaultCard
            key={index}
            blogPostData={document}
            articleID={documentID}
            index={index - 1}
          />
        );
      })}
    </div>
  );
}
