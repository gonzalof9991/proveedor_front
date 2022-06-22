import observantUser from "@/services/Firebase/observantUser";


export default function validateSession({redirect,re,res,route}){
  observantUser.observantUser();
}
