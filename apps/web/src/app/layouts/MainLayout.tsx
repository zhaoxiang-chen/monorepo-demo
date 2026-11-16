import { NavLink, Outlet } from "react-router"

export function MainLayout() {
  return (
    <div>
      <header>
        <strong>frontend-engineering-system2</strong>
        <nav aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </header>
      {/* 嵌套路由出口，类似vue-router的<router-view>，react-router的<Outlet>，用于渲染子路由组件 */}
      <Outlet />
    </div>
  )
}
