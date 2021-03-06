export const menuItems = [
  {
    title: 'Panel Latoneria',
    routerLink: 'dashboard',
    icon: 'fa-home',
    selected: false,
    expanded: false,
    order: 0
  },
    {
    title: 'Taller Latoneria',
    routerLink: 'form-elements',
    icon: ' fa-car',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
       {
        title: 'Cotizaciones',
        routerLink: 'taller/estimaciones',

      },
      {
        title: 'Autos',
        routerLink: '#',
        subMenu: [{
          title: 'Listado',
          routerLink: 'autos/listado',
          disabled: true,
          selected: false,
          expanded: false
        },
        {
          title: 'Marcas',
          routerLink: 'autos/marcas',
          disabled: true,
          selected: false,
          expanded: false
        },
        {
          title: 'Modelos',
          routerLink: 'autos/modelos',
          disabled: true,
          selected: false,
          expanded: false
        }
      
      ]

      },
      {
        title: 'Clientes',
        routerLink: 'clientes/listado',

      },
      {
        title: 'Servicios',
        routerLink: 'servicios/listado',

      },
      {
        title: 'Taller',
        url: '#',
        subMenu: [{
          title: 'Nuevo Ingreso',
          routerLink: 'taller/nuevo',
          disabled: true,
          selected: false,
          expanded: false
        },
        {
          title: 'Listado de Ingresos',
          routerLink: 'taller/listado',
          disabled: true,
          selected: false,
          expanded: false
        },
        {
          title: 'Seguimiento en Taller',
          routerLink: 'taller/seguimiento',
          disabled: true,
          selected: false,
          expanded: false
        }  
      
      ]
      },
      
      {
        title: 'Busqueda Avanzada',
        routerLink: ''
      },
      {
        title: 'Reportes',
        routerLink: 'charts/ng2charts'
      }
    ]
  },
   {
    title: 'Inventario',
    routerLink: 'form-elements',
    icon: 'fa fa-archive',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Panel Inventario',
        routerLink: 'inventario/panel'
      },
      {
        title: 'Productos',
        routerLink: 'productos/listado'
      }
    ]
  },
   {
    title: 'Nomina',
    routerLink: 'form-elements',
    icon: 'fa fa-users',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Empleados',
        routerLink: 'empleados/listado'
      },
   
    ]
  },

  {
    title: 'Facturacion',
    routerLink: 'form-elements',
    icon: 'fa-money',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Listado de Facturas',
        routerLink: 'facturas/listado'
      },
    ]
  },
  {
    title: 'Comercializacion',
    routerLink: 'form-elements',
    icon: 'fa-money',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Proveedores',
        routerLink: 'proveedores/listado'
      },
      {
        title: 'Compras',
        routerLink: '',
        subMenu: [
          {
            title: 'Nueva',
            routerLink: 'compras/nueva'
          },
          {
            title: 'Listado',
            routerLink: 'compras/listado'
          }
        ]
      }
    ]
  },

  {
    title: 'Contabilidad',
    routerLink: 'form-elements',
    icon: 'fa-money',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Listado de Cuentas',
        routerLink: 'cuentas/listado'
      },
      {
        title: 'Arbol de cuentas',
        routerLink: 'cuentas/general'
      }
    ]
  },
   {
    title: 'Sistema',
    routerLink: 'form-elements',
    icon: 'fa-desktop',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Usuarios',
        routerLink: 'usuarios/listado'
      },
      {
        title: 'Roles',
        routerLink: 'roles/listado'
      }
    ]
  },

];

let exampleMenu = [

    {
    title: 'Charts',
    routerLink: 'charts',
    icon: 'fa-bar-chart',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Ng2-Charts',
        routerLink: 'charts/ng2charts',
      },
    ]
  },
  {
    title: 'UI Features',
    routerLink: 'ui',
    icon: 'fa-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Buttons',
        routerLink: 'ui/buttons'
      },
      {
        title: 'Cards',
        routerLink: 'ui/cards'
      },
      {
        title: 'Components',
        routerLink: 'ui/components'
      },
      {
        title: 'Icons',
        routerLink: 'ui/icons'
      },
      {
        title: 'Grid',
        routerLink: 'ui/grid'
      },
      {
        title: 'List Group',
        routerLink: 'ui/list-group'
      },
      {
        title: 'Media Objects',
        routerLink: 'ui/media-objects'
      },
      {
        title: 'Tabs & Accordions',
        routerLink: 'ui/tabs-accordions'
      },
      {
        title: 'Typography',
        routerLink: 'ui/typography'
      }
    ]
  },
  {
    title: 'Mail',
    routerLink: 'mail/mail-list/inbox',
    icon: 'fa-envelope-o',
    selected: false,
    expanded: false,
    order: 330
  },
  {
    title: 'Calendar',
    routerLink: 'calendar',
    icon: 'fa-calendar',
    selected: false,
    expanded: false,
    order: 350
  },
  {
    title: 'Form Elements',
    routerLink: 'form-elements',
    icon: 'fa-pencil-square-o',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        routerLink: 'form-elements/inputs'
      },
      {
        title: 'Form Layouts',
        routerLink: 'form-elements/layouts'
      },
      {
        title: 'Form Validations',
        routerLink: 'form-elements/validations'
      },
      {
        title: 'Form Wizard',
        routerLink: 'form-elements/wizard'
      }
    ]
  },
  {
    title: 'Tables',
    routerLink: 'tables',
    icon: 'fa-table',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        routerLink: 'tables/basic-tables'
      },
      {
        title: 'Dynamic Tables',
        routerLink: 'tables/dynamic-tables'
      }
    ]
  },
  {
    title: 'Editors',
    routerLink: 'editors',
    icon: 'fa-pencil',
    selected: false,
    expanded: false,
    order: 550,
    subMenu: [
      {
        title: 'Froala Editor',
        routerLink: 'editors/froala-editor'
      },
      {
        title: 'Ckeditor',
        routerLink: 'editors/ckeditor'
      }
    ]
  },
  {
    title: 'Maps',
    routerLink: 'maps',
    icon: 'fa-globe',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Vector Maps',
        routerLink: 'maps/vectormaps'
      },
      {
        title: 'Google Maps',
        routerLink: 'maps/googlemaps'
      },
      {
        title: 'Leaflet Maps',
        routerLink: 'maps/leafletmaps'
      }
    ]
  },
  {
    title: 'Pages',
    routerLink: ' ',
    icon: 'fa-file-o',
    selected: false,
    expanded: false,
    order: 650,
    subMenu: [
      {
        title: 'Login',
        routerLink: '/login'
      },
      {
        title: 'Register',
        routerLink: '/register'
      },
      {
        title: 'Blank Page',
        routerLink: 'blank'
      },
      {
        title: 'Error Page',
        routerLink: '/pagenotfound'
      }
    ]
  },
  {
    title: 'Menu Level 1',
    icon: 'fa-ellipsis-h',
    selected: false,
    expanded: false,
    order: 700,
    subMenu: [
      {
        title: 'Menu Level 1.1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Menu Level 1.2',
        url: '#',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  },
  {
    title: 'External Link',
    url: 'http://themeseason.com',
    icon: 'fa-external-link',
    selected: false,
    expanded: false,
    order: 800,
    target: '_blank'
  }

]
