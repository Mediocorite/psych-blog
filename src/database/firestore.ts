import app from "@/src/middleware/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { blogPost } from "../app/writer/model";

const db = getFirestore(app);

export async function getSinglePost(slug: string) {
  const docRef = doc(db, "blogs", slug);
  const docSnap = await getDoc(docRef);
  let documentData: blogPost | undefined;
  if (docSnap.exists()) {
    documentData = docSnap.data() as blogPost;
  } else {
    console.log("No such document!");
  }
  return documentData;
}
