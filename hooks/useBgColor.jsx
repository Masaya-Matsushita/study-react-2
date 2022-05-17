import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"

export const useBgColor = () => {
  const router = useRouter()

  const BgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue"
      }
      case "/about": {
        return "beige"
      }
      default:
        break
    }
  }, [router.pathname])

  useEffect(() => {
    document.body.style.backgroundColor = BgColor
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [BgColor])
}
