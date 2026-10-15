export const sections = [
  { path: '/libreta', title: 'Libreta', description: 'Tus pendientes, notas y fechas importantes.', tone: 'notebook', links: ['Calendario', 'Recordatorios', 'Mis notas'], icon: 'book' },
  { path: '/salud', title: 'Salud', description: 'Todo lo importante para cuidarte.', tone: 'health', links: ['Horas médicas', 'Exámenes', 'Medicamentos'], icon: 'heart' },
  { path: '/mi-informacion', title: 'Mi información', description: 'Tus datos y documentos, en un solo lugar.', tone: 'information', links: ['Datos personales', 'AFP y pagos', 'Contactos'], icon: 'user' },
  { path: '/servicios', title: 'Servicios a tu alcance', description: 'Una ayuda para lo que necesitas cada día.', tone: 'services', links: ['Servicios útiles', 'Ofertas', 'Mapa'], icon: 'shop' },
] as const;
export const messages = [
 { id:'m1', category:'Salud', sender:'Clínica · ejemplo', subject:'Tu hora médica está confirmada', date:'16 oct. 2026', body:'Mensaje ficticio: Carmen, tu consulta de medicina general está agendada para el lunes 19 de octubre a las 10:30. Recuerda llevar tus exámenes anteriores. Esta cita no es real.' },
 { id:'m2', category:'Salud', sender:'Laboratorio · ejemplo', subject:'Tu documento de examen está disponible', date:'15 oct. 2026', body:'Mensaje ficticio: hay un documento de ejemplo disponible para revisar. No contiene resultados clínicos ni diagnósticos.' },
 { id:'m3', category:'AFP', sender:'AFP · ejemplo', subject:'Un nuevo documento informativo para ti', date:'14 oct. 2026', body:'Mensaje ficticio: este documento muestra cómo podrías consultar información previsional en Tatapp. No existe conexión con una AFP y no representa un pago real.' },
 { id:'m4', category:'Trámites', sender:'Atención ciudadana · ejemplo', subject:'Información sobre tu trámite', date:'13 oct. 2026', body:'Mensaje ficticio: recuerda revisar los requisitos antes de realizar un trámite. Tatapp no ha iniciado ni completado ninguna solicitud.' },
];
export type Task = {id:string; title:string; date:string; done:boolean};
export type Note = {id:string; title:string; body:string};
export const initialState = {
 name:'Carmen', largeText:false, notifications:true, emergencyShared:false,
 tasks: [ { id:'t1',title:'Llevar los exámenes a la consulta médica',date:'2026-10-19',done:false }, {id:'t2',title:'Revisar mis documentos de AFP',date:'2026-10-20',done:false}, {id:'t3',title:'Llamar a mi hermana',date:'2026-10-16',done:false} ] as Task[],
 notes:[{id:'n1',title:'Para mi próxima consulta',body:'Preguntar qué documentos debo llevar a la próxima visita.'}] as Note[],
 favorites:[] as string[], readMessages:[] as string[], readNotifications:[] as string[],
 medications:[] as {id:string;name:string;time:string}[], emergencyName:'', emergencyPhone:'',
};
export type DemoState = typeof initialState;
export const searchItems = [
 {title:'Horas médicas',category:'Salud',path:'/salud',keywords:'citas consulta hora médica medico'},
 {title:'Resultados de exámenes',category:'Salud',path:'/salud',keywords:'examen exámenes laboratorio documentos'},
 {title:'AFP y últimos pagos',category:'Mi información',path:'/mi-informacion',keywords:'afp pensión previsión pago afiliacion'},
 {title:'Mis tareas pendientes',category:'Libreta',path:'/libreta',keywords:'pendiente semana tarea recordatorio calendario notas'},
 {title:'Contactos y números de atención',category:'Mi información',path:'/mi-informacion',keywords:'número telefono contacto atención emergencia'},
 {title:'Mensajes importantes',category:'Mensajes',path:'/mensajes',keywords:'correo mensaje clínica documento'},
 {title:'Servicios útiles y mapa',category:'Servicios',path:'/servicios',keywords:'mapa servicio oferta pedido'},
] as const;
export function findResults(query:string) { const normalize=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' '); const words=normalize(query).split(/\s+/).filter(w=>w.length>3); return searchItems.filter(item=>words.some(w=>normalize(`${item.title} ${item.keywords}`).includes(w))); }
