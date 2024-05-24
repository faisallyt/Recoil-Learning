// import { useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  refferalsAtom,
  totalNotificationSelector,
} from "./atom";
import { useMemo } from "react";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);
  const refferalAtomCount = useRecoilValue(refferalsAtom);

  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     jobsAtomCount +
  //     notificationAtomCount +
  //     messagingAtomCount +
  //     refferalAtomCount
  //   );
  // }, [
  //   networkNotificationCount,
  //   jobsAtomCount,
  //   notificationAtomCount,
  //   messagingAtomCount,
  //   refferalAtomCount,
  // ]);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

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
          setMessagingAtomCount((c) => c + 1);
        }}>
        Me ({totalNotificationCount})
      </button>
    </>
  );
}

export default App;
