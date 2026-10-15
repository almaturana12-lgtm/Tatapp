import { createFileRoute } from '@tanstack/react-router';
import { Health } from '@/components/tatapp/screens';
export const Route = createFileRoute('/salud')({
 head: () => ({ meta: [{ title: 'Mi salud · Tatapp' }, {name:'description',content:'Consulta tus horas médicas y documentos de demostración.'}, {property:'og:title',content:'Mi salud · Tatapp'}, {property:'og:description',content:'Consulta tus horas médicas y documentos de demostración.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Health,
});
