import { Routes } from "@angular/router";

export default <Routes>[
  {
    path: 'photo-gallery',
    loadComponent: async () => (await import('./photo-gallery.component')).PhotoGalleryComponent,
  },
  {
    path: 'aerphone',
    loadComponent: async () => (await import('./aerphone.component')).AerphoneComponent,
  },
  {
    path: '**',
    redirectTo: 'photo-gallery',
  }
]
