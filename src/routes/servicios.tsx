import { createFileRoute } from '@tanstack/react-router';
import { Services } from '@/components/tatapp/screens';
export const Route = createFileRoute('/servicios')({
 head: () => ({ meta: [{ title: 'Servicios a tu alcance · Tatapp' }, {name:'description',content:'Encuentra accesos útiles para tu día a día.'}, {property:'og:title',content:'Servicios a tu alcance · Tatapp'}, {property:'og:description',content:'Encuentra accesos útiles para tu día a día.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Services,
});
