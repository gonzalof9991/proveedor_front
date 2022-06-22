import { getAuth, onAuthStateChanged } from "firebase/auth";

const observantUser = () => {
  const auth = getAuth();
  const router = window.$nuxt.$router;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {

    }
  });
}
export default {
  observantUser
}
