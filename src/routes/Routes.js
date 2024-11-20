import { useRoutes } from "react-router-dom"

function Routes() {
    const ROUTING = useRoutes([
        {
            path: "*",
            element:  <h1>Err not found</h1>      
        },
        {
            path: "/",
            element: <h1>Hello</h1>
        }
    ])
    return ROUTING
}

export default Routes;