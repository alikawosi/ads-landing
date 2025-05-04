
import * as React from "react"

// Updated mobile breakpoint to match common mobile screen sizes
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Add a new hook to detect extra small devices
export function useIsExtraSmall() {
  const [isExtraSmall, setIsExtraSmall] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 480 : false
  )

  React.useEffect(() => {
    const checkExtraSmall = () => {
      setIsExtraSmall(window.innerWidth < 480)
    }
    
    // Initial check
    checkExtraSmall()
    
    // Add event listener
    window.addEventListener('resize', checkExtraSmall)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkExtraSmall)
  }, [])

  return isExtraSmall
}
