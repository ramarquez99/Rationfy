import { useState, useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-url-polyfill/auto';
import { supabase } from '@/services/supabase/supabaseClient';
import { Session } from '@supabase/supabase-js';
import { Stack, Redirect, router } from "expo-router";

export default function HomeScreen() {
  const [ session, setSession ] = useState<Session | null>(null);

  useEffect(() => {
    console.log("SESSION EFFECT")
    supabase.auth.getSession().then(({ data: { session } }) => {
      if(session) {
        router.replace("/Admin/accounts" as any);
        // router.replace("/(app)");
      } else {
        console.log("Invalid user")
      };
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("LISTENER")
      if(session) {
        router.replace("/Admin/accounts" as any);
        // router.replace("/(app)");
      } else {
        router.replace("/(auth)/login");
      }
    });
  }, [])

  // if(!(session && session?.user)) {
  //   return <Redirect href={"/(auth)/login"}/>
  // }

  // return(<Redirect href={"/(app)/home"}/>)
}