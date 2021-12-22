import Table from "./Table";

import { useState } from "react";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };
  return (
    <div>
      <Table setRefresh={setRefresh} isRefresh={isRefresh} />
    </div>
  );
}

export default App;
