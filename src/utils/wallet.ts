//import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });

const appDetails = {
  name: "Stacks Gov",
  icon: "/images/logo.png",
};

export const connectWallet = () => {
  showConnect({
    appDetails,
    userSession,
    onFinish: () => {
      handleConnect();
    },
    onCancel: () => {
      handleConnect(true);
    },
  });
};

const handleConnect = (canceled: boolean = false) => {
  //do stuff here
  if (canceled) {
    console.log("User canceled sign in");
  } else {
    console.log("User signed in");
  }
  window.location.reload();
};

export const getWalletAddress = async () => {
  if (userSession.isUserSignedIn()) {
    const userData = userSession.loadUserData();
    return userData.profile.stxAddress.mainnet;
  } else if (userSession.isSignInPending()) {
    await userSession.handlePendingSignIn();
    const userData = userSession.loadUserData();
    return userData.profile.stxAddress.mainnet;
  } else {
    console.log("unable to get wallet address");
    return null;
  }
};

export const signOut = () => {
  console.log("loggin out user");
  userSession.signUserOut();
  console.log("user signed out");
  window.location.reload();
};
