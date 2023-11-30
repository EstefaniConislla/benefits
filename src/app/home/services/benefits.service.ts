import { Injectable } from '@angular/core';
import { Benefits } from '../models/benefts.interface';

@Injectable({
  providedIn: 'root',
})
export class BenefitsService {
  private benefits!: Benefits[];
  constructor() {
    this.benefits = [
      {
        id: '1',
        imagen: '/assets/img/card-img.svg',
        isCopec: false,
        isNewBenefit: true,
        title:
          'Beca de Excelencia en Artes, Deportes y Ciencias, para hijos/as de trabajadores/as.',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [1],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '2',
        imagen: '/assets/img/card-dental.svg',
        isCopec: true,
        isNewBenefit: false,
        title:
          'Beca de Excelencia en Artes, Deportes y Ciencias, para hijos/as de trabajadores/as.',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [1],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '3',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title:
          'Beca de Excelencia en Artes, Deportes y Ciencias, para hijos/as de trabajadores/as.',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [1],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '4',
        imagen: '/assets/img/card-optica.svg',
        isCopec: true,
        isNewBenefit: true,
        title:
          'Beca de Excelencia en Artes, Deportes y Ciencias, para hijos/as de trabajadores/as.',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [1],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '5',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: true,
        title:
          'Beca de Excelencia en Artes, Deportes y Ciencias, para hijos/as de trabajadores/as.',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [2],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '6',
        imagen: '/assets/img/card-img.svg',
        isCopec: true,
        isNewBenefit: true,
        title:
          'Beca de Excelencia en Artes, Deportes y Ciencias, para hijos/as de trabajadores/as.',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [1],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '7',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: true,
        title: 'Ayuda Matrimonio / Acuerdo de Unión Civil',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [1],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '8',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title: 'Gimnasios',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '9',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: true,
        title: 'Ayuda Matrimonio / Acuerdo de Unión Civil',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '10',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title: 'Gimnasios',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '11',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: true,
        title: 'Óptica (Convenio y Orden de Compra)',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '12',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title: 'Gimnasios',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '13',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title: 'Gimnasios',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '14',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title: 'Gimnasios',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [4],
        beneficiaryTypes: [1],
        plans: [1],
      },
      {
        id: '15',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: true,
        title: 'Ayuda Matrimonio / Acuerdo de Unión Civil',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [1],
        antiquies: [4],
        beneficiaryTypes: [2],
        plans: [1],
      },
      {
        id: '16',
        imagen: '/assets/img/card-gym.svg',
        isCopec: false,
        isNewBenefit: false,
        title: 'Gimnasios',
        description:
          'Breve descripción orientativa de beneficios, de hasta dos lineas maximo de extension',
        textLabel: 'Tiempo limitado',
        categories: [2],
        antiquies: [4],
        beneficiaryTypes: [2],
        plans: [1],
      },
    ];
  }

  getBenefits(): Benefits[] {
    // Simula una operación asincrónica, por ejemplo, obtener datos de una API
    return this.benefits;
  }
}
