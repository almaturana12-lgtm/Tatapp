import { createFileRoute } from '@tanstack/react-router';
import { Notebook } from '@/components/tatapp/screens';
export const Route = createFileRoute('/libreta')({
 head: () => ({ meta: [{ title: 'Mi libreta · Tatapp' }, {name:'description',content:'Organiza tus tareas, recordatorios y notas en Tatapp.'}, {property:'og:title',content:'Mi libreta · Tatapp'}, {property:'og:description',content:'Organiza tus tareas, recordatorios y notas en Tatapp.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Notebook,
});
