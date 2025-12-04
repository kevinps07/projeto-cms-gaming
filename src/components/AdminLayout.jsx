import Nav from "./Nav";

function AdminLayout(){

    return (
        <div className="flex min-h-screen">

            {/* ⬅️ ESTA É A SIDEBAR ESQUERDA */}
            
            <div className="relative shine h-screen w-64 pr-2 shadow-2xl shadow-MediumPurple">
             <Nav className="relative h-full flex flex-col p-4 bg-LuckyPoint">
                    <div>
                        <img src="../assets/perfil.webp" alt="" />
                        <span className="text-xs"> (Admin) </span>
                        <span>Johnny Cash</span>
                    </div>
            </Nav>
            </div>
            {/* A área principal ocupa o espaço restante */}
            <main className="flex flex-col w-full gap-8 h-screen border border-pink-500 p-8 overflow-y-auto">
                <div className="flex-1 w-full border border-lime-600">
                    <div className="">
                        teste
                    </div>
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