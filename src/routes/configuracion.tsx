import { createFileRoute } from '@tanstack/react-router';
import { Settings } from '@/components/tatapp/screens';
export const Route = createFileRoute('/configuracion')({
 head: () => ({ meta: [{ title: 'Configuración · Tatapp' }, {name:'description',content:'Ajusta tu perfil de demostración, texto y privacidad.'}, {property:'og:title',content:'Configuración · Tatapp'}, {property:'og:description',content:'Ajusta tu perfil de demostración, texto y privacidad.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: Settings,
});
