import PageNotFound from './PageNotFound'
import auth from './auth/routes'
import dashboard from './dashboard/routes'

export default [
  ...auth,
  ...dashboard,
  {
    path: '*',
    component: PageNotFound
  }
]
