import { createFileRoute } from '@tanstack/react-router';
import { Notifications } from '@/components/tatapp/screens';
export const Route = createFileRoute('/notificaciones')({
 head: () => ({ meta: [{ title: 'Notificaciones · Tatapp' }, {name:'description',content:'Tus recordatorios y avisos en un solo lugar.'}, {property:'og:title',content:'Notificaciones · Tatapp'}, {property:'og:description',content:'Tus recordatorios y avisos en un solo lugar.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Notifications,
});
