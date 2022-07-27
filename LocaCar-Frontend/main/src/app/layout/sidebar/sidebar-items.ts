import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  // {
  //   path: '',
  //   title: 'MENUITEMS.MAIN.TEXT',
  //   moduleName: '',
  //   icon: '',
  //   class: '',
  //   groupTitle: true,
  //   submenu: []
  // },
  {
    path: 'dashboard/main',
    title: 'MENUITEMS.HOME.TEXT',
    moduleName: 'dashboard',
    icon: 'fas fa-home',
    class: '',
    groupTitle: false,
    submenu: [
      // {
      //   path: 'dashboard/main',
      //   title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
      //   moduleName: 'dashboard',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   submenu: []
      // },
    ]
  },
  {
    path: 'locacao',
    title: 'MENUITEMS.SOLICITACAO-LOCACAO.TEXT',
    moduleName: 'locacao',
    icon: 'fas fa-list',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'usuario',
    title: 'MENUITEMS.USUARIO.TEXT',
    moduleName: 'usuario',
    icon: 'fas fa-users',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'veiculo',
    title: 'MENUITEMS.VEICULO.TEXT',
    moduleName: 'veiculo',
    icon: 'fas fa-car',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/veiculo/disponiveis',
        title: 'MENUITEMS.VEICULO.LIST.DISPONIVEIS',
        moduleName: 'veiculo',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/veiculo/manutencao',
        title: 'MENUITEMS.VEICULO.LIST.MANUTENCAO',
        moduleName: 'veiculo',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: 'veiculo/cadastro',
        title: 'MENUITEMS.VEICULO.LIST.CADASTRO',
        moduleName: 'veiculo',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
    ]
  },
  {
    path: 'advance-table',
    title: 'MENUITEMS.ADVANCE-TABLE.TEXT',
    moduleName: 'advance-table',
    icon: 'fab fa-envira',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: '',
    title: 'MENUITEMS.APPS.TEXT',
    moduleName: '',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },
  {
    path: 'calendar',
    title: 'MENUITEMS.CALENDAR.TEXT',
    moduleName: 'calendar',
    icon: 'far fa-calendar',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'task',
    title: 'MENUITEMS.TASK.TEXT',
    moduleName: 'task',
    icon: 'fas fa-tasks',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'contacts',
    title: 'MENUITEMS.CONTACTS.TEXT',
    moduleName: 'contacts',
    icon: 'far fa-address-card',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: '',
    title: 'MENUITEMS.EMAIL.TEXT',
    moduleName: 'email',
    icon: 'fas fa-mail-bulk',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/email/inbox',
        title: 'MENUITEMS.EMAIL.LIST.INBOX',
        moduleName: 'email',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/email/compose',
        title: 'MENUITEMS.EMAIL.LIST.COMPOSE',
        moduleName: 'email',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/email/read-mail',
        title: 'MENUITEMS.EMAIL.LIST.READ',
        moduleName: 'email',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'MENUITEMS.MORE-APPS.TEXT',
    moduleName: 'apps',
    icon: 'fab fa-google-play',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/apps/chat',
        title: 'MENUITEMS.MORE-APPS.LIST.CHAT',
        moduleName: 'apps',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/dragdrop',
        title: 'MENUITEMS.MORE-APPS.LIST.DRAG-DROP',
        moduleName: 'apps',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/contact-grid',
        title: 'MENUITEMS.MORE-APPS.LIST.CONTACT-GRID',
        moduleName: 'apps',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/support',
        title: 'MENUITEMS.MORE-APPS.LIST.SUPPORT',
        moduleName: 'apps',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'MENUITEMS.COMPONENTS.TEXT',
    moduleName: '',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },
  {
    path: '',
    title: 'MENUITEMS.WIDGETS.TEXT',
    moduleName: 'widget',
    icon: 'fab fa-pagelines',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/widget/chart-widget',
        title: 'MENUITEMS.WIDGETS.LIST.CHART-WIDGET',
        moduleName: 'widget',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/widget/data-widget',
        title: 'MENUITEMS.WIDGETS.LIST.DATA-WIDGET',
        moduleName: 'widget',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'MENUITEMS.FORMS.TEXT',
    moduleName: 'forms',
    icon: 'fab fa-wpforms',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/forms/form-controls',
        title: 'MENUITEMS.FORMS.LIST.CONTROLS',
        moduleName: 'forms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/advance-controls',
        title: 'MENUITEMS.FORMS.LIST.ADVANCE',
        moduleName: 'forms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/form-example',
        title: 'MENUITEMS.FORMS.LIST.EXAMPLE',
        moduleName: 'forms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/form-validation',
        title: 'MENUITEMS.FORMS.LIST.VALIDATION',
        moduleName: 'forms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/wizard',
        title: 'MENUITEMS.FORMS.LIST.WIZARD',
        moduleName: 'forms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/forms/editors',
        title: 'MENUITEMS.FORMS.LIST.EDITORS',
        moduleName: 'forms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'MENUITEMS.TABLES.TEXT',
    moduleName: 'tables',
    icon: 'fas fa-table',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/tables/basic-tables',
        title: 'MENUITEMS.TABLES.LIST.BASIC',
        moduleName: 'tables',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/tables/material-tables',
        title: 'MENUITEMS.TABLES.LIST.MATERIAL',
        moduleName: 'tables',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/tables/ngx-datatable',
        title: 'MENUITEMS.TABLES.LIST.NGX-DATATABLE',
        moduleName: 'tables',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'User Interface (UI)',
    moduleName: 'ui',
    icon: 'fas fa-drafting-compass',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/ui/alerts',
        title: 'Alerts',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/badges',
        title: 'Badges',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/chips',
        title: 'Chips',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/modal',
        title: 'Modal',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/buttons',
        title: 'Buttons',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/expansion-panel',
        title: 'Expansion Panel',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/bottom-sheet',
        title: 'Bottom Sheet',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/dialogs',
        title: 'Dialogs',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/cards',
        title: 'Cards',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/labels',
        title: 'Labels',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/list-group',
        title: 'List Group',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/snackbar',
        title: 'Snackbar',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/preloaders',
        title: 'Preloaders',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/progressbars',
        title: 'Progress Bars',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/tabs',
        title: 'Tabs',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/typography',
        title: 'Typography',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/ui/helper-classes',
        title: 'Helper Classes',
        moduleName: 'ui',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Medias',
    moduleName: 'media',
    icon: 'far fa-images',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/media/gallery',
        title: 'Image Gallery',
        moduleName: 'media',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Charts',
    moduleName: 'charts',
    icon: 'fas fa-chart-line',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/charts/echart',
        title: 'Echart',
        moduleName: 'charts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/apex',
        title: 'Apex',
        moduleName: 'charts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/chartjs',
        title: 'ChartJS',
        moduleName: 'charts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/ngx-charts',
        title: 'Ngx-Charts',
        moduleName: 'charts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/charts/gauge',
        title: 'Gauge',
        moduleName: 'charts',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Timeline',
    moduleName: 'timeline',
    icon: 'fab fa-hubspot',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/timeline/timeline1',
        title: 'Timeline 1',
        moduleName: 'timeline',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/timeline/timeline2',
        title: 'Timeline 2',
        moduleName: 'timeline',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Icons',
    moduleName: 'icons',
    icon: 'fas fa-paw',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/icons/material',
        title: 'Material Icons',
        moduleName: 'icons',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/icons/font-awesome',
        title: 'Font Awesome',
        moduleName: 'icons',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: '-- Pages',
    moduleName: '',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },
  {
    path: '',
    title: 'Authentication',
    moduleName: 'authentication',
    icon: 'fas fa-id-card',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/authentication/signin',
        title: 'Sign In',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/signup',
        title: 'Sign Up',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/forgot-password',
        title: 'Forgot Password',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/locked',
        title: 'Locked',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/page404',
        title: '404 - Not Found',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/page500',
        title: '500 - Server Error',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Extra Pages',
    moduleName: 'extra-pages',
    icon: 'far fa-file-alt',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/extra-pages/profile',
        title: 'Profile',
        moduleName: 'extra-pages',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/pricing',
        title: 'Pricing',
        moduleName: 'extra-pages',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/invoice',
        title: 'Invoice',
        moduleName: 'extra-pages',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/faqs',
        title: 'Faqs',
        moduleName: 'extra-pages',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/extra-pages/blank',
        title: 'Blank Page',
        moduleName: 'extra-pages',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Maps',
    moduleName: 'maps',
    icon: 'fas fa-globe-americas',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/maps/google',
        title: 'Google Map',
        moduleName: 'maps',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Multi level',
    moduleName: 'multilevel',
    icon: 'fas fa-angle-double-down',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/multilevel/first1',
        title: 'First',
        moduleName: 'multilevel',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/',
        title: 'Second',
        moduleName: 'secondlevel',
        icon: '',
        class: 'ml-sub-menu',
        groupTitle: false,
        submenu: [
          {
            path: '/multilevel/secondlevel/second1',
            title: 'Second 1',
            moduleName: 'secondlevel',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            submenu: []
          },
          {
            path: '/multilevel/secondlevel/second2',
            title: 'Second 2',
            moduleName: 'secondlevel',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            submenu: []
          }
        ]
      },
      {
        path: '/multilevel/first3',
        title: 'Third',
        moduleName: 'multilevel',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  }
];
