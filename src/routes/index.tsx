import { createFileRoute } from '@tanstack/react-router';
import { HomeScreen } from '@/components/tatapp/home';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{ title: 'Inicio · Tatapp' }, {name:'description',content:'Tu día a día, más simple. Tu libreta, salud e información a mano.'}, {property:'og:title',content:'Inicio · Tatapp'}, {property:'og:description',content:'Tu día a día, más simple. Tu libreta, salud e información a mano.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }),
 component: HomeScreen,
});
