import { createFileRoute } from '@tanstack/react-router';
import { Information } from '@/components/tatapp/screens';
export const Route = createFileRoute('/mi-informacion')({
 head: () => ({ meta: [{ title: 'Mi información · Tatapp' }, {name:'description',content:'Tus datos de ejemplo y contactos de confianza.'}, {property:'og:title',content:'Mi información · Tatapp'}, {property:'og:description',content:'Tus datos de ejemplo y contactos de confianza.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Information,
});
