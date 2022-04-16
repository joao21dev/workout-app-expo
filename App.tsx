import { StatusBar } from "expo-status-bar";
import useCacheResourses from "./hooks/useCacheResourses";

import Navigation from "./navigation";

export default function App() {
  const isLoaded = useCacheResourses();
  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
