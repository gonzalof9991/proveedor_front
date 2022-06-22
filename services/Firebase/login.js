import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const loginFirebase = async (email,password) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
}

export default {
  loginFirebase
}

