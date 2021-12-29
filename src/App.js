import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';
import './App.css';

let apiSpec = 'https://indexer-v3-api-production.up.railway.app/swagger.json'
if(process.env.CHAIN_ID==4) {
  apiSpec = 'https://indexer-v3-api-development.up.railway.app/swagger.json'
}

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl={apiSpec} hideInternal="true" />
    </div>
  );
}

export default App;
