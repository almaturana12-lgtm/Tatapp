import { Link } from '@tanstack/react-router';
import { BookOpen, Heart, UserRound, Store, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sections } from '@/lib/tatapp-data';
import { useDemo } from './store';
const icons={book:BookOpen,heart:Heart,user:UserRound,shop:Store};
export function HomeScreen(){const {state,update}=useDemo();const pending=state.tasks.filter(t=>!t.done);const unread=4-state.readMessages.length;
 const status=(path:string)=>path==='/libreta'?`${pending.length} pendientes`:path==='/salud'?'1 hora médica próxima':null;
 return <>
  <div className="home-greeting"><p className="home-date">Jueves 15 de octubre</p><h1>Hola, {state.name}</h1><p>¿Qué necesitas hacer hoy?</p></div>
  <h2 className="home-section-title">Tus secciones</h2>
  <div className="module-grid">{sections.map(section=>{const Icon=icons[section.icon];const s=status(section.path);return <Link key={section.path} to={section.path} className="module-card"><Icon className="module-icon" strokeWidth={1.7} aria-hidden="true"/><h2>{section.title}</h2><p>{section.description}</p>{s&&<span className="module-status">{s}</span>}</Link>})}</div>
  <div className="home-section-row"><h2 className="home-section-title">Próximos días</h2><Link to="/libreta" className="text-link">Ver mi libreta</Link></div>
  <ul className="agenda">
   <li><Link to="/salud" className="agenda-item"><span className="agenda-date"><strong>19</strong>oct</span><span className="agenda-copy"><strong>Consulta de medicina general</strong><span>Lunes 10:30 · Clínica de ejemplo</span></span></Link></li>
   {pending.slice(0,2).map(task=><li key={task.id} className="agenda-item"><span className="agenda-date"><strong>{task.date.slice(8)}</strong>oct</span><span className="agenda-copy"><strong>{task.title}</strong><span>Pendiente en tu libreta</span></span><Button variant="outline" className="agenda-done" aria-label={`Marcar como hecho: ${task.title}`} onClick={()=>update(s=>({...s,tasks:s.tasks.map(t=>t.id===task.id?{...t,done:true}:t)}))}><Check/>Hecho</Button></li>)}
  </ul>
  <div className="message-strip"><div><h2>Mensajes importantes</h2><p>{unread>0?`Tienes ${unread} mensajes por leer.`:'Leíste todos tus mensajes.'}</p></div><Button asChild><Link to="/mensajes">Leer mensajes</Link></Button></div>
 </>}
