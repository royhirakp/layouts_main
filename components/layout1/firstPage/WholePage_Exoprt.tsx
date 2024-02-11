import React from "react";
import FirstPage from "./FirstPage";
import PageContent from "./parts/pageContains_Body/PageContains";

const WholePage = () => {
  return (
    <div>
      <FirstPage>
        <PageContent />
      </FirstPage>
    </div>
  );
};

export default WholePage;
