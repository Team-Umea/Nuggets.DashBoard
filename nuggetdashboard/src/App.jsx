import { RouterProvider } from "react-router-dom";
import route from "./routing/Routing";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
