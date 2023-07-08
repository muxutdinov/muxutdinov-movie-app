import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyDtJBSBFJU4eNSR28-fQFrlGVQLprXSwik",
	authDomain: "muxutdinov-movie-app.firebaseapp.com",
	projectId: "muxutdinov-movie-app",
	storageBucket: "muxutdinov-movie-app.appspot.com",
	messagingSenderId: "483207839497",
	appId: "1:483207839497:web:26a7773e89a134ec659dd8"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
