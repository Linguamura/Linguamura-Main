interface PageContainerProps {
    children: React.ReactNode
    className?: string
  }
  
  export function PageContainer({ children, className }: PageContainerProps) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] p-6">
        <div className={`mx-auto max-w-2xl ${className}`}>
          {children}
        </div>
      </div>
    )
  }
  
  