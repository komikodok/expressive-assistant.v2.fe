"use client"

import { Chat } from "@/components/chat/chat-root"
import ChatSidebarContent from "@/components/chat/chat-sidebar-content"
import ChatContent from "@/components/chat/chat-content"

const ChatLayout = () => {
  return (
    <Chat.Root>
      <Chat.Sidebar>
        <Chat.SidebarBody>
          <ChatSidebarContent />
        </Chat.SidebarBody>
      </Chat.Sidebar>

      <Chat.Window>
        <Chat.Body>
          <ChatContent></ChatContent>
        </Chat.Body>
      </Chat.Window>
    </Chat.Root>
  )
}

export default ChatLayout


// const ChatLayout = ({ children }: {children: React.ReactNode}) => {
//   return (
//     <div className="w-screen h-screen bg-[#031a1c] flex overflow-hidden">
//         <aside>
//           <ChatSidebar></ChatSidebar>
//         </aside>

//         <main className='w-full h-full ml-64 flex-1 border border-pink-500'>
//             {children}
//         </main>
//     </div>
//   )
// }

// export default ChatLayout