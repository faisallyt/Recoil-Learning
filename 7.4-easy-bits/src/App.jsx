// import { useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  refferals,
} from "./atom";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);
  const refferalAtomCount = useRecoilValue(refferals);
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Refferals ({refferalAtomCount})</button>

      <button
        onClick={() => {
          setMessagingAtomCount(messagingAtomCount + 1);
        }}>
        Me
      </button>
    </>
  );
}

export default App;
