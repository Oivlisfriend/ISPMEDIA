import React from "react";
import Sidebar from "^/lib/component/Sidebar/Sidebar";
import MainGroup from "../components/MainGroup";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";
import { observer } from "mobx-react";
import ReprocucerList from "../components/Sidebar";
import { radioStationsData } from "^/views/radio/components/stations";
import { MidiaView } from "^/lib/core/viewModels/MidiaViewModel";
// import { Container } from './styles';
type prop = {} & AuthViewProps & MidiaView;
const Reproducer = observer(({ viewModel, midiaView }: prop) => {
  return (
    <>
      <div className="flex gap-24   justify-center h-full w-full">
        <MainGroup midiaView={midiaView} />
        <ReprocucerList midiaView={midiaView} />
      </div>
    </>
  );
});

export default Reproducer;
