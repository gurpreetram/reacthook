import ContextHook from "./contexthook/contextHooks"
import UseMemoHook from "./usemMemohook/useMemohook"
import UseRefHook from "./userefhook/userefhook"
import UseStatehook from "./useStatehook/useStatehook"



function App() {

  return (
    <>
    <h1>Dashboard</h1>
    <UseStatehook />
    <UseRefHook />
    <UseMemoHook />
   <ContextHook />
    </>
  )
}

export default App
