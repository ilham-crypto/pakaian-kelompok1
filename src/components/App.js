import FormKonfirmasi from "./FormKonfirmasi";

import { useState } from "react";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };
  return (
    <div>
      <FormKonfirmasi setRefresh={setRefresh} isRefresh={isRefresh} />
    </div>
  );
}

export default App;
