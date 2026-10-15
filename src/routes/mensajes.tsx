import { createFileRoute } from '@tanstack/react-router';
import { Messages } from '@/components/tatapp/screens';
export const Route = createFileRoute('/mensajes')({
 head: () => ({ meta: [{ title: 'Mis mensajes · Tatapp' }, {name:'description',content:'Consulta mensajes ficticios organizados por categoría.'}, {property:'og:title',content:'Mis mensajes · Tatapp'}, {property:'og:description',content:'Consulta mensajes ficticios organizados por categoría.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Messages,
});
