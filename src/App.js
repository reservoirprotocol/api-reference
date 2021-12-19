import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl="https://indexer-v3-api-development.up.railway.app/swagger.json" hideInternal="true" />
    </div>
  );
}

export default App;
