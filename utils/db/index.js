import admin from 'firebase-admin';

var env = {
  tpye: process.env.NEXT_PUBLIC_TPYE,
  project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  auth_uri: process.env.NEXT_PUBLIC_AUTH_URL,
  token_uri: process.env.NEXT_PUBLIC_TOKEN_URL,
  auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT_X509_CERT_URL
}

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