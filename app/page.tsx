import db from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";

type AuthorData = {
  name: string;
  image: string;
  id: string;
};

async function getAuthor() {
  const colRef = collection(db, "author");

  const snapshots = await getDocs(colRef);

  const docs = snapshots.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;

    return data;
  });

  return docs as AuthorData[];
}

export default async function HomePage() {
  const author = await getAuthor();
  return (
    <div>
      <h1>Home Page</h1>
      {author.map((au) => {
        return (
          <div key={au.id}>
            <h1>{au.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
