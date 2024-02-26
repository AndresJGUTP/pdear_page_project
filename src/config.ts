import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Plan Decenal de Educación Ambiental de Risaralda - PDEAR',
  description: 'Plan Decenal de Educación Ambiental de Risaralda - PDEAR',
  author: {
    name: 'Andrés Jiménez',
    twitter: '',
    url: '',
    email: 'jg.andresjg@gmail.com',
    summary: ''
  },
  org: {
    name: 'Plan Decenal de Educación Ambiental de Risaralda - PDEAR',
    twitter: '@adfa',
    url: 'https://www.risaralda.gov.co/educacion/publicaciones/155046/plan-decenal-de-educacion-ambiental-de-risaralda-pdear/',
    email: 'correo@correo.com',
    summary:
      'Es el instrumento técnico y político, orientador de los procesos de institucionalización de las apuestas conceptuales, contextuales y proyectivas de la Política Nacional de Educación Ambiental en el Departamento, en el marco de lo planteado en el artículo 5to de la Ley 1549 de 2012.'
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/png/logo_pdear.png'
export { default as LogoImage } from './assets/png/logo_pdear.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'
export { default as VideoIntro } from './assets/videos/video_intro.mp4'

export const NavigationLinks = [
  { name: 'Inicio', href: '' },
  { name: 'Noticias', href: 'blog' },
  { name: 'Caja de Herramientas', href: 'caja_herramientas' },
  { name: 'Galería Fotográfica', href: 'galleria_fotografica' },
  { name: 'Diplomado', href: 'diplomado' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>