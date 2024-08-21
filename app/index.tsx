import { useState, useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-url-polyfill/auto';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
import { Stack, Redirect } from "expo-router";

export default function HomeScreen() {
  const [ session, setSession ] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [])

  if(!session) {
    return <Redirect href={"/(auth)/login"}/>
  }

  return(<Redirect href={"/(app)/home"}/>)
}