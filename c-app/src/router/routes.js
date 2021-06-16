import Home from '@/views/Home.vue';
import Classify from "@/views/Classify.vue";
import Shopping from "@/views/Shopping.vue";

export default [{
    path: '*',
    redirect: '/home/classify',
  },
  {
    name: "home",
    path: '/home',
    component: Home,
    children: [{
        name: 'classify',
        path: 'classify',
        component: Classify,
      },
      {
        name: 'shopping',
        path: 'shopping',
        component: Shopping,
      },
    ],
  },
];
