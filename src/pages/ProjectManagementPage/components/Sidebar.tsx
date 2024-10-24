import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '../../../components/ui/sidebar';
import { VscProject } from 'react-icons/vsc';

const SideBar = () => {
  return (
    <Sidebar className="bottom-0 translate-y-40" collapsible="icon">
      <SidebarContent>
        <SidebarMenuItem>
          <SidebarMenuButton isActive>
            <VscProject />
            <a href="#">
              <span className="text-xl font-bold">Project Management</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuSubButton>
              <a href="#">
                <span className="font-semibold">Task Management</span>
              </a>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <SidebarMenuSubButton>
              <a href="#">
                <span className="font-semibold">Timeline</span>
              </a>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <SidebarMenuSubButton>
              <a href="#">
                <span className="font-semibold">Calendar Mentor</span>
              </a>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <SidebarMenuSubButton>
              <a href="#">
                <span className="font-semibold">Financial Report</span>
              </a>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
