import { createFileRoute } from '@tanstack/react-router';
import { Favorites } from '@/components/tatapp/screens';
export const Route = createFileRoute('/favoritos')({
 head: () => ({ meta: [{ title: 'Mis favoritos · Tatapp' }, {name:'description',content:'Tus accesos importantes, siempre a mano.'}, {property:'og:title',content:'Mis favoritos · Tatapp'}, {property:'og:description',content:'Tus accesos importantes, siempre a mano.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Favorites,
});
