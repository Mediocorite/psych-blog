import app from "@/src/middleware/firebase";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { BlogPost } from "@/src/models/blogPost";

const db = getFirestore(app);

export async function getSinglePost(slug: string) {
  try {
    const docRef = doc(db, "blogs", slug);
    return await getDoc(docRef);
  } catch (error) {
    console.error("Error retrieving the document" + error);
  }
}
export async function postBlogArticle(blogData: BlogPost) {
  try {
    const docRef = await addDoc(collection(db, "blogs"), blogData);
    return Number(docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function getPosts(category: string) {
  try {
    const q = query(collection(db, "blogs"), where("category", "==", category));
    return await getDocs(q);
  } catch (error) {
    console.error("Query is broken");
  }
}
export async function getAllPosts() {
  try {
    return await getDocs(collection(db, "blogs"));
  } catch (error) {
    console.error("Something went wrong" + error);
  }
}
