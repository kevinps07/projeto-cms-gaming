import Nav from "./Nav";
import Painel from "./Painel";
import Card from "./Card";

function AdminLayout(){

    return (
        <div className="lg:flex min-h-screen">

            {/* ⬅️ ESTA É A SIDEBAR ESQUERDA */}
            
            <div className="hidden lg:block relative shine h-screen w-64 pr-2 shadow-2xl shadow-MediumPurple">
             <Nav className="relative h-full flex flex-col p-4 bg-LuckyPoint">
                    <div>
                        <img src="../assets/perfil.webp" alt="" />
                        <span className="text-xs"> (Admin) </span>
                        <span>Johnny Cash</span>
                    </div>
            </Nav>
            </div>

            {/* A área principal ocupa o espaço restante */}
            <main className="flex flex-col w-full gap-8 flex-1 border border-pink-500 p-8 overflow-y-auto">
                <div className="flex-1 w-full border border-lime-600">
                   <Painel className={"flex flex-col p-4 gap-4 justify-center bg-slate-800 h-full w-full"}>
                            <h1 className="flex-1 self-center border border-MediumPurple font-bold text-xl">Dashboard</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
                                <Card className="min-h-64 bg-slate-950">
                                   teste    
                                </Card>

                                  <Card className="min-h-64 bg-slate-950">
                                   teste    
                                </Card>

                                  <Card className="min-h-64 bg-slate-950">
                                   teste    
                                </Card>

                                  <Card className="min-h-64 bg-slate-950">
                                   teste    
                                </Card>
                                
                            </div>
                   </Painel>
                </div>

                <div className="box-border flex flex-1 gap-8 w-full h-2/3 border border-CuriousBlue">
                    <div className="w-1/2 border border-MediumPurple">
                        teste
                    </div>
                    <div className="w-1/2 border border-yellow-500 ">
                        teste
                    </div>
                </div>

            </main>
            </div>
    );
}

export default AdminLayout;