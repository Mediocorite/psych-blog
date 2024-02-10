"use server";
import app from "@/src/middleware/firebase";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { blogPost } from "./model";

export async function postBlogArticle(blogData: blogPost) {
  const db = getFirestore(app);
  try {
    const docRef = await addDoc(collection(db, "blogs"), blogData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
