import admin from 'firebase-admin';
import { env } from '../../next.config';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(env),
      databaseURL: "YOUR_DB_URL"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();