import Stats from "./stats";
import Daos from "./daos";
import FormDialog from "../common/form-dialog";
import DaoForm from "./dao-form";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center pb-3">
        <h1 className="sm:text-2xl text-xl font-normal font-jost">Dashboard</h1>
        <FormDialog trigger="Create a DAO" title="Create a DAO" addIcon={true}>
          <DaoForm />
        </FormDialog>
      </div>
      <Stats />
      <div className="w-full h-px bg-white/5 my-8" />
      <Daos />
    </div>
  );
}
