import React, { useEffect, useState } from "react";
import { Ubuntu_700Bold, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";

import * as Font from "expo-font";

export default function useCacheResourses() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          Ubuntu_700Bold,
          Ubuntu_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
