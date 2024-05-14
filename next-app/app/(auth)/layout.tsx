export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
       <div>
         <div className="bg-yellow-300">
            <h1 className="text-black p-2 text-right pr-4 border-b">Sign In and get extra 20% bonus</h1>
        </div>
        {children}
       </div>
        
    )
}