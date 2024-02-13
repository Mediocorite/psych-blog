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
  const docRef = doc(db, "blogs", slug);
  const docSnap = await getDoc(docRef);
  let documentData: BlogPost | undefined;
  if (docSnap.exists()) {
    documentData = docSnap.data() as BlogPost;
  } else {
    console.log("No such document!");
  }
  return documentData;
}
export async function postBlogArticle(blogData: BlogPost) {
  const ERROR_NUMBER = -1;
  let docID: number = ERROR_NUMBER;
  try {
    const docRef = await addDoc(collection(db, "blogs"), blogData);
    console.log("Document written with ID: ", docRef.id);
    docID = Number(docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return docID;
}
export async function getPosts(category: string) {
  try {
    const q = query(collection(db, "blogs"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch (error) {
    console.error("Query is broken");
  }
}
