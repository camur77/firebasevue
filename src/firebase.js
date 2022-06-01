import firebase from "firebase/compat/app"
import "firebase/compat/database"

let config = {



}
;

firebase.initializeApp(config);

export default firebase.database();