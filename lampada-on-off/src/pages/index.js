import Lampada from "@/components/Lampada";

export default function Home() {

  const Teste01 = () => {
    console.log("chegou aqui")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <Lampada />
        </div>
        <div className="col-4">
          <Lampada />
        </div>
        <div className="col-4">
          <Lampada />
        </div>
      </div>
    </div>
  );
}
