// Import the content and sidecomments
import { metadata as whoAreYouMetadata, content as whoAreYouContent } from '../content/blog/who-are-you/content';
import { metadata as awsInternshipMetadata, content as awsInternshipContent } from '../content/blog/aws-internship-2025/content';
import whoAreYouSideComments from '../content/sidecomments/who-are-you.json';
import awsInternshipSideComments from '../content/sidecomments/aws-internship-2025.json';

// Static data structure with imported content
const posts = [
  {
    ...whoAreYouMetadata,
    content: whoAreYouContent,
    sideComments: whoAreYouSideComments
  },
  {
    ...awsInternshipMetadata,
    content: awsInternshipContent,
    sideComments: awsInternshipSideComments
  }
];

// Get all blog post metadata for lists
export function getAllPosts() {
  return posts
    .filter(post => post.published)
    .sort((a, b) => {
      if (a.time_date < b.time_date) {
        return 1;
      } else {
        return -1;
      }
    });
}

// Get full blog post data including content and sidecomments
export async function getPostBySlug(slug) {
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  // Return the post data
  return {
    slug: post.slug,
    content: post.content, // Raw markdown content
    sideComments: post.sideComments,
    title: post.title,
    date: post.date,
    time_date: post.time_date,
    excerpt: post.excerpt,
    published: post.published
  };
}