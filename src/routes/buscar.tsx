import { createFileRoute } from '@tanstack/react-router';
import { SearchScreen } from '@/components/tatapp/screens';
export const Route=createFileRoute('/buscar')({
 validateSearch:(search:Record<string,unknown>)=>({q:typeof search.q==='string'?search.q:''}),
 head:()=>({meta:[{title:'Buscar un trámite · Tatapp'},{name:'description',content:'Encuentra tus contenidos y trámites de demostración en Tatapp.'},{property:'og:title',content:'Buscar un trámite · Tatapp'},{property:'og:description',content:'Encuentra tus contenidos y trámites de demostración en Tatapp.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:SearchPage,
});
function SearchPage(){const {q}=Route.useSearch();return <SearchScreen query={q}/>;}
