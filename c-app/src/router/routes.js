import Home from '@/views/Home.vue';
import Classify from '@/views/Classify.vue';
import Shopping from '@/views/Shopping.vue';
import Search from '@/views/Search.vue';

export default [{
  path: '*',
  redirect: '/home/classify',
},
{
  name: 'search',
  path: '/search',
  component: Search,
},
{
  name: 'home',
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
