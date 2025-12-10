import Nav from "../Nav";
import List from "../List";
import Sidebar from "../Sidebar";
import Img from "../Img";
import BlockContent from "../BlockContent";
import Group from "../Group";
import Card from "../Card";

function AdminLayout() {
  return (
    <div className="flex flex-col bg-midnight top-0 start-0 w-screen min-h-screen">
      <Nav local="top" title="CMS">
        <List className="gap-4">
          <li>Sobre</li>
          <li>Sobre</li>
          <li>Sobre</li>
        </List>
      </Nav>

      <div className="flex flex-1">
        <Sidebar>
          <Nav>
            <List direction="v">
              <li className="flex font-mono font-bold">
                <div className="mr-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Johnny Cash
                <span className="ml-2 text-green-500">(online)</span>
              </li>
              <li>
                <div className="border-b-2"></div>
              </li>
              <div className="mt-4 mb-4"></div>
              <li>Sobre</li>
              <li>Sobre</li>
              <li>Sobre</li>
              <li>Sobre</li>
            </List>
          </Nav>
        </Sidebar>

        <BlockContent>
          <Group type="card">
            <Card title="teste" content="teste"/>
            <Card title="teste" content="teste"/>
            <Card title="teste" content="teste"/>
            <Card title="teste" content="teste"/>
          </Group>
        </BlockContent>
      </div>
    </div>
  );
}

export default AdminLayout;
