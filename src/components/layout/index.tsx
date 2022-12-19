import { Outlet } from 'react-router-dom'
import { Sidebar } from '../sidebar/Sidebar'

export const Layout: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tag top-tag">&lt;body&gt</span>

        <Outlet />
        <span className="tag top-tag">&lt;body&gt
        <br/>
        <span className="bottam-tag-html">&lt;body&gt</span>
        </span>
      </div>
    </div>
  )
}
