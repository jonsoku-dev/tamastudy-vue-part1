import store from "@/store";
import API from "@/utils/API";

store.subscribe((mutation, state) => {
  switch (mutation.type) {
    case "authModule/LOGIN_SUCCESS":
    case "authModule/REGISTER_SUCCESS":
      window.sessionStorage.setItem("token", mutation.payload);
      break;
    case "authModule/CLEAR_AUTH":
      window.sessionStorage.removeItem("token");
      break;
    default:
      break;
  }
});
