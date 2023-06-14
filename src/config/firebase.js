import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, query, orderBy, limit, getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8cYPrqvF-GmAL9SjjEPspohL0uQbqJbw",
  authDomain: "memorywarsgame.firebaseapp.com",
  projectId: "memorywarsgame",
  storageBucket: "memorywarsgame.appspot.com",
  messagingSenderId: "491419156025",
  appId: "1:491419156025:web:3cb91f7cfcdc06a08c17e8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

async function getScores() {
  let scoresArray = [];
  const q = query(
    collection(db, "Highscores"),
    orderBy('score', 'desc'),
    orderBy('time', 'asc'),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    scoresArray.push(doc.data());
  });
  return scoresArray;
};

async function addScore(entry) {
  const highscoresCollectionRef = collection(db, "Highscores")
  await addDoc(highscoresCollectionRef, {
    name: entry.name,
    score: entry.score,
    time: entry.time
  })
}

export {getScores, addScore}