import { BlogPost } from "@/src/models/blogPost";
import * as loremIpsum from "lorem-ipsum"; // Make sure to install lorem-ipsum package
import categories from "@/public/category.json";
import { postBlogArticle } from "@/src/database/firestore";
// Function to generate a random Unsplash image URL
function getRandomUnsplashImageURL(): string {
  const width = 640;
  const height = 480;
  return `https://source.unsplash.com/random/${width}x${height}`;
}

// Function to create dummy blog post data
function createDummyBlogPost(category: string, sampleNumber: number): BlogPost {
  return {
    postTitle: `Sample ${sampleNumber} for ${category}`,
    postDate: {
      seconds: Date.now() / 1000,
      nanoseconds: 0,
    },
    blogText: loremIpsum.loremIpsum({
      count: 5, // Number of "words", "sentences", or "paragraphs"
      format: "plain", // "plain" or "html"
      units: "paragraphs", // You can change to "sentences" or "words"
    }),
    bannerLink: getRandomUnsplashImageURL(),
    category: category,
  };
}

// Function to seed the database
async function seedDatabase() {
  try {
    for (const category of Object.keys(categories)) {
      for (let i = 0; i < 10; i++) {
        const blogData = createDummyBlogPost(category, i + 1);
        const postId = await postBlogArticle(blogData);
        console.log(
          `Posted blog article with ID ${postId} in category ${category}`,
        );
      }
    }
    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }
}

// Call the seed function
seedDatabase();
