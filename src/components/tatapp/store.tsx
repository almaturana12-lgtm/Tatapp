import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { initialState, type DemoState } from '@/lib/tatapp-data';
const Context = createContext<{state:DemoState; update:(fn:(s:DemoState)=>DemoState)=>void; saved:string; notify:(text:string)=>void} | null>(null);
export function DemoProvider({children}:{children:ReactNode}) {
 const [state,setState]=useState(initialState); const [ready,setReady]=useState(false); const [saved,setSaved]=useState('');
 useEffect(()=>{try { const value=localStorage.getItem('tatapp-demo-v1'); if(value) { const parsed=JSON.parse(value); if(Array.isArray(parsed.tasks)&&Array.isArray(parsed.notes)) setState({...initialState,...parsed}); } } catch {setSaved('No pudimos recuperar la demostración guardada.');} setReady(true);},[]);
 useEffect(()=>{if(ready)try {localStorage.setItem('tatapp-demo-v1',JSON.stringify(state));}catch{setSaved('No se pudo guardar en este dispositivo.');}},[state,ready]);
 useEffect(()=>{if(!saved)return;const timer=setTimeout(()=>setSaved(''),5000);return()=>clearTimeout(timer);},[saved]);
 return <Context.Provider value={{state,update:setState,saved,notify:setSaved}}><div className={state.largeText?'tatapp large-text':'tatapp'}>{children}{saved&&<div className="save-notice" role="status">{saved}</div>}</div></Context.Provider>;
}
export function useDemo(){const value=useContext(Context);if(!value)throw new Error('DemoProvider required');return value;}
